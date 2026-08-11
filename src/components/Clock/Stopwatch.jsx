import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
import Laps from './Components/Laps'
import StopWatchTimer from './Components/StopWatchTimer'
import StopWatchControls from './Components/StopWatchControls'
import * as Icons from 'lucide-react'
import { ACCENT_COLORS } from '../../constants/style'

const Stopwatch = ({ icon, Name, Description }) => {

    let Icon = Icons[icon]
    const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const DeviceTheme = useSelector(store => store.wallpaper.theme.Settings)
    const Device = useSelector((store) => store.Device.currDevice);
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Theme = useSelector((store) => store.wallpaper.theme.Clock);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    // states
    const [laps, setLaps] = useState([]) //holds an array of laps
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, ms: 0 })
    const [start, setstart] = useState(false) //track of start/stop

    const timeIntrvlRef = useRef(null);
    const startTimeRef = useRef(0);
    const elapsedRef = useRef(0);

    // helper fns
    const handleTimeInc = () => {

        const elapsed =
            elapsedRef.current +
            (performance.now() - startTimeRef.current);

        const hr = Math.floor(elapsed / 3600000);

        const min = Math.floor(
            (elapsed % 3600000) / 60000
        );

        const sec = Math.floor(
            (elapsed % 60000) / 1000
        );

        const ms = Math.floor(
            (elapsed % 1000) / 10
        );

        setTime({
            hr,
            min,
            sec,
            ms
        });
        let oldLaps = laps;
        oldLaps.shift();
        oldLaps.unshift({
            hr,
            min,
            sec,
            ms
        })
        setLaps(oldLaps)

    };


    //cleanup
    useEffect(() => {
        return () => clearInterval(timeIntrvlRef.current);
    }, []);


    return (
        <section
            className={`select-none w-full h-full flex flex-col pb-[12vh] gap-2 ${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} `}>

            <div id='stopwatch-overflow-area' className=' grow min-h-0 overflow-y-auto overflow-x-hidden'>
                {/* Title and desc */}
                <div className={`my-2 flex items-center gap-1`}>
                    <p style={{
                        color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                        backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
                    }} className={`flex items-center justify-center rounded-lg p-2`}>
                        {Icon && <Icon size={18} strokeWidth={2.5} />}
                    </p>
                    <div className='grow flex flex-col gap-0.5'>
                        <span style={{
                            fontSize: `${(Sizes.Small.slice(0, -3)) * 1.3}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                        }} className={` font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>{Name} </span>
                        <span style={{
                            fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
                        }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
                            {Description}
                        </span>
                    </div>
                </div>


                {/* body */}
                <div className='mt-4 flex flex-col gap-3 w-full'>

                    {/* timer */}
                    <div style={{
                        backgroundColor: ThemeColors.header,
                        borderColor: ThemeColors.third
                    }} className={`border justify-center p-[3%] min-h-[25vh] py-2 flex flex-col gap-2 items-center rounded-2xl`}>

                        {/* time */}
                        <StopWatchTimer
                            ThemeColors={ThemeColors}
                            Theme={Theme}
                            AccentColors={AccentColors}
                            time={time}
                            setTime={setTime}
                            start={start}
                            laps={laps}
                        />

                        {/* controls */}
                        <StopWatchControls
                            ThemeColors={ThemeColors}
                            Theme={Theme}
                            AccentColors={AccentColors}
                            timeIntrvlRef={timeIntrvlRef}
                            startTimeRef={startTimeRef}
                            elapsedRef={elapsedRef}
                            handleTimeInc={handleTimeInc}
                            time={time}
                            laps={laps}
                            setLaps={setLaps}
                            setTime={setTime}
                            start={start}
                            setstart={setstart}
                        />
                    </div>


                    {/* laps area */}
                    <Laps
                        Theme={Theme}
                        ThemeColors={ThemeColors}
                        AccentColors={AccentColors}
                        laps={laps}
                        setLaps={setLaps}
                    />

                </div>
            </div>

        </section >
    )
}

export default Stopwatch