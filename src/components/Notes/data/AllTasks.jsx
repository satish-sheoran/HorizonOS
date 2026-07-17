import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { CSS_EASING } from '../../../constants/Settings'
import { COMMON_COLORS } from '../../../constants/style';
import { addTaskTodeletedTasksArray, changeTaskCategory, setCurrentEditingTask, setopenTaskManager, setstartDeletingTasks } from '../../../redux/features/NotesStrorage'
import { Check, Plus, Ticket, Triangle } from 'lucide-react';
import { Flip } from 'gsap/Flip';
import useLongPress from '../../../hooks/Use-long-press';

const AllTasks = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch()

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const taskAnimRef = useRef(null);
    const isFirstRun = useRef(true);
    const { activeTab, Tasks } = useSelector(store => store.Notes) // notes tab Or task tab for notes app
    const startDeletingTasks = useSelector(store => store.Notes.startDeletingTasks);
    const deletedTasks = useSelector(store => store.Notes.deletedTasks)

    // state
    const [showCompletedTasks, setshowCompletedTasks] = useState(true) //used to expand the tasks to show to user

    //  refs
    const CompletedRef = useRef(null) //used to appy property to expand/close Tasks showcase

    const { Handlers, isLongPress } = useLongPress(() => {
        if (!startDeletingTasks) dispatch(setstartDeletingTasks({ start: true }));
    }) //custom hook to trigger if user did long press

    // animation for opening/closing of Tasks
    useLayoutEffect(() => {
        if (!CompletedRef.current) return;

        gsap.to(CompletedRef.current, {
            scaleY: showCompletedTasks ? 1 : 0,
            transformOrigin: 'top center',
            duration: 0.25,
            ease: Animation ?? 'back.out'
        })
    }, [showCompletedTasks])

    useGSAP(() => {
        if (!taskAnimRef.current) return;

        // used to fix the animation on first load, because on first load it will animate from 0% to 0% which is not good, so we set it to the correct position without animation and then for subsequent changes we use animation
        // Also  the reason why it do not happen for Folders.jsx is bcz there we use transform-x-full which is 100% and in this we use 120% so it is not visible on first load but in this it is visible on first load because it is 0% so we need to set it to 120% on first load without animation
        if (isFirstRun.current) {
            gsap.set(taskAnimRef.current, { y: activeTab === 'Tasks' ? '0%' : '120%' });
            isFirstRun.current = false;
        } else {
            gsap.to(taskAnimRef.current, {
                y: activeTab === 'Tasks' ? '0%' : '120%',
                duration: 0.5,
                ease: Animation ?? 'expo.out'
            });
        }

    }, [activeTab])


    return (
        <section ref={taskAnimRef}
            style={{
                fontSize: Sizes.Small,
                fontFamily: Weights.SemiBold,
                color: ThemeColors.grayish, 
            }}
            className={`absolute inset-0 select-none flex `}>

            <div className={`w-full h-full grow overflow-y-auto overflow-x-hidden`}>

                {/* Tasks */}
                <div className={`flex flex-col gap-2`}>
                    {/* Personal Task */}
                    <div
                        className={`flex w-fit px-1.5 py-1 gap-2 items-center rounded-xl`}>
                        <Triangle style={{
                            color: ThemeColors.secText, 
                        }} className={`rotate-180`} size={12} fill={ThemeColors.primaryText} />
                        <span style={{ color: ThemeColors.primaryText, fontFamily: Weights.Bold, fontSize: `${(Sizes.Small.slice(0, -3)) * 1.1}rem` }}>
                            Personal
                        </span>
                    </div>
                    <div className={`overflow-hidden flex flex-col gap-2`}>
                        {Tasks.map(({ id, Category, Task, Time, Date, TimeStamp }) => {
                            return (Task??'').trim() && Category === 'Personal' &&
                                <button
                                    {...(!startDeletingTasks ? Handlers : {})} //adding long press handler only if delete mode is off
                                    onClick={(e) => {
                                        if (isLongPress.current) {
                                            e.preventDefault(); // stop accidental click behavior

                                            if (!startDeletingTasks) dispatch(setstartDeletingTasks({ start: true }));

                                            dispatch(addTaskTodeletedTasksArray({ Taskid: id }));
                                            return; // 🚨 STOP here
                                        }
                                        dispatch(setCurrentEditingTask({ EditTask: { id, Category, Task, Time, Date, TimeStamp } }))
                                        dispatch(setopenTaskManager({ shouldOpen: true }))
                                    }}
                                    key={id} style={{
                                        backgroundColor: ThemeColors.header,
                                        borderColor: ThemeColors.third,
                                        '--hover': ThemeColors.third,
                                        '--active': Theme !== 'dark' ? COMMON_COLORS.White : COMMON_COLORS.Gray,
                                        
                                    }}
                                    className={`w-full border HOVER_CLASS p-3 rounded-2xl flex  ${startDeletingTasks?'justify-between gap-2':'justify-start gap-4'} items-center`}>
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            dispatch(changeTaskCategory({ Taskid: id, TaskCategory: 'Completed' }))
                                        }}
                                        style={{
                                            color: ThemeColors.secText,
                                            borderColor: ThemeColors.bg,
                                            
                                        }} className='w-5 h-5 rounded border-2 '></div>

                                    <p className={`text-left grow  max-w-8/10 line-clamp-5`}>{Task}</p>
                                    {/* absolute button used to delete note */}
                                    {startDeletingTasks === true && <span
                                        style={{
                                            backgroundColor: !startDeletingTasks ? ThemeColors.header : deletedTasks.includes(id) ? COMMON_COLORS.Yellow : ThemeColors.bg, 
                                        }}
                                        className={`rounded-full w-4.5 h-4.5 flex items-center justify-center
                                                                    `}>
                                        {deletedTasks.includes(id) && <Check className='rounded-full ' style={{ color: COMMON_COLORS.White }} strokeWidth={3} size={17} />}
                                    </span>

                                    }
                                </button>
                        })}
                    </div>


                    {/* Completed */}
                    <div
                        onClick={() => setshowCompletedTasks((old) => !old)}
                        className={`w-fit px-1.5 py-1 flex gap-2 items-center rounded-xl`}>
                        <Triangle style={{
                            color: ThemeColors.secText, 
                        }} className={`${showCompletedTasks ? 'rotate-180' : 'rotate-0'}  `} size={12} fill={ThemeColors.primaryText} />

                        <p style={{ color: ThemeColors.primaryText, fontFamily: Weights.Bold, fontSize: `${(Sizes.Small.slice(0, -3)) * 1.1}rem` ,}} className='flex gap-1'>
                            Completed
                            <span>
                                {Tasks.filter(({ Category }) => Category === 'Completed').length}
                            </span>
                        </p>
                    </div>

                    <div ref={CompletedRef} className={`overflow-hidden flex flex-col gap-1`}>
                        {Tasks.map(({ id, Category, Task, Time, Date, TimeStamp }) => {
                            return (Task??'').trim() && Category === 'Completed' &&
                                <button
                                    {...(!startDeletingTasks ? Handlers : {})} //adding long press handler only if delete mode is off
                                    onClick={(e) => {
                                        if (isLongPress.current) {
                                            e.preventDefault(); // stop accidental click behavior

                                            if (!startDeletingTasks) dispatch(setstartDeletingTasks({ start: true }));

                                            dispatch(addTaskTodeletedTasksArray({ Taskid: id }));
                                            return; // 🚨 STOP here
                                        }
                                        dispatch(setCurrentEditingTask({ EditTask: { id, Category, Task, Time, Date, TimeStamp } }))
                                        dispatch(setopenTaskManager({ shouldOpen: true }))
                                    }}
                                    key={id} style={{
                                        backgroundColor: ThemeColors.third,
                                        borderColor: ThemeColors.third,
                                        '--hover': ThemeColors.third,
                                        '--active': Theme !== 'dark' ? COMMON_COLORS.White : COMMON_COLORS.Gray,
                                        
                                    }}
                                    className='w-full border HOVER_CLASS p-3 rounded-2xl flex gap-2 justify-between items-center'>
                                    <div className={`w-fit`}>
                                        <div onClick={(e) => {
                                            e.stopPropagation()
                                            dispatch(changeTaskCategory({ Taskid: id, TaskCategory: 'Personal' }))
                                        }}
                                            style={{
                                                color: ThemeColors.secText,
                                                borderColor: ThemeColors.bg,
                                                
                                            }} className='w-5 h-5 rounded border-2 flex items-center justify-center'>
                                            <Check strokeWidth={2} />
                                        </div>
                                    </div>
                                    <p className={`line-through text-left grow max-w-8/10 line-clamp-5`}>{Task}</p>
                                    {/* absolute button used to delete note */}
                                    {startDeletingTasks === true && <span
                                        style={{
                                            backgroundColor: !startDeletingTasks ? ThemeColors.header : deletedTasks.includes(id) ? COMMON_COLORS.Yellow : ThemeColors.bg, 
                                        }}
                                        className={`rounded-full w-4.5 h-4.5 flex items-center justify-center
                                                                    `}>
                                        {deletedTasks.includes(id) && <Check className='rounded-full ' style={{ color: COMMON_COLORS.White }} strokeWidth={3} size={17} />}
                                    </span>
                                    }
                                </button>
                        })}
                    </div>

                </div>



                {/* Add/Edit Task BTN */}
                <button
                    onClick={() => dispatch(setopenTaskManager({ shouldOpen: true }))}
                    style={{
                        color: COMMON_COLORS.White,
                        backgroundColor: AccentColors.CODE,
                        '--hover': AccentColors.Hover_Clr,
                        '--active': AccentColors.Active_Clr,
                        transition: `all ${Speed} ${CSS_EASING[Animation]}`
                    }}

                    className={`${AccentColors.HOVER} fixed z-100 rounded-full p-3.5 md:p-2 right-6 bottom-7  active:scale-96 `}>
                    <Plus strokeWidth={2.5} />
                </button>
            </div>

        </section >
    )
}

export default AllTasks

