import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { ACCENT_COLORS } from '../../../constants/style';
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';

const AddTimer = ({ openAddTimer, ThemeColors, Theme, AccentColors, AllTimers, setAllTimers, setopenAddTimer, addTimerRef, hasTimers }) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)
    //refs
    const dragRef = useRef(null)


    useEffect(() => {
        const parent = document.querySelector('#TimerParent')

        const panel = addTimerRef.current;
        const panelHeight = panel.offsetHeight;

        // Start hidden
        gsap.set(panel, {
            y: panel.offsetHeight
        });

        dragRef.current = Draggable.create(panel, {
            type: "y",
            bounds: {
                minY: 0,
                maxY: panelHeight
            },
            onDragEnd() {
                if (this.y >= panelHeight * 0.5) {
                    // Close
                    setopenAddTimer(false);

                    gsap.to(panel, {
                        y: panelHeight, // hide
                        duration: 0.25,
                        ease: "back.out"
                    });
                } else {
                    // Open back
                    gsap.to(panel, {
                        y: 0,
                        duration: 0.25,
                        ease: "back.out"
                    });
                }
            }

        })[0];

        return () => dragRef.current?.kill();
    }, [])


    useEffect(() => {
        if (!dragRef.current) return;

        if (openAddTimer) {
            dragRef.current.enable()
        } else {
            dragRef.current.disable();
            gsap.set(addTimerRef.current, { y: openAddTimer ? 0 : '100%' })

        }
    }, [openAddTimer])

    return (
        <section ref={addTimerRef}
            style={{
                bottom: 0,
                left: 0,
            }}
            className={`${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} inset-0 absolute z-5  shrink-0  `}>
            <div style={{ backgroundColor: ThemeColors.header }} className={`p-[2.5%] rounded-2xl flex flex-col gap-4 w-full h-full overflow-hidden`}>
                {/* timer set area */}
                <div>Custom Timer</div>

                <div className={`flex flex-col gap-2`}>
                    <span style={{
                        fontSize: `${(Sizes.Small.slice(0, -3)) * 1.3}rem`,
                        fontFamily: Weights.SemiBold,
                        color: ThemeColors.primaryText,
                    }}>Presets</span>
                    {/* presets times */}
                    <div className='PresetTimers-overflow flex w-full gap-3 overflow-y-auto '>
                        {
                            [
                                { time: 30, type: 'sec' },
                                { time: 1, type: 'min' },
                                { time: 2, type: 'min' },
                                { time: 3, type: 'min' },
                                { time: 5, type: 'min' },
                                { time: 10, type: 'min' },
                                { time: 20, type: 'min' },
                                { time: 30, type: 'min' },
                                { time: 1, type: 'hr' },
                                { time: 2, type: 'hr' },
                            ].map(({ time, type }, idx) => {
                                return <button
                                    key={idx}
                                    onClick={() => {
                                        let old = AllTimers ?? [];
                                        //unique id
                                        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&";
                                        let id;
                                        id = Array.from({ length: 7 }, () =>
                                            chars[Math.floor(Math.random() * chars.length)]
                                        ).join("");

                                        let idExists = old?.some(({ id: TimerId }) => TimerId === id); //checking if id exists 
                                        // ensure unique id 
                                        while (idExists) {
                                            id = Array.from({ length: 7 }, () =>
                                                chars[Math.floor(Math.random() * chars.length)]
                                            ).join("");
                                            idExists = old?.some(({ id: TimerId }) => TimerId === id); //now check if it exists or not again 
                                        }
                                        old.push({
                                            Timer: {
                                                hr: type === 'hr' ? time : 0,
                                                min: type === 'min' ? time : 0,
                                                sec: type === 'sec' ? time : 0,
                                            },
                                            RemainingTime: {
                                                hr: type === 'hr' ? time : 0,
                                                min: type === 'min' ? time : 0,
                                                sec: type === 'sec' ? time : 0,
                                            },
                                            start: true,
                                            id
                                        })
                                        if (EnableDebugLogs) console.log(`Timer of ${time} ${type} added`)
                                        setopenAddTimer(false)
                                        setAllTimers(old)
                                    }}
                                    style={{
                                        backgroundColor: ThemeColors.bg
                                    }}
                                    className={`w-15 h-15 overflow-hidden shrink-0 flex flex-col gap-0 items-center justify-center  rounded-full`}
                                >
                                    <span style={{
                                        color: ThemeColors.primaryText,
                                        fontFamily: Weights.Bold,
                                        fontSize: `${(Sizes.Small.slice(0, -3)) * 1.4}rem`
                                    }}>{time}</span>
                                    <span style={{
                                        color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                                        fontFamily: Weights.SemiBold,
                                        fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1}rem`
                                    }}>{type.toUpperCase()}</span>
                                </button>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddTimer