import { ArrowLeftIcon, Check, Redo2, Undo2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { addNote, setCreateTaskOpen } from '../../redux/features/NotesStrorage';
import { formatDate, formatTime } from '../../utils/formatTime';
import { CustomEase } from 'gsap/all';

const CreateTask = () => {
    const dispatch = useDispatch();
    const newTaskContainer = useRef(null)
    const theme = useSelector((store) => store.wallpaper.theme);
    const isNewTaskOpen = useSelector((store) => store.Notes.CreateTaskOpen)
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDesc, setNewTaskDesc] = useState('');
    const [CurrTime, setCurrTime] = useState(new Date());

    // to display current time and date exactly 
    useEffect(() => {
        const intrvl = setInterval(() => {
            setCurrTime(new Date());
        }, 1000)

        return () => clearInterval(intrvl)
    }, [])

    const formattedTime = formatTime(CurrTime, true);
    const formattedDate = formatDate(CurrTime);

    // auto increasing height of title and desc textarea based on content height
    const handleSize = (el) => {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
    }


    useGSAP(() => {
        if (!newTaskContainer.current) return;

        gsap.to(newTaskContainer.current, {
            x: isNewTaskOpen ? '0%' : "100%",
            y: isNewTaskOpen ? '0%' : "100%",
            scale: isNewTaskOpen ? 1 : 0.8,
            opacity: isNewTaskOpen ? 1 : 0,
            duration: 0.3,
            ease: 'sine.inOut'
        })

    }, [isNewTaskOpen])

    return (
        <div ref={newTaskContainer} className={`new-task-container absolute flex w-full h-full left-0 top-0 flex-col gap-2.5 pt-2 pb-4  overflow-hidden 
        ${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}
        `}>

            {/* nav icons */}
            <div className="create-tasks-controls flex items-center justify-between px-(--padding-lg) md:px-(--padding-xl)">

                {/* arrow icon */}
                <div className={`${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onClick={() => {
                        dispatch(setCreateTaskOpen({ open: false }))
                        if (!newTaskTitle && !newTaskDesc) return; // if both title and desc is empty then do not add note and just close create task page
                        dispatch(addNote({ title: newTaskTitle || '', desc: newTaskDesc || '' }))
                    }}>
                        <ArrowLeftIcon size={27} strokeWidth={2} />
                    </button>
                </div>

                {/* other its nav icons */}
                <div className={`flex items-center gap-3 ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onClick={() => toast.info('Functionality will be added soon')}>
                        <Undo2 size={27} />
                    </button>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onClick={() => toast.info('Functionality will be added soon')}>
                        <Redo2 size={27} />
                    </button>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onClick={() => {
                        dispatch(setCreateTaskOpen({ open: false }))
                        if (!newTaskTitle && !newTaskDesc) return; // if both title and desc is empty then do not add note and just close create task page

                        dispatch(addNote({ title: newTaskTitle || '', desc: newTaskDesc || '' }))
                    }}>
                        <Check size={32} />
                    </button>
                </div>

            </div>


            {/* textarea inputs */}
            <div className='task-desc-parent flex flex-col gap-2 pl-3 min-h-0 grow rounded-lg overflow-y-auto px-(--padding-lg) md:px-(--padding-xl)'>

                <textarea spellCheck={false}
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    name="newTask-title"
                    className={`newTask-title rounded-lg shrink-0 p-1 font-bold text-xl placeholder:text-xl h-fit resize-none  outline-none  
                        ${theme !== 'dark' ? 'text-(--primary-dark-clr) placeholder:text-(--btn-light-hover)' : 'text-(--primary-light-clr) placeholder:text-(--sec-light-clr)'}
                    `}
                    placeholder='Title'
                    rows={1}
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

                <div className="text-(--color-dark-gray) font-bold shrink-0 date-charCount flex gap-3 ">
                    <span>{formattedDate} {formattedTime}</span>
                    |
                    <span>{newTaskDesc.replace(/\s/g, "").length} characters</span>
                    {/* /\s/g is space and next line which is replaces with '' means removed and then show length */}
                </div>
                <textarea
                    spellCheck={false}
                    value={newTaskDesc}
                    onChange={(e) => setNewTaskDesc(e.target.value)}
                    name="newTask-desc"
                    className={`newTask-desc rounded-lg  shrink-0 grow h-fit p-1 resize-none text-xl font-bold placeholder:text-xl outline-none 
                         ${theme !== 'dark' ? 'text-(--primary-dark-clr) placeholder:text-(--btn-light-hover)' : 'text-(--primary-light-clr) placeholder:text-(--sec-light-clr)'}
                        `}
                    placeholder='Start typing'
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

            </div>
        </div>
    )
}

export default CreateTask