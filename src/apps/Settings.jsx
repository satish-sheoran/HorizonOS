import { useDispatch, useSelector } from "react-redux";
import { CSS_EASING } from '../constants/Settings'
import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper";
import Sections from "../components/Settings/Sections";
import Content from "../components/Settings/Content";
import { useEffect, useState } from "react";
import { setActivePanel } from "../redux/features/SettingsSlice";

const Settings = () => {

    const dispatch = useDispatch()

    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const currDevice = useSelector((store) => store.Device.currDevice);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Settings)
    const Theme = useSelector((store) => store.wallpaper.theme.Settings)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const activeSection = useSelector((store) => store.Settings.Section)
    const [showContent, setshowContent] = useState(false) //used to open the content section on mobile when a section is selected
    const isSettingsOpen = useSelector((store) => store.windowApps.apps['settings'].isOpen);
    const isFactoryResetting = useSelector((store) => store.Device.startFactoryReset);

    useEffect(() => {
        if (isSettingsOpen) return;
        const closeAll = () => {
            dispatch(setActivePanel({ panel: '' }))
            setshowContent(false)
        }
        closeAll()

    }, [isSettingsOpen])

    useEffect(() => {
        if (isFactoryResetting) setshowContent(false)
    }, [isFactoryResetting])

    return (
        <div
            style={{
                backgroundColor: ThemeColors.bg, 
            }}
            className={` w-full h-full flex flex-col `}>

            {currDevice === 'Desktop' || currDevice === 'Tablet' ?
                <WindowControls id='settings' Theme={Theme} ThemeColors={ThemeColors} />
                : <MobileCntrls id='settings' Theme={Theme} ThemeColors={ThemeColors} />
            }

            <main className={`setting-body w-full relative flex-1 `}>


                <section className="absolute inset-0 overflow-hidden flex">

                    {/* FOR DESKTOPS */}
                    {(currDevice === 'Desktop' || currDevice === 'Tablet') && (
                        <>
                            <Sections currDevice={currDevice} Theme={Theme} activeSection={activeSection} setShowContent={setshowContent} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                            <Content activeSection={activeSection} currDevice={currDevice} showContent={showContent} setShowContent={setshowContent} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                        </>
                    )}
                    {/* FOR MOBILES */}
                    {currDevice === 'Mobile' && (
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