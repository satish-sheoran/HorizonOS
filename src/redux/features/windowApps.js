import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../../constants";

// USING React-Toastify which will send a toast if the feature is coming soon

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
        changeWindowScreenSize(state, action) {
            const { windowKey } = action.payload;

            const window = state.apps[windowKey];
            if (!window) return;

            window.fullScreen = window.fullScreen == true ? false : true;
            if (window.fullScreen) {
                window.windowRatio.width = 'w-full md:w-[90%]';
                window.windowRatio.height = 'h-[75%]';
            } else {
                window.windowRatio.width = window.default.width;
                window.windowRatio.height = window.default.height;


            }
        }
    }
});

export const { openWindow, closeWindow, focusWindow, changeWindowScreenSize } = windowAppSlice.actions;
export default windowAppSlice.reducer;