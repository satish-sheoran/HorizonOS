import React, { useRef, useState } from 'react'
import { CSS_EASING } from '../../../constants/Settings'
import { ACCENT_COLORS } from '../../../constants/style'
import { useDispatch, useSelector } from 'react-redux'
import { BadgeCheck, Blocks, Check, Search, Ticket, Tickets, Triangle, X } from 'lucide-react'
import { setopenTaskManager } from '../../../redux/features/NotesStrorage'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ManageTask = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch()

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const Device = useSelector((store) => store.Device.currDevice);
    const isopenTaskManager = useSelector(store => store.Notes.openTaskManager)

    //states
    const [Task, setTask] = useState('')

    //refs
    const TaskRef = useRef(null)

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

        // gsap.fromTo(
        //     TaskRef.current,
        //     {
        //         scale: 0.8,
        //         opacity: 0,
        //         y: 40,
        //     },
        //     {
        //         scale: 1,
        //         opacity: 1,
        //         y: 0,
        //         duration: Speed,
        //         ease: Animation ?? "back.out(1.7)"
        //     }
        // )

    }, [isopenTaskManager])

    return (
        <div className={`${isopenTaskManager ? 'block' : 'hidden'} absolute top-0 left-0 inset-0  `}>

            <div
                onClick={() => dispatch(setopenTaskManager({ shouldOpen: false }))}
                style={{ backgroundColor: Theme !== 'dark' ? 'bg-[rgba(0,0,0,0.35)]' : 'bg-[rgba(255,255,255,0.35)]' }}
                className='w-full h-full relative flex items-end jusitfy-center overflow-hidden  backdrop-blur-[1.5px] '>

                <div
                    ref={TaskRef}
                    onClick={(e) => e.stopPropagation()} style={{ backgroundColor: ThemeColors.header }} className={`absolute ${Device === 'Mobile' ? 'w-[calc(100%-30px)]' : 'w-[(100%-60px)]'} flex flex-col gap-2 items-center py-2 px-2 overflow-hidden max-h-3/4 rounded-2xl  bottom-3.5 left-1/2 -translate-x-1/2`}>

                    <header className={`py-2 flex w-full justify-between items-center rounded-2xl ${Device !== 'Desktop' ? 'px-[4%]' : 'px-[4.5%]'}`}>
                        <h3
                            onClick={() => dispatch(setopenTaskManager({ shouldOpen: false }))}
                            style={{
                                color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,
                                '--hover': ThemeColors.bg
                            }}
                            className={`HOVER_CLASS border rounded-full p-0.5 ${Device === 'Mobile' ? 'active:scale-105' : 'hover:scale-105'}`}>
                            <X />
                        </h3>
                        <h3
                            onClick={() => dispatch(setopenTaskManager({ shouldOpen: false }))}
                            style={{
                                color: ThemeColors.primaryText,
                                fontFamily: Weights.SemiBold,
                                fontSize: Sizes.Regular
                            }}
                            className={`HOVER_CLASS flex items-center gap-1.5 ${Device === 'Mobile' ? 'active:scale-105' : 'hover:scale-105'}`}>
                            <BadgeCheck strokeWidth={2} />
                            <span>Save</span>
                        </h3>
                    </header>

                    {/* hr */}

                    <hr
                        style={{
                            borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={` w-9/10 mx-auto`} />


                    {/* cateogry selection */}
                    <section className={`py-2 flex items-center justify-start rounded-2xl w-full ${Device !== 'Desktop' ? 'px-[4%]' : 'px-[4.5%]'}`}>
                        <p style={{
                            color: ThemeColors.primaryText,
                            fontFamily: Weights.SemiBold,
                            fontSize: `${(Sizes.Small.slice(0, -3)) * 1.2}rem`
                        }}

                            className={`flex items-center gap-1.5 w-1/2`}>
                            <Blocks size={22} />
                            <span>Category</span>
                        </p>
                        <p style={{
                            color: ThemeColors.primaryText,
                            fontFamily: Weights.SemiBold,
                            fontSize: `${(Sizes.Small.slice(0, -3)) * 1.2}rem`
                        }}

                            className={`flex items-center gap-2 w-1/2`}>
                            <span>Personal</span>
                            <Triangle style={{ color: ThemeColors.secText }} className='rotate-180 ' size={12} fill={ThemeColors.secText} />
                        </p>
                    </section>

                    {/* hr */}
                    <hr
                        style={{
                            borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`w-9/10 mx-auto`} />

                    {/* Task */}
                    <div className='max-h-1/2 overflow-y-auto overflow-x-hidden'>
                        <textarea spellCheck={false}
                            value={Task}
                            onChange={(e) => setTask(e.target.value)}
                            name="newTask-title"
                            style={{
                                backgroundColor: ThemeColors.header,
                                fontSize: Sizes.Regular, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                                '--placeholder': ThemeColors.thirdText,
                                transitionProperty: 'color, background-color, border-color, font-size',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}
                            className={`rounded-2xl shrink-0 px-3 py-2 font-semibold w-full h-fit  resize-none  outline-none 
                    `}
                            placeholder='Title'
                            rows={2}
                            onInput={(e) => handleSize(e.target)}
                        ></textarea>
                    </div>
                    {/* hr */}
                    <hr
                        style={{
                            borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={` w-9/10 mx-auto`} />

                    {/* details like time and updated */}
                    <div className={`py-2  pl-2 w-full flex flex-col gap-1 justify-start rounded-xl`}>
                        <p style={{
                            color: ThemeColors.primaryText,
                            fontFamily: Weights.SemiBold,
                            fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`
                        }}>Created : Today , 4:01 PM</p>
                        <p style={{
                            color: ThemeColors.primaryText,
                            fontFamily: Weights.SemiBold,
                            fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`
                        }}>Updated : Just Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageTask