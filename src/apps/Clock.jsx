import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"

const Clock = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const Theme = useSelector((store) => store.wallpaper.theme.Clock);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)

    return (
        <div
            style={{ backgroundColor: ThemeColors.bg }}
            className={`w-full h-full duration-500 ease-out`}>
            {currDevice === 'Desktop' ? <WindowControls id='clock' Theme={Theme} ThemeColors={ThemeColors} /> : <MobileCntrls id='clock' Theme={Theme} ThemeColors={ThemeColors} />}
        </div >
    )
}

const ClockWindow = WindowWrapper(Clock, 'clock');

export default ClockWindow;