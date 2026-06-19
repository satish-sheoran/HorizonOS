import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper";
import Sections from "../components/Settings/Sections";
import Content from "../components/Settings/Content";
import { useState } from "react";

const Settings = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Settings)
    const Theme = useSelector((store) => store.wallpaper.theme.Settings)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const activeSection = useSelector((store) => store.Settings.Section)
    const [showContent, setshowContent] = useState(false) //used to open the content section on mobile when a section is selected

    return (
        <div
            style={{ backgroundColor: ThemeColors.bg }}
            className={` w-full h-full flex flex-col transition-colors duration-500 ease-out`}>

            {currDevice === 'Desktop' ?
                <WindowControls id='settings' Theme={Theme} ThemeColors={ThemeColors} />
                : <MobileCntrls id='settings' Theme={Theme} ThemeColors={ThemeColors} />
            }

            <main className={`setting-body w-full relative flex-1 `}>


                <section className="absolute inset-0 overflow-hidden flex">

                    {/* FOR DESKTOPS */}
                    {currDevice === 'Desktop' && (
                        <>
                            <Sections currDevice={currDevice} Theme={Theme} activeSection={activeSection} setShowContent={setshowContent} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                            <Content activeSection={activeSection} currDevice={currDevice} showContent={showContent} setShowContent={setshowContent} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                        </>
                    )}
                    {/* FOR MOBILES */}
                    {currDevice !== 'Desktop' && (
                        !showContent ?
                            <Sections currDevice={currDevice} Theme={Theme} activeSection={activeSection} setShowContent={setshowContent} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                            :
                            <Content activeSection={activeSection} currDevice={currDevice} showContent={showContent} setShowContent={setshowContent} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                    )}
                </section>
            </main>

        </div>
    )
}

const SettingsWindow = WindowWrapper(Settings, 'settings');

export default SettingsWindow;