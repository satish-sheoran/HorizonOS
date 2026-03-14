import { useDispatch, useSelector } from "react-redux"
import { changeWindowScreenSize, closeWindow, minimizeWindow } from "../redux/features/windowApps";

export const UsewindowControlFns = () => {

    const apps = useSelector((store) => store.windowApps.apps)
    const dispatch = useDispatch();

    const closeApp = (windowKey) => {
        const window = apps[windowKey];
        if (!window) return;

        dispatch(closeWindow({ windowKey }));
    }

    const minimizeApp = (windowKey, data) => {
        const window = apps[windowKey];
        if (!window) return;

        dispatch(minimizeWindow({ windowKey, data }));
    }
    const toggleFullscreen = (windowKey) => {
        const window = apps[windowKey];
        if (!window) return;

        dispatch(changeWindowScreenSize({ windowKey }))
    }

    return { closeApp, minimizeApp, toggleFullscreen }
}