import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"

const Clock = () => {
    return (
        <>
            <div className='w-full'>
                <div className='window-header'>
                    <WindowControls id='clock' />
                </div>
            </div>
        </>
    )
}

const ClockWindow = WindowWrapper(Clock, 'clock');

export default ClockWindow;