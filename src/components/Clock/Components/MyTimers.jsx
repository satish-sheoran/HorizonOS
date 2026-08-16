import { ChevronRight, Minus, Pause, Play, Plus, Trash2 } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../constants/style'
import gsap from 'gsap'

const MyTimers = ({ RemainingTimeArray, setRemainingTimeArray, TimersRemainingTimeRef, ThemeColors, Theme, AccentColors, AllTimers, setAllTimers, openAddTimer, setopenAddTimer }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)

    // states
    const [startDeletingTimers, setstartDeletingTimers] = useState(false)

    //refs
    const TimersRef = useRef({})
    const deleteSymbols = useRef({})
    const deleteBoxes = useRef({})

    //whenever add new timer opens ,just close all the edit mode options and reset the delete symbols and boxes
    useEffect(() => {
        setstartDeletingTimers(false)
        if (!TimersRef.current || !deleteSymbols.current || !deleteBoxes.current) return;
        const timeLine = gsap.timeline()
        timeLine.to(Object.values(deleteSymbols.current), {
            scale: 0,
            opacity: 0,
            duration: 0.1,
            ease: 'sine.inOut'
        }).to(Object.values(TimersRef.current), {
            paddingLeft: '2.5%',
            duration: 0.2,
            ease: Animation ?? 'sine.inOut'
        }).to(Object.values(deleteBoxes.current), {
            scale: 0,
            opacity: 0,
            duration: 0.1,
            ease: 'sine.inOut'
        }).to(Object.values(TimersRef.current), {
            paddingRight: '2.5%',
            duration: 0.2,
            ease: Animation ?? 'sine.inOut'
        })
    }, [openAddTimer])

    return (
        <div className={`w-full h-full flex flex-col gap-3 shrink-0`}>
            <div className={`${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} w-full flex items-center justify-between`}>
                <p
                    onClick={() => {
                        if (!startDeletingTimers) {
                            if (!TimersRef.current || !deleteSymbols.current) return;
                            const timeLine = gsap.timeline()
                            timeLine.to(Object.values(TimersRef.current), {
                                paddingLeft: '12%',
                                duration: 0.2,
                                ease: Animation ?? 'sine.inOut'
                            }).to(Object.values(deleteSymbols.current), {
                                scale: 1,
                                opacity: 1,
                                duration: 0.1,
                                ease: 'sine.inOut'
                            })
                        } else {
                            if (!TimersRef.current || !deleteSymbols.current) return;

                            const timeLine = gsap.timeline()
                            timeLine.to(Object.values(deleteSymbols.current), {
                                scale: 0,
                                opacity: 0,
                                duration: 0.1,
                                ease: 'sine.inOut'
                            }).to(Object.values(TimersRef.current), {
                                paddingLeft: '2.5%',
                                duration: 0.2,
                                ease: Animation ?? 'sine.inOut'
                            })


                            const tl2 = gsap.timeline()
                            tl2.to(Object.values(deleteBoxes.current), {
                                scale: 0,
                                opacity: 0,
                                duration: 0.1,
                                ease: 'sine.inOut'
                            }).to(Object.values(TimersRef.current), {
                                paddingRight: '2.5%',
                                duration: 0.2,
                                ease: Animation ?? 'sine.inOut'
                            })

                        }
                        setstartDeletingTimers(old => !old)
                    }}
                    style={{
                        color: ThemeColors.primaryText,
                        backgroundColor: ThemeColors.header,
                        borderColor: ThemeColors.third,
                        fontSize: `${(Sizes.Small.slice(0, -3)) * 1.2}rem`,
                        fontFamily: Weights.SemiBold
                    }} className={`${AllTimers.length > 0 ? '' : 'opacity-0'} border flex items-center justify-center rounded-2xl px-3 py-1`}>
                    {startDeletingTimers ? 'Cancel' : 'Edit'}
                </p>
                <p
                    onClick={() => setopenAddTimer(true)}
                    style={{
                        color: ThemeColors.primaryText,
                        backgroundColor: ThemeColors.header,
                        borderColor: ThemeColors.third
                    }}
                    className={`border active:scale-95 rounded-full flex items-center justify-center w-10 h-10`}><Plus size={22} strokeWidth={2.5} /></p>
            </div>

            {/* timers */}
            <section id='AllTimersOverflow-parent' className={`flex flex-col w-full grow overflow-y-auto`}>
                {AllTimers.length > 0 ?

                    AllTimers.map(({ id, type, paused, time }, idx) => {
                        let ms = RemainingTimeArray?.find(({ id: ID }) => id == ID)?.remainingTime;
                        const totalSec = Math.floor(ms / 1000)
                        let sec = totalSec % 60;

                        let min = Math.floor(totalSec / 60) % 60;
                        let hr = Math.floor(totalSec / 3600) % 60;


                        return <div
                            key={id}
                            style={{
                                borderColor: ThemeColors.third,
                                '--hover': ThemeColors.third,
                                '--active': ThemeColors.third
                            }}
                            className={`${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} HOVER_CLASS shrink-0 relative w-full flex overflow-hidden border-t ${idx === AllTimers.length - 1 ? 'border-b' : ''}`}
                        >
                            <div
                                ref={(el) => {
                                    if (el) {
                                        TimersRef.current[id] = el
                                    } else {
                                        delete TimersRef.current[id];
                                    }
                                }}

                                onClick={() => {
                                    const timer = TimersRemainingTimeRef?.current?.find(
                                        timer => timer.id === id
                                    );

                                    if (!timer) return;

                                    // TIMER HAS FINISHED
                                    if (timer.remainingTime <= 0) {
                                        timer.paused = true;

                                        setAllTimers(old =>
                                            old.map(timer =>
                                                timer.id === id
                                                    ? { ...timer, paused: true }
                                                    : timer
                                            )
                                        );

                                        return;
                                    }
                                    // PAUSE TIMER
                                    if (!timer.paused) {
                                        timer.paused = true;
                                    }
                                    // RESUME TIMER
                                    else {
                                        timer.duration = timer.remainingTime;
                                        timer.startTime = performance.now();
                                        timer.paused = false;
                                    }

                                    setAllTimers(old =>
                                        old.map(currtimer =>
                                            currtimer.id === id
                                                ? {
                                                    ...currtimer,
                                                    paused: timer.paused
                                                }
                                                : currtimer
                                        )
                                    );

                                }}

                                className={`relative shrink-0 p-[2.5%] w-full flex justify-between items-center gap-0.5`}>
                                <div className={`flex items-center gap-3`}>
                                    <p
                                        onClick={() => {
                                            const el = TimersRef.current[id]
                                            const deleteBox = deleteBoxes.current[id]
                                            if (!el || !deleteBox) return;

                                            const timeLine = gsap.timeline()
                                            timeLine.to(el, {
                                                paddingRight: '12%',
                                                duration: 0.2,
                                                ease: Animation ?? 'sine.inOut'
                                            }).to(deleteBox, {
                                                scale: 1,
                                                opacity: 1,
                                                duration: 0.1,
                                                ease: 'sine.inOut'
                                            })

                                            const tl2 = gsap.timeline()
                                            tl2.to(deleteSymbols.current[id], {
                                                scale: 0,
                                                opacity: 0,
                                                duration: 0.1,
                                                ease: 'sine.inOut'
                                            }).to(TimersRef.current[id], {
                                                paddingLeft: '2.5%',
                                                duration: 0.2,
                                                ease: Animation ?? 'sine.inOut'
                                            })

                                        }}
                                        ref={(el) => {
                                            if (el) {
                                                deleteSymbols.current[id] = el
                                            } else {
                                                delete deleteSymbols.current[id];
                                            }
                                        }}
                                        style={{
                                            color: COMMON_COLORS.White,
                                            backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr
                                        }} className={`absolute left-2 opacity-0 p-0.5 rounded-full active:scale-95`}>
                                        <Minus size={17} strokeWidth={2.5} />
                                    </p>

                                    <div className={`w-full flex flex-col`}>
                                        <span style={{
                                            color: ThemeColors.primaryText,
                                            fontSize: startDeletingTimers ? `${(Sizes.ExtraLarge.slice(0, -3)) * 0.75}rem` : `${(Sizes.ExtraLarge.slice(0, -3)) * 0.9}rem`,
                                            fontFamily: Weights.SemiBold
                                        }}>
                                            {hr > 0 && `${String(hr).padStart(2, 0)} hr`} {min > 0 && `${String(min).padStart(2, 0)} min`} {`${String(sec).padStart(2, 0)} sec`}
                                        </span>
                                        <span style={{
                                            color: ThemeColors.primaryText,
                                            fontSize: startDeletingTimers ?`${(Sizes.Small.slice(0, -3)) * 0.9}rem`: Sizes.Small,
                                            fontFamily: Weights.Regular
                                        }}>
                                            {type === 'hr' ? `${String(time).padStart(2, '0')} hr` : ''} {type === 'min' ? `${String(time).padStart(2, '0')} min` : ''} {type === 'sec' ? `${String(time).padStart(2, '0')} sec` : ''}
                                        </span>

                                    </div>
                                </div>
                                {!startDeletingTimers ? <button
                                    style={{
                                        color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE,
                                        outlineColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE
                                    }}
                                    className={`outline-2 rounded-full flex items-center justify-center w-12 h-12`}>
                                    {
                                        !paused ?
                                            <Pause size={22} strokeWidth={2.5} /> :
                                            <Play size={22} strokeWidth={2.5} />
                                    }
                                </button>
                                    :
                                    <span onClick={() => {
                                        if (!TimersRef.current[id] || !deleteSymbols.current[id]) return;
                                        const timeLine = gsap.timeline()
                                        // animation of delete symbol and timer padding left
                                        timeLine.to(TimersRef.current[id], {
                                            paddingLeft: '12%',
                                            duration: 0.2,
                                            ease: Animation ?? 'sine.inOut'
                                        }).to(deleteSymbols.current[id], {
                                            scale: 1,
                                            opacity: 1,
                                            duration: 0.1,
                                            ease: 'sine.inOut'
                                        })

                                        // animation of delete box and timer padding right
                                        const el = TimersRef.current[id]
                                        const deleteBox = deleteBoxes.current[id]
                                        if (!el || !deleteBox) return;

                                        const tl2 = gsap.timeline()
                                        tl2.to(deleteBox, {
                                            scale: 0,
                                            opacity: 0,
                                            duration: 0.1,
                                            ease: 'sine.inOut'
                                        }).to(el, {
                                            paddingRight: '2.5%',
                                            duration: 0.2,
                                            ease: Animation ?? 'sine.inOut'
                                        })

                                    }} style={{ color: ThemeColors.primaryText }} className={`p-1 flex items-center justify-center rounded-full active:scale-95`}><ChevronRight strokeWidth={2} />
                                    </span>
                                }
                            </div>

                            <p
                                ref={(el) => {
                                    if (el) {
                                        deleteBoxes.current[id] = el
                                    } else {
                                        delete deleteBoxes.current[id];
                                    }
                                }}
                                onClick={() => {
                                    delete deleteBoxes.current[id];
                                    delete TimersRef.current[id];
                                    delete deleteSymbols.current[id];
                                    TimersRemainingTimeRef.current = TimersRemainingTimeRef.current.filter(({ id: ID }) => id !== ID)

                                    TimersRef?.current[id]?.closest('div')?.remove()

                                    setRemainingTimeArray((old) => {
                                        return old.filter(({ id: ID }) => ID !== id)
                                    })

                                    let old = [...AllTimers]
                                    old.splice(idx, 1)
                                    setAllTimers(old)
                                    if (EnableDebugLogs) console.log(`Timer Deleted`)


                                }}
                                style={{
                                    color: COMMON_COLORS.White,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr
                                }}
                                className={`absolute right-1.5 opacity-1 w-fit h-fit p-2.5 flex items-center justify-center rounded-full active:scale-95`}>
                                <Trash2 size={25} strokeWidth={2.5} />
                            </p>

                        </div>
                    })
                    :
                    <div className={`w-full h-full shrink-0 flex flex-col items-center justify-center gap-1`}>
                        <p style={{
                            fontFamily: Weights.SemiBold,
                            color: ThemeColors.grayish,
                            fontSize: `${(Sizes.Small.slice(0, -3)) * 1.2}rem`
                        }}>No timers yet</p>
                        <p style={{
                            fontFamily: Weights.Regular,
                            color: ThemeColors.grayish,
                            fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.15}rem`
                        }}>
                            Tap <span style={{
                                fontFamily: Weights.SemiBold,
                            }}>+ </span>
                            to create a new timer.
                        </p>
                    </div>
                }
            </section>
        </div>
    )
}

export default MyTimers