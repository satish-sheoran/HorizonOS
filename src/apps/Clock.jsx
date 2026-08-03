import { useSelector, useDispatch } from "react-redux";
import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"
import * as Icons from "lucide-react";
import { ACCENT_COLORS, COMMON_COLORS } from "../constants/style";
import { Clock_Options } from "../constants/Clock";
import { setActiveTab } from '../redux/features/Clock'
import Alarms from '../components/Clock/Alarms'
import WorldClock from '../components/Clock/WorldClock'
import Timers from '../components/Clock/Timers'
import Stopwatch from '../components/Clock/Stopwatch'
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const AllTabs = {
    Alarms,
    WorldClock,
    Timers,
    Stopwatch
}


const Clock = () => {

    const dispatch = useDispatch()
    const { ActiveTab: ClockSec } = useSelector(store => store.Clock)

    const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const Device = useSelector((store) => store.Device.currDevice);
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Theme = useSelector((store) => store.wallpaper.theme.Clock);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    //states
    const [ClockAllTabsWidth, setClockAllTabsWidth] = useState(0)
    const [ClockAllTabsHeight, setClockAllTabsHeight] = useState(0)



    useLayoutEffect(() => {
        const el = document.querySelector('#ClockAllTabs')
        if (!el) return;

        const width = el.getBoundingClientRect().width;
        const height = el.getBoundingClientRect().height;
        setClockAllTabsWidth(`${width}`)
        setClockAllTabsHeight(`${height}`)
    }, [Device, fullScreen])


    return (
        <div
            style={{
                backgroundColor: ThemeColors.bg,
            }}
            className={`overflow-hidden w-full h-full flex flex-col`}>
            {Device === 'Desktop' || Device === 'Tablet' ? <WindowControls id='clock' Theme={Theme} ThemeColors={ThemeColors} /> : <MobileCntrls id='clock' Theme={Theme} ThemeColors={ThemeColors} />}

            <main className={`relative overflow-hidden  flex-1 flex flex-col w-full min-h-0`}>
                {/* content */}

                <section className={`relative h-full flex flex-col overflow-hidden`}>
                    <div className="absolute inset-0 overflow-hidden">

                        {Clock_Options.map(({ option, icon, desc, fileName }, idx) => {
                            const Component = AllTabs[fileName];

                            if (!Component || option !== ClockSec.option) return null;
                            return <div key={idx}
                                style={{
                                    paddingLeft: fullScreen ? `${ClockAllTabsWidth}px` : ''
                                }}
                                className={`w-full h-full relative overflow-hidden `}>
                                <Component
                                    Name={option}
                                    Description={desc}
                                    icon={icon}
                                />
                            </div>
                        })}

                    </div>
                </section>

                {/* options */}
                <footer id='ClockAllTabs'
                    className={`absolute ${!fullScreen ? 'w-full h-fit bottom-0 left-0 px-[2.5%] pb-[2.5%] items-center' : 'border-r w-fit h-full left-0 top-0'} flex  justify-center bg-transparent`}
                >
                    <div style={{
                        borderColor: ThemeColors.third, backgroundColor: !fullScreen ? ThemeColors.header : '', boxShadow: !fullScreen ? '0 1px 8px rgba(0,0,0,0.15)' : '',
                    }}
                        className={`${Device !== 'Mobile' ? 'w-fit' : 'w-full border'} ${fullScreen ? 'h-fit flex-col' : ''} p-2.5 rounded-2xl flex justify-between items-center  gap-2`}>

                        {
                            Clock_Options.map(({ option, icon }, idx) => {
                                const ICON = Icons[icon]
                                return <button
                                    key={idx}
                                    onClick={() => dispatch(setActiveTab({ option }))}
                                    style={{
                                        fontSize: !fullScreen ? `${(Sizes.Small.slice(0, -3)) * 0.7}rem` : Sizes.Small,
                                        fontFamily: Weights.SemiBold,
                                        color: ClockSec.option === option ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE : ThemeColors.secText,
                                        backgroundColor: ClockSec.option === option ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr : '',
                                        '--hover': ClockSec.option === option ?
                                            ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray,

                                    }}
                                    className={`HOVER_CLASS px-3 py-2.5 font-semibold rounded-xl flex ${!fullScreen ? 'flex-col justify-center items-center' : 'w-full justify-start items-center'} gap-1  `}>

                                    {ICON && <ICON strokeWidth={2.5} size={17} />}
                                    <span className="select-none">{option}</span>
                                </button>
                            })
                        }
                    </div>
                </footer>

            </main>

        </div >
    )
}

const ClockWindow = WindowWrapper(Clock, 'clock');

export default ClockWindow;