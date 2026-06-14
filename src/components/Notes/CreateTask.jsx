import { ArrowLeftIcon, Check, Redo2, Undo2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { addNote, setCreateTaskOpen } from '../../redux/features/NotesStrorage';
import { formatDate, formatTime } from '../../utils/formatTime';
import { CustomEase } from 'gsap/all';
import { COMMON_COLORS } from '../../constants/style';

const CreateTask = () => {
    const dispatch = useDispatch();
    const newTaskContainer = useRef(null)
    const theme = useSelector((store) => store.wallpaper.theme);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const Device = useSelector((store) => store.Device.currDevice);

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
        <div ref={newTaskContainer}
            style={{ backgroundColor: ThemeColors.bg }}
            className={`transition-colors duration-500 ease-out new-task-container absolute flex w-full h-full left-0 top-0 flex-col gap-2.5 pt-2 pb-4  overflow-hidden `}>

            {/* nav icons */}
            <div style={{color : ThemeColors.primaryText}} className={`create-tasks-controls flex items-center justify-between ${Device !=='Desktop'?'px-(--padding-lg)':'px-(--padding-xl)'}`}>

                {/* arrow icon */}
                <div  className={`transition-colors duration-500 ease-out`}>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onClick={() => {
                        dispatch(setCreateTaskOpen({ open: false }))
                        if (!newTaskTitle && !newTaskDesc) return; // if both title and desc is empty then do not add note and just close create task page
                        dispatch(addNote({ title: newTaskTitle || '', desc: newTaskDesc || '' }))
                        setNewTaskTitle('')
                        setNewTaskDesc('')
                    }}>
                        <ArrowLeftIcon size={27} strokeWidth={2} />
                    </button>
                </div>

                {/* other its nav icons */}
                <div className={`transition-colors duration-500 ease-out flex items-center gap-3 `}>
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
                        setNewTaskTitle('')
                        setNewTaskDesc('')
                    }}>
                        <Check size={32} />
                    </button>
                </div>

            </div>


            {/* textarea inputs */}
            <div className={`task-desc-parent flex flex-col gap-2 pl-3 min-h-0 grow rounded-lg overflow-y-auto ${Device !=='Desktop'?'px-(--padding-lg)':'px-(--padding-xl)'}`}>

                <textarea spellCheck={false}
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    name="newTask-title"
                    style={{color : ThemeColors.primaryText,
                        '--placeholder' : ThemeColors.thirdText
                    }}
                    className={`Placeholder duration-500 ease-out newTask-title rounded-lg shrink-0 p-1 font-bold text-xl placeholder:text-xl h-fit resize-none  outline-none  
                    `}
                    placeholder='Title'
                    rows={1}
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

                <div style={{color : ThemeColors.thirdText}} className={`font-bold shrink-0 date-charCount flex gap-3 `}>
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
                    style={{color : ThemeColors.secText,
                        '--placeholder' : ThemeColors.thirdText
                    }}
                    className={`Placeholder duration-500 ease-out newTask-desc rounded-lg  shrink-0 grow h-fit p-1 resize-none text-[0.95rem] font-bold placeholder:text-[0.95rem] outline-none`}
                    placeholder='Start typing'
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

            </div>
        </div>
    )
}

export default CreateTask