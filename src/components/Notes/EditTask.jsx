import { ArrowLeftIcon, Check, FolderClosed, Redo2, Undo2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { addNote, manageEditTask } from '../../redux/features/NotesStrorage';
import { formatDate, formatTime } from '../../utils/formatTime';
import { COMMON_COLORS } from '../../constants/style';

const EditTask = () => {
    const dispatch = useDispatch();
    const EditTaskContainer = useRef(null)

    const theme = useSelector((store) => store.wallpaper.theme);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const Device = useSelector((store) => store.Device.currDevice);

    const { open, TaskId } = useSelector((store) => store.Notes.EditTaskOpen)
    const Notes = useSelector(store => store.Notes.Notes);
    const Categories = useSelector(store => store.Notes.allCategories)


    const [currTaskTitle, setCurrTaskTitle] = useState('');
    const [currTaskDesc, setCurrTaskDesc] = useState('');
    const [currCategory, setcurrCategory] = useState('');
    const [CurrTime, setCurrTime] = useState(new Date());
    const [isSetCatOpen, setCatOpen] = useState(false) //to open/close category select options to change cateogry of edititng note 

    useGSAP(() => {
        const parent = document.querySelector('.menu');
        if (!parent) return;

        gsap.fromTo(parent, {
            scaleY: 0,
            opacity: 0,
            transformOrigin: "top"
        },
            {
                scaleY: isSetCatOpen ? 1 : 0,
                width: 'auto',
                height: 'auto',
                opacity: isSetCatOpen ? 1 : 0,
                y: isSetCatOpen ? 0 : -10,
                duration: 0.35,
                ease: 'expo.out'
            })

    }, [isSetCatOpen])



    // useEffect for updating title and desc at initial load
    useEffect(() => {
        if (!TaskId || !Notes.find(n => n.id === TaskId)) return;

        const currNote = Notes.find(n => n.id === TaskId);
        const update = () => {

            setCurrTaskTitle(currNote.title || '');
            setCurrTaskDesc(currNote.desc || '');
            setcurrCategory(currNote.category || 'All')
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
        <div ref={EditTaskContainer} style={{ backgroundColor: ThemeColors.bg }} className={`transition-colors duration-500 ease-out edit-task-container absolute flex w-full h-full left-0 top-0 flex-col gap-2.5 pt-2 pb-4  overflow-hidden `}>

            {/* nav icons */}
            <div style={{ color: ThemeColors.primaryText }} className={`edit-tasks-controls flex items-center justify-between ${Device !== 'Desktop' ? 'px-(--padding-lg)' : 'px-(--padding-xl)'}`}>

                {/* arrow icon and cateogry */}
                <div className={`transition-colors duration-500 ease-out flex gap-4 items-center`}>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onPointerUp={() => {
                        setCatOpen(false)
                        dispatch(manageEditTask({ open: false }))
                        dispatch(addNote({ TaskId, title: currTaskTitle, desc: currTaskDesc, category: currCategory }))
                        setCurrTaskTitle('')
                        setCurrTaskDesc('')
                    }}>
                        <ArrowLeftIcon size={27} strokeWidth={2} />
                    </button>

                    {/* category and changing it */}
                    <div
                        onPointerUp={() => {
                            if (!isSetCatOpen) setCatOpen(true);
                        }}
                        style={{ backgroundColor: ThemeColors.third }}
                        className={`duration-500 ease-out cursor-pointer select-none relative px-3.5 py-1  rounded-xl flex items-center gap-2  
                        `}>
                        <FolderClosed size={20} />
                        <div
                            style={{ color: ThemeColors.primaryText }}
                            className={`select-none flex gap-2 font-bold duration-500 ease-out`}>{currCategory}</div>

                        {/* all categories layer which comes only when we hovrer or click the menu btn  */}
                        <div className={`transition-colors duration-500 ease-out menu absolute z-50 select-none cursor-pointer top-0 left-0 right-0 flex flex-col rounded-xl overflow-hidden w-full `}>{
                            Categories.map(category => (
                                category !== 'All' && <div
                                    key={category}
                                    onPointerUp={(e) => {
                                        e.stopPropagation(); // 🔥 important
                                        setCatOpen(false)
                                        setcurrCategory(category)
                                    }}
                                    style={{
                                        color: currCategory === category ? COMMON_COLORS.White : ThemeColors.primaryText,
                                        backgroundColor: currCategory === category ?AccentColors.CODE : ThemeColors.header,
                                        
                                    }}
                                    className={`transition-colors duration-500 ease-out font-semibold  flex justify-between items-center  px-4 py-1.5  `}>
                                    {category} <Check size={20} className={`${category === currCategory ? '' : 'hidden'}`} />
                                </div>
                            ))
                        }</div>
                    </div>

                </div>

                {/* other its nav icons */}
                <div style={{ color: ThemeColors.primaryText }} className={`duration-500 ease-out flex items-center gap-3 `}>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onPointerUp={() => toast.info('Functionality will be added soon')}>
                        <Undo2 size={27} />
                    </button>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onPointerUp={() => toast.info('Functionality will be added soon')}>
                        <Redo2 size={27} />
                    </button>
                    <button className='active:scale-93 transition-all duration-100 ease-in' onPointerUp={() => {
                        setCatOpen(false)
                        dispatch(manageEditTask({ open: false }))
                        dispatch(addNote({ TaskId, title: currTaskTitle || '', desc: currTaskDesc || "", category: currCategory }))
                        setCurrTaskTitle('')
                        setCurrTaskDesc('')
                    }}>
                        <Check size={32} />
                    </button>
                </div>

            </div>


            {/* textarea inputs */}
            <div className={`edit-task-desc-parent flex flex-col gap-2 pl-3 min-h-0 grow rounded-lg overflow-y-auto  ${Device !== 'Desktop' ? 'px-(--padding-lg)' : 'px-(--padding-xl)'}`}>

                <textarea spellCheck={false}
                    value={currTaskTitle}
                    onChange={(e) => setCurrTaskTitle(e.target.value)}
                    name="newTask-title"
                    style={{
                        color: ThemeColors.primaryText,
                        '--placeholder':  ThemeColors.thirdText
                    }}
                    className={`duration-500 ease-out newTask-title rounded-lg shrink-0 p-1 font-bold text-xl placeholder:text-xl h-fit resize-none  outline-none  
                    `}
                    placeholder='Title'
                    rows={1}
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

                <div style={{color : ThemeColors.thirdText}} className="font-bold shrink-0 date-charCount flex gap-3 ">
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
                    style={{color : ThemeColors.secText,
                                            '--placeholder' :ThemeColors.thirdText
                                        }}
                    className={`duration-500 ease-out newTask-desc rounded-lg  shrink-0 grow h-fit p-1 resize-none text-[0.95rem] font-bold placeholder:text-[0.95rem] outline-none `}
                    placeholder='Start typing'
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

            </div>
        </div >
    )
}

export default EditTask