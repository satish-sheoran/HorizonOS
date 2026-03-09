import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"

const Settings = () => {
    return (
        <>
            <div className='w-full'>
                <div className='window-header'>
                    <WindowControls id='settings' />
                </div>
            </div>
        </>
    )
}

const SettingsWindow = WindowWrapper(Settings, 'settings');

export default SettingsWindow;