/**
 * 
 * Window Manager
 *
 * This module provides helper functions to control window applications
 * (open, close) by dispatching Redux actions.
 *
 * It acts as a centralized interface between UI components and the
 * Redux windowApps slice so that components don't need to directly
 * dispatch Redux actions.
 *
 * Usage:
 * openApp("calculator")
 * openApp("notes", data)
 * closeApp("settings")
 */

import { useDispatch, useSelector } from "react-redux";
import { closeWindow, openWindow } from "../redux/features/windowApps";


export function useWindowManager() {

    const dispatch = useDispatch();
    const apps = useSelector((store) => store.windowApps.apps)
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)

    const toggleApp = ({ id, canOpen }) => {
        if (!canOpen) return;

        const window = apps[id];

        if (window.isOpen) {
            if (EnableDebugLogs) console.log(`[App] ${id} closed`)
            dispatch(closeWindow({ windowKey: id }))
        } else {
            dispatch(openWindow({ windowKey: id }))
            if (EnableDebugLogs) console.log(`[App] ${id} opened`)
        }
    }

    return { toggleApp }
}
