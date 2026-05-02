import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper";
import Sections from "../components/Settings/Sections";
import Content from "../components/Settings/Content";
import { useState } from "react";

const Settings = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeSection = useSelector((store) => store.Settings.Section)
    const [showContent, setshowContent] = useState(false) //used to open the content section on mobile when a section is selected

    return (
        <div className={`w-full h-full flex flex-col`}>

            {currDevice === 'Desktop' ?
                <WindowControls id='settings' />
                : <MobileCntrls id='settings' />
            }

            <section className={`setting-body grow flex ${theme !== 'dark' ? 'bg-(--primary-light-clr) ' : 'bg-(--bg-dark-app-body)'}`}>

                {/* FOR DESKTOPS */}
                {currDevice === 'Desktop' && (
                    <>
                        <Sections currDevice={currDevice} theme={theme} activeSection={activeSection} setShowContent={setshowContent} />
                        <Content activeSection={activeSection} currDevice={currDevice} showContent={showContent} setShowContent={setshowContent} />
                    </>
                )}

                {/* FOR MOBILES */}
                {currDevice !== 'Desktop' && (
                    !showContent ?
                        <Sections currDevice={currDevice} theme={theme} activeSection={activeSection} setShowContent={setshowContent} />
                        :
                        <Content activeSection={activeSection} currDevice={currDevice} showContent={showContent} setShowContent={setshowContent} />
                )}

            </section>

        </div>
    )
}

const SettingsWindow = WindowWrapper(Settings, 'settings');

export default SettingsWindow;