import { useDispatch, useSelector } from "react-redux"
import { changeWindowScreenSize, closeWindow } from "../redux/features/windowApps";
import { setOpenManageFolder } from "../redux/features/NotesStrorage";

export const UsewindowControlFns = () => {

    const apps = useSelector((store) => store.windowApps.apps)
    const dispatch = useDispatch();

    const closeApp = (windowKey) => {
        const window = apps[windowKey];
        if (!window) return;

        dispatch(closeWindow({ windowKey }));
        if (windowKey === 'notes') dispatch(setOpenManageFolder({ open: false })); //if app is closed then close the manage folder of notes app which manages all categories of notes app
    }


    const toggleFullscreen = (windowKey) => {
        const window = apps[windowKey];
        if (!window) return;

        dispatch(changeWindowScreenSize({ windowKey }))
    }

    return { closeApp, toggleFullscreen }
}