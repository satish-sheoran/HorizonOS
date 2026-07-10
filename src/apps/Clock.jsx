import { useSelector, useDispatch } from "react-redux";
import { CSS_EASING } from '../constants/Settings'
import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"
import * as Icons from "lucide-react";
import { ACCENT_COLORS, COMMON_COLORS } from "../constants/style";
import { Clock_Options } from "../constants/Clock";
import { setActiveTab } from '../redux/features/Clock'
import ClockTab from '../components/Clock/ClockTab'
import Alarms from '../components/Clock/Alarms'
import Stopwatch from '../components/Clock/Stopwatch'
import WorldClock from '../components/Clock/WorldClock'
import Timer from '../components/Clock/Timer'
import { useEffect, useLayoutEffect, useState } from "react";



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
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

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
                backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`overflow-hidden w-full h-full flex flex-col`}>
            {Device === 'Desktop' || Device === 'Tablet' ? <WindowControls id='clock' Theme={Theme} ThemeColors={ThemeColors} /> : <MobileCntrls id='clock' Theme={Theme} ThemeColors={ThemeColors} />}

            <main className={`relative overflow-hidden  flex-1 flex flex-col w-full min-h-0`}>
                {/* content */}

                <section className={`h-full flex flex-col  overflow-hidden`}>
                    <div style={{
                        paddingLeft: !fullScreen ? '' : `${Math.floor(ClockAllTabsWidth)}px`, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`absolute inset-0  overflow-hidden`}>

                        {ClockSec.option === 'Clock' && <ClockTab ClockAllTabsWidth={ClockAllTabsWidth} ClockAllTabsHeight={ClockAllTabsHeight} />}
                        {ClockSec.option === 'Alarms' && <Alarms ClockAllTabsWidth={ClockAllTabsWidth} ClockAllTabsHeight={ClockAllTabsHeight} />}
                        {ClockSec.option === 'Stopwatch' && <Stopwatch ClockAllTabsWidth={ClockAllTabsWidth} ClockAllTabsHeight={ClockAllTabsHeight} />}
                        {ClockSec.option === 'World Clock' && <WorldClock ClockAllTabsWidth={ClockAllTabsWidth} ClockAllTabsHeight={ClockAllTabsHeight} />}
                        {ClockSec.option === 'Timer' && <Timer ClockAllTabsWidth={ClockAllTabsWidth} ClockAllTabsHeight={ClockAllTabsHeight} />}
                    </div>
                </section>

                {/* options */}
                <footer id='ClockAllTabs'
                    style={{
                        backgroundColor: !fullScreen ? '' : ThemeColors.header,
                         transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]

                    }}
                    className={`absolute ${!fullScreen ? 'w-full h-fit bottom-0 left-0 px-[2.5%] pb-[2.5%] items-center' : 'w-fit h-full left-0 top-0'} flex  justify-center bg-transparent`}
                >
                    <div style={{
                        backgroundColor: !fullScreen ? ThemeColors.header : '', boxShadow: !fullScreen ? '0 1px 8px rgba(0,0,0,0.15)' : '', transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}
                        className={`${Device !== 'Mobile' ? 'w-fit' : 'w-full'} ${fullScreen ? 'gap-2 h-fit flex-col' : ''} px-1.5 rounded-2xl flex justify-between items-center py-3`}>

                        {
                            Clock_Options.map(({ option, icon }) => {
                                const ICON = Icons[icon]
                                return <button
                                    onClick={() => dispatch(setActiveTab({ option }))}
                                    style={{
                                        fontSize: !fullScreen ? `${(Sizes.Small.slice(0, -3)) * 0.7}rem` : Sizes.Small,
                                        fontFamily: Weights.SemiBold,
                                        color: ClockSec.option === option ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE : ThemeColors.secText,
                                        backgroundColor: ClockSec.option === option ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr : '',
                                        '--hover': ClockSec.option === option ?
                                            ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray,
                                        transitionProperty: 'color, background-color, border-color',
                                        transitionDuration: Speed,
                                        transitionTimingFunction: CSS_EASING[Animation]
                                    }}
                                    className={`HOVER_CLASS px-3 py-2.5 font-semibold rounded-xl flex ${!fullScreen ? 'flex-col justify-center items-center' : 'w-full justify-start items-center'} gap-1  `}>

                                    {ICON && <ICON strokeWidth={2.5} size={17} />}
                                    <span>{option}</span>
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