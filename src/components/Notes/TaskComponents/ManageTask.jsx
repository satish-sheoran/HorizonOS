import React, { useEffect, useRef, useState } from 'react'
import { CSS_EASING } from '../../../constants/Settings'
import { ACCENT_COLORS } from '../../../constants/style'
import { useDispatch, useSelector } from 'react-redux'
import { BadgeCheck, Blocks, Check, Fullscreen, Search, Ticket, Tickets, Triangle, X } from 'lucide-react'
import { setopenTaskManager, addTask, removeTask } from '../../../redux/features/NotesStrorage'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const ManageTask = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch()

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { fullScreen } = useSelector((store) => store.windowApps?.apps['notes'])
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const Device = useSelector((store) => store.Device.currDevice);
    const isopenTaskManager = useSelector(store => store.Notes.openTaskManager)
    const CurrentEditingTask = useSelector(store => store.Notes.CurrentEditingTask)
    //fn
    const GetTimeNDate = () => {
        let date = new Date();
        // date
        let dateCreate = date.toDateString()
        //Time 
        let TimeArray = date.toLocaleTimeString().split(':');
        let hr = TimeArray[0] > 12 ? TimeArray[0] - 12 === 0 ? 12 : TimeArray[0] - 12 : TimeArray[0]
        let min = TimeArray[1];
        let AMPM = TimeArray[0] > 12 ? 'PM' : 'AM'
        return { TimeStamp: Date.now(), Time: `${hr} : ${min} ${AMPM}`, Date: dateCreate, }
    }

    const UsedispatchTask = () => {
        Object.keys(CurrentEditingTask).length !== 0 ?
            dispatch(addTask({
                id: CurrentEditingTask.id,
                NewTask: Task,
                Time: CreationDateNTime.Time,
                Date: CreationDateNTime.Date,
                TimeStamp: CreationDateNTime.TimeStamp,
                Category: 'Personal'
            }))
            :
            dispatch(addTask({
                Task,
                Time: CreationDateNTime.Time,
                Date: CreationDateNTime.Date,
                TimeStamp: CreationDateNTime.TimeStamp,
                Category: 'Personal'
            }))
    }

    //states
    const [Task, setTask] = useState('')
    const [CreationDateNTime, setCreationDateNTime] = useState(() => GetTimeNDate())

    //refs
    const TaskRef = useRef(null)

    useEffect(() => {
        if (Object.keys(CurrentEditingTask).length !== 0) {
            setCreationDateNTime(() => {
                return { Time: CurrentEditingTask.Time, Date: CurrentEditingTask.Date, TimeStamp: CurrentEditingTask.TimeStamp }
            });
            setTask(CurrentEditingTask?.Task)
            return;
        }
        setCreationDateNTime(() => GetTimeNDate())
        setTask('')
        return;

    }, [isopenTaskManager])


    // auto increasing height of title and desc textarea based on content height
    const handleSize = (el) => {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
    }


    useGSAP(() => {
        if (!TaskRef.current) return;

        gsap.fromTo(TaskRef.current, {
            scale: TaskRef ? 0 : 1,
        }, {
            scale: TaskRef ? 1 : 0,
            duration: 0.35,
            force3D: true, //to make animation a bit smooth as it deals with scales (forcw3D)
            ease: Animation ?? 'back.out(1.7)'
        })


    }, [isopenTaskManager])

    return (
        <div className={`${isopenTaskManager ? 'block' : 'hidden'}  absolute top-0 left-0 inset-0  `}>

            <div
                onClick={() => {
                    if (Object.keys(CurrentEditingTask).length !== 0 && !(Task??'').trim()) dispatch(removeTask({ Taskid: CurrentEditingTask.id }))
                    UsedispatchTask()
                    dispatch(setopenTaskManager({ shouldOpen: false }))
                    setTask('')
                }}
                style={{ backgroundColor: Theme !== 'dark' ? 'bg-[rgba(0,0,0,0.35)]' : 'bg-[rgba(255,255,255,0.35)]', }}
                className='w-full h-full relative flex items-end jusitfy-center overflow-hidden  backdrop-blur-[1.5px] '>

                <div
                    ref={TaskRef}
                    onClick={(e) => e.stopPropagation()} style={{
                        backgroundColor: ThemeColors.header,
                    }} className={`absolute  flex flex-col gap-2 items-center w-[calc(100%-60px)]
        max-w-180 py-2 px-2 overflow-hidden max-h-3/4 rounded-2xl  bottom-3.5 left-1/2 -translate-x-1/2`}>

                    <header className={`py-2 flex w-full justify-between items-center rounded-2xl ${Device !== 'Desktop' ? 'px-[4%]' : 'px-[4.5%]'}`}>
                        <button
                            disabled={Object.keys(CurrentEditingTask).length !== 0 && !(Task??'').trim()}
                            onClick={() => {
                                dispatch(setopenTaskManager({ shouldOpen: false }))
                                if (!(Task??"").trim()) return;

                                UsedispatchTask()
                                setTask('')
                            }}
                            style={{
                                color: (Object.keys(CurrentEditingTask).length !== 0 && !(Task??'').trim()) ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr : ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,
                                '--hover': ThemeColors.bg,

                            }}
                            className={`HOVER_CLASS border rounded-full p-0.5 ${Device === 'Mobile' ? 'active:scale-105' : 'hover:scale-105'}`}>
                            <X />
                        </button>
                        <button
                            disabled={Object.keys(CurrentEditingTask).length !== 0 && !(Task??'').trim()}
                            onClick={() => {
                                dispatch(setopenTaskManager({ shouldOpen: false }))
                                if (!(Task??'').trim()) return
                                UsedispatchTask()
                                setTask('')
                            }}
                            style={{
                                color: (Object.keys(CurrentEditingTask).length !== 0 && !(Task??'').trim()) ? ThemeColors.secText : ThemeColors.primaryText,
                                fontFamily: Weights.SemiBold,
                                fontSize: Sizes.Regular,

                            }}
                            className={`select-none HOVER_CLASS flex items-center gap-1.5 ${Device === 'Mobile' ? 'active:scale-105' : 'hover:scale-105'}`}>
                            <BadgeCheck strokeWidth={2} />
                            <span>Save</span>
                        </button>
                    </header>

                    {/* hr */}
                    <hr
                        style={{
                            borderColor: ThemeColors.third,
                        }}
                        className={`w-9/10 mx-auto`} />

                    {/* Task */}
                    <div className='w-full max-h-1/2 overflow-y-auto overflow-x-hidden'>
                        <textarea spellCheck={false}
                            value={Task}
                            onChange={(e) => setTask(e.target.value)}
                            name="newTask-title"
                            style={{
                                borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE,
                                backgroundColor: ThemeColors.header,
                                fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.76}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                                '--placeholder': ThemeColors.thirdText,

                            }}
                            className={`rounded-2xl shrink-0 focus:border p-2 font-semibold w-full h-fit  resize-none  outline-none 
                    `}
                            placeholder='Start writing your task...'
                            rows={2}
                            onInput={(e) => handleSize(e.target)}
                        ></textarea>
                    </div>

                    {/* hr */}

                    <hr
                        style={{
                            borderColor: ThemeColors.third,
                        }}
                        className={` w-9/10 mx-auto`} />

                    {/* details like time and updated */}
                    <div className={`py-2  pl-2 w-full flex flex-col gap-1 justify-start rounded-xl`}>
                        <p style={{
                            color: ThemeColors.primaryText,
                            fontFamily: Weights.SemiBold,
                            fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`,

                        }} className='flex gap-0.5'>
                            <span>
                                Created :
                            </span>
                            <span>{`${CreationDateNTime.Date}, ${CreationDateNTime.Time}`}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageTask
