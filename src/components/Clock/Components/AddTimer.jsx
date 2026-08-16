import { useSelector } from 'react-redux';
import { ACCENT_COLORS } from '../../../constants/style';
import { X } from 'lucide-react';

const AddTimer = ({
    setRemainingTimeArray, updateAllTimers, UpdateRemainingTimeInterval,
    updateAllTimerInterval, updateRemainingTime, TimersRemainingTimeRef,
    openAddTimer, ThemeColors, Theme,
    AccentColors, AllTimers, setAllTimers,
    setopenAddTimer, addTimerRef, hasTimers
}) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)
    const Device = useSelector((store) => store.Device.currDevice);

    return (
        <section ref={addTimerRef}
            style={{
                bottom: 0,
                left: 0,
            }}
            className={`${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} inset-0 absolute z-5  shrink-0  `}>
            <div style={{ backgroundColor: ThemeColors.header }} className={`p-[2.5%] rounded-t-2xl flex flex-col gap-4 w-full h-full overflow-hidden`}>
                <div className={`flex items-center justify-between`}>
                    <p
                        onClick={() => setopenAddTimer(false)}
                        style={{
                            color: ThemeColors.primaryText,
                            backgroundColor: ThemeColors.header,
                            borderColor: ThemeColors.third,
                            '--hover': ThemeColors.bg,
                            '--active': ThemeColors.bg,
                        }} className={`cursor-pointer HOVER_CLASS border active:scale-95 rounded-full p-1 flex items-center justify-between`}>
                        <X size={Device !== 'Desktop' ? 18 : 20} strokeWidth={2.5} />
                    </p>
                </div>
                {/* timer set area */}
                {/* <div style={{
                    color: ThemeColors.primaryText
                }} className={`flex justify-between gap-4 max-h-[20vh] overflow-hidden`}>
                    <div className={`grow flex flex-col gap-2 h-full border border-red-400 overflow-y-auto`}>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 8, 19, 20, 21, 22, 23].map((num, idx) => {
                                return <span key={idx}>{num}</span>
                            })
                        }
                    </div>
                    <div className={`grow flex flex-col gap-2 h-full border border-red-400 overflow-y-auto`}>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 8, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59].map((num, idx) => {
                                return <span key={idx}>{num}</span>
                            })

                        }
                    </div>
                    <div className={`grow flex flex-col gap-2 h-full border border-red-400 overflow-y-auto`}>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 8, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59].map((num, idx) => {
                                return <span key={idx}>{num}</span>
                            })
                        }
                    </div>
                </div> */}
                <div style={{ color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Yellow').CODE }}>Custom Timer Adding Soon...</div>

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
                                        let id = Date.now();

                                        old.push({
                                            id,
                                            type,
                                            paused: false,
                                            time
                                        })
                                        const duration = type === 'hr' ?
                                            time * 60 * 60 * 1000 :
                                            type === 'min' ?
                                                time * 60 * 1000 :
                                                time * 1000
                                        TimersRemainingTimeRef.current.push(
                                            ...TimersRemainingTimeRef.current,
                                            {
                                                id,
                                                startTime: performance.now(),
                                                paused: false,
                                                duration,
                                                remainingTime: duration

                                            })
                                        setRemainingTimeArray(TimersRemainingTimeRef.current)


                                        //closing old intervals
                                        clearInterval(UpdateRemainingTimeInterval.current)
                                        clearInterval(updateAllTimerInterval.current)


                                        //starting intervals
                                        UpdateRemainingTimeInterval.current = setInterval(updateRemainingTime, 25)
                                        updateAllTimerInterval.current = setInterval(updateAllTimers, 1000)


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