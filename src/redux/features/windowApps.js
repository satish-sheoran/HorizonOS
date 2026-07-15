import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../../constants";


const windowAppSlice = createSlice({
    name: 'windowApps',
    initialState: {
        apps: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1
    },
    reducers: {
        openWindow(state, action) {
            const { windowKey, data } = action.payload;

            const window = state.apps[windowKey];
            if (!window) return;
            window.isOpen = true;
            window.zIndex = state.nextZIndex;
            if (data) {
                window.data = data;
            }
            state.nextZIndex++;
        },
        closeWindow(state, action) {
            const { windowKey } = action.payload;

            const window = state.apps[windowKey];
            if (!window) return;
            window.isOpen = false;
            window.zIndex = INITIAL_Z_INDEX;
            window.data = null;
        },
        focusWindow(state, action) {
            const { windowKey } = action.payload;

            const window = state.apps[windowKey];
            if (!window || !window.isOpen) return;
            window.zIndex = state.nextZIndex;
            state.nextZIndex++;
        },
        changeWindowScreenSize(state, action) {
            const { windowKey } = action.payload;

            const window = state.apps[windowKey];
            if (!window) return;

            window.fullScreen = window.fullScreen === true ? false : true;
            if (window.fullScreen) {
                window.windowRatio.width = 'w-full';
                window.windowRatio.height = 'h-full';
            } else {
                window.windowRatio.width = window.default.width;
                window.windowRatio.height = window.default.height;
            }
        },
        CloseAllApp(state) {
            const apps = ['calculator', 'notes', 'settings', 'clock']
            apps.forEach((app) => {
               state.apps[app].isOpen = false
                state.apps[app].zIndex = INITIAL_Z_INDEX
                state.apps[app].windowRatio.width = WINDOW_CONFIG[app].default.width
                state.apps[app].windowRatio.height = WINDOW_CONFIG[app].default.height
            })
        }
    }
});

export const { openWindow, closeWindow, focusWindow, changeWindowScreenSize ,CloseAllApp} = windowAppSlice.actions;
export default windowAppSlice.reducer;