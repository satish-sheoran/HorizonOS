import { useDispatch, useSelector } from "react-redux"
import { changeWindowScreenSize, closeWindow } from "../redux/features/windowApps";

export const UsewindowControlFns = () => {

    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)
    const apps = useSelector((store) => store.windowApps.apps)
    const dispatch = useDispatch();

    const closeApp = (windowKey) => {
        const window = apps[windowKey];
        if (!window) return;

        dispatch(closeWindow({ windowKey }));
        if (EnableDebugLogs) console.log(`[App] ${windowKey} closed`)
        }
    
    
    const toggleFullscreen = (windowKey) => {
        const window = apps[windowKey];
        if (!window) return;
        
        if (EnableDebugLogs) console.log(`[App] ${windowKey} Resized`)
        dispatch(changeWindowScreenSize({ windowKey }))
    }

    return { closeApp, toggleFullscreen }
}