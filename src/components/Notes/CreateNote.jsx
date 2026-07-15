import { ArrowLeftIcon, Check, Redo2, Undo2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CSS_EASING } from '../../constants/Settings'
import { addNote, setCreateNoteOpen } from '../../redux/features/NotesStrorage';
import { formatDate, formatTime } from '../../utils/formatTime';
import { CustomEase } from 'gsap/all';
import { COMMON_COLORS } from '../../constants/style';

const CreateNote = ({ Theme, ThemeColors, AccentColors }) => {


    const dispatch = useDispatch();
    const newTaskContainer = useRef(null)

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Device = useSelector((store) => store.Device.currDevice);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const isNewNoteOpen = useSelector((store) => store.Notes.CreateNoteOpen)
    const [newNoteTitle, setnewNoteTitle] = useState('');
    const [newNoteDesc, setnewNoteDesc] = useState('');
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
            x: isNewNoteOpen ? '0%' : "100%",
            y: isNewNoteOpen ? '0%' : "100%",
            scale: isNewNoteOpen ? 1 : 0.8,
            opacity: isNewNoteOpen ? 1 : 0,
            duration: 0.3,
            ease: Animation ?? 'sine.inOut'
        })

    }, [isNewNoteOpen])

    return (
        <div ref={newTaskContainer}
            style={{
                backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`new-task-container absolute flex w-full h-full left-0 top-0 flex-col gap-2.5 pt-2 pb-4  overflow-hidden `}>

            {/* nav icons */}
            <div style={{
                color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`create-tasks-controls flex items-center justify-between ${Device !== 'Desktop' ? 'px-(--padding-lg)' : 'px-(--padding-xl)'}`}>

                {/* arrow icon */}
                <div>
                    <button style={{
                        transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className='active:scale-93' onClick={() => {
                        dispatch(setCreateNoteOpen({ open: false }))
                        if (!newNoteTitle && !newNoteDesc) return; // if both title and desc is empty then do not add note and just close create task page
                        dispatch(addNote({ title: newNoteTitle || '', desc: newNoteDesc || '' }))
                        setnewNoteTitle('')
                        setnewNoteDesc('')
                    }}>
                        <ArrowLeftIcon size={27} strokeWidth={2} />
                    </button>
                </div>

                {/* other its nav icons */}
                <div className={`flex items-center gap-3 `}>
                    <button style={{
                        transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className='active:scale-93 ' onClick={() => toast.info('Functionality will be added soon')}>
                        <Undo2 size={27} />
                    </button>
                    <button style={{
                        transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className='active:scale-93 ' onClick={() => toast.info('Functionality will be added soon')}>
                        <Redo2 size={27} />
                    </button>
                    <button style={{
                        transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className='active:scale-93 ' onClick={() => {
                        dispatch(setCreateNoteOpen({ open: false }))
                        if (!newNoteTitle && !newNoteDesc) return; // if both title and desc is empty then do not add note and just close create task page

                        dispatch(addNote({ title: newNoteTitle || '', desc: newNoteDesc || '' }))
                        setnewNoteTitle('')
                        setnewNoteDesc('')
                    }}>
                        <Check size={32} />
                    </button>
                </div>

            </div>


            {/* textarea inputs */}
            <div style={{
                transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`task-desc-parent flex flex-col gap-2 pl-3 min-h-0 grow rounded-lg overflow-y-auto ${Device !== 'Desktop' ? 'px-(--padding-lg)' : 'px-(--padding-xl)'}`}>

                <textarea spellCheck={false}
                    value={newNoteTitle}
                    onChange={(e) => setnewNoteTitle(e.target.value)}
                    name="newTask-title"
                    style={{
                        fontSize: Sizes.Regular,
                        fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                        '--placeholder': ThemeColors.thirdText,
                        transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}
                    className={`Placeholder newTask-title rounded-lg shrink-0 p-1 font-semibold  h-fit resize-none  outline-none  
                    `}
                    placeholder='Title'
                    rows={1}
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

                <div style={{
                    fontSize: Sizes.Small, fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={` shrink-0 date-charCount flex gap-3 `}>
                    <span>{formattedDate} {formattedTime}</span>
                    |
                    <span>{newNoteDesc.replace(/\s/g, "").length} characters</span>
                    {/* /\s/g is space and next line which is replaces with '' means removed and then show length */}
                </div>
                <textarea
                    spellCheck={false}
                    value={newNoteDesc}
                    onChange={(e) => setnewNoteDesc(e.target.value)}
                    name="newTask-desc"
                    style={{
                        fontSize: Sizes.Regular,
                        fontFamily: Weights.Regular,
                        color: ThemeColors.secText,
                        '--placeholder': ThemeColors.thirdText,
                        transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}
                    className={`Placeholder newTask-desc rounded-lg  shrink-0 grow h-fit p-1 resize-none  outline-none`}
                    placeholder='Start typing'
                    onInput={(e) => handleSize(e.target)}
                ></textarea>

            </div>
        </div>
    )
}

export default CreateNote