import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"

const Notes = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);

    return (
        <>
            <div className='w-full h-full'>
                {currDevice === 'Desktop' ? <WindowControls id='notes' /> : <MobileCntrls id='notes' />}
            </div>
            
            {/* BODY */}
            
        </>
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;