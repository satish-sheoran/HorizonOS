import { useSelector } from "react-redux";
import { CSS_EASING } from '../constants/Settings'
import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"

const Clock = () => {
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const currDevice = useSelector((store) => store.Device.currDevice);
    const Theme = useSelector((store) => store.wallpaper.theme.Clock);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div
            style={{
                backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`w-full h-full `}>
            {currDevice === 'Desktop' || currDevice ==='Tablet' ? <WindowControls id='clock' Theme={Theme} ThemeColors={ThemeColors} /> : <MobileCntrls id='clock' Theme={Theme} ThemeColors={ThemeColors} />}
        </div >
    )
}

const ClockWindow = WindowWrapper(Clock, 'clock');

export default ClockWindow;