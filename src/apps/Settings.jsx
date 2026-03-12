import { useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"

const Settings = () => {
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <>
            <div className='w-full'>
                <div className={`window-header border-b ${theme != 'dark' ? 'bg-(--bg-light-window-header) border-(--bg-light-border)' : 'bg-(--bg-dark-window-header) border-(--bg-dark-border)'}`}>
                    <WindowControls id='settings' />
                    <p>Settings</p>
                </div>
            </div>
        </>
    )
}

const SettingsWindow = WindowWrapper(Settings, 'settings');

export default SettingsWindow;