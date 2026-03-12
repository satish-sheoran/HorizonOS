import { useDispatch, useSelector } from "react-redux"
import { closeWindow } from "../redux/features/windowApps";

export const UsewindowControlFns = () => {

    const apps = useSelector((store) => store.windowApps.apps)
    const dispatch = useDispatch();

    const closeApp = (windowKey) => {
        const window = apps[windowKey];
        if (!window) return;

        dispatch(closeWindow({ windowKey }));
    }

    return { closeApp }
}