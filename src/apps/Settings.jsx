import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"

const Settings = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)


    return (
        <div className={`w-full h-full flex flex-col  ${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

            {currDevice === 'Desktop' ?
                <WindowControls id='settings' />
                : <MobileCntrls id='settings' />
            }


            <section className="setting-body grow">
            </section>

        </div>
    )
}

const SettingsWindow = WindowWrapper(Settings, 'settings');

export default SettingsWindow;