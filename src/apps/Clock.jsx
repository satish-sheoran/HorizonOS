import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"

const Clock = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)


    return (
        <div className={`w-full h-full duration-500 ease-out ${theme !== 'dark' ? 'bg-(--sec-light-clr)' : 'bg-(--bg-dark-app-body)'}`}>
            {currDevice === 'Desktop' ? <WindowControls id='clock' /> : <MobileCntrls id='clock' />}
        </div >
    )
}

const ClockWindow = WindowWrapper(Clock, 'clock');

export default ClockWindow;