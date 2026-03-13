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
            if (!window) return;
            window.zIndex = state.nextZIndex++;
        },
        minimizeWindow(state, action) {
            const { windowKey, data } = action.payload;
            const window = state.apps[windowKey];
            if (!window) return;
            window.zIndex = INITIAL_Z_INDEX;
            window.isOpen = false;
            if (data != null) {
                window.data = data;
            }
        }
        ,
        changeWindowScreenSize(state, action) {
            const { windowKey } = action.payload;

            const window = state.apps[windowKey];
            if (!window) return;
            window.fullScreen = window.fullScreen == true ? false : true;
        }
    }
});

export const { openWindow, closeWindow, focusWindow, changeWindowScreenSize, minimizeWindow } = windowAppSlice.actions;
export default windowAppSlice.reducer;