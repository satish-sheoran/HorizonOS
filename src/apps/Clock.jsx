import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"

const Clock = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);

    return (
        <>
            <div className='w-full h-full'>
                {currDevice === 'Desktop' ? <WindowControls id='clock' /> : <MobileCntrls id='clock' />}
            </div >
        </>
    )
}

const ClockWindow = WindowWrapper(Clock, 'clock');

export default ClockWindow;