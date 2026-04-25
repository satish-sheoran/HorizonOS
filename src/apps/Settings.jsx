import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper";
import Sections from "../components/Settings/Sections";

const Settings = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)


    return (
        <div className={`w-full h-full flex flex-col`}>

            {currDevice === 'Desktop' ?
                <WindowControls id='settings' />
                : <MobileCntrls id='settings' />
            }

            <section className={`setting-body grow flex ${theme !== 'dark' ? 'bg-(--primary-light-clr) ' : 'bg-(--bg-dark-app-body)'}`}>

                <Sections currDevice={currDevice} theme={theme}/>
                
                <section className={`overflow-y-auto ${currDevice === 'Desktop' ? 'w-3/4' : 'w-full hidden'}`}></section>
            </section>

        </div>
    )
}

const SettingsWindow = WindowWrapper(Settings, 'settings');

export default SettingsWindow;