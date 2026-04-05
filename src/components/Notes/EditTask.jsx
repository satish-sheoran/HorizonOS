import { ArrowLeftIcon, Check, Redo2, Undo2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';

import { addNote, manageEditTask } from '../../redux/features/NotesStrorage';
import { formatDate, formatTime } from '../../utils/formatTime';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const EditTask = () => {
    const dispatch = useDispatch();
    const EditTaskContainer = useRef(null)
    const theme = useSelector((store) => store.wallpaper.theme);

    const { open, TaskId } = useSelector((store) => store.Notes.EditTaskOpen)
    const Notes = useSelector(store => store.Notes.Notes);
    const [currTaskTitle, setCurrTaskTitle] = useState('');
    const [currTaskDesc, setCurrTaskDesc] = useState('');
    const [CurrTime, setCurrTime] = useState(new Date());



    // useEffect for updating title and desc at initial load
    useEffect(() => {
        if (!TaskId || !Notes.find(n => n.id === TaskId)) return;

        const currNote = Notes.find(n => n.id === TaskId);
        const update = () => {

            setCurrTaskTitle(currNote.title || '');
            setCurrTaskDesc(currNote.desc || '');
        }
        update()

    }, [TaskId, Notes]);


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
        if (!EditTaskContainer.current) return;

        gsap.to(EditTaskContainer.current, {
            x: open ? '0%' : "100%",
            y: open ? '0%' : "100%",
            opacity: open ? 1 : 0,
            duration: 0.4,
            ease: 'sine.inOut'
        })
    }, [open])

    return (
        <div ref={EditTaskContainer} className={`edit-task-container absolute flex w-full h-full left-0 top-0 flex-col gap-2.5 pt-2 pb-4  overflow-hidden 
        ${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}
        `}>

            {/* nav icons */}
            <div className="edit-tasks-controls flex items-center justify-between px-(--padding-lg) md:px-(--padding-xl)">

                {/* arrow icon */}
                <div className={`${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onClick={() => {
                        dispatch(manageEditTask({ open: false }))
                        dispatch(addNote({ TaskId, title: currTaskTitle, desc: currTaskDesc }))
                        setCurrTaskTitle('')
                        setCurrTaskDesc('')
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
                        dispatch(manageEditTask({ open: false }))
                        dispatch(addNote({ TaskId, title: currTaskTitle || '', desc: currTaskDesc || "" }))
                        setCurrTaskTitle('')
                        setCurrTaskDesc('')
                    }}>
                        <Check size={32} />
                    </button>
                </div>

            </div>


            {/* textarea inputs */}
            <div className='eidt-task-desc-parent flex flex-col gap-2 pl-3 min-h-0 grow rounded-lg overflow-y-auto px-(--padding-lg) md:px-(--padding-xl)'>

                <textarea spellCheck={false}
                    value={currTaskTitle}
                    onChange={(e) => setCurrTaskTitle(e.target.value)}
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
                    <span>{currTaskDesc.replace(/\s/g, "").length} characters</span>
                    {/* /\s/g is space and next line which is replaces with '' means removed and then show length */}
                </div>
                <textarea
                    spellCheck={false}
                    value={currTaskDesc}
                    onChange={(e) => setCurrTaskDesc(e.target.value)}
                    name="newTask-desc"
                    className={`newTask-desc rounded-lg  shrink-0 grow h-fit p-1 resize-none text-xl font-bold placeholder:text-xl outline-none 
                         ${theme !== 'dark' ? 'text-(--primary-dark-clr) placeholder:text-(--btn-light-hover)' : 'text-(--primary-light-clr) placeholder:text-(--sec-light-clr)'}
                        `}
                    placeholder='Start typing'
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

            </div>
        </div >
    )
}

export default EditTask