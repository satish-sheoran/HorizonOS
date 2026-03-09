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
            window.isOpen = false;
            window.zIndex = INITIAL_Z_INDEX;
            window.data = null;
        },
        focusWindow(state, action) {
            const { windowKey } = action.payload;

            const window = state.apps[windowKey];
            window.zIndex = state.nextZIndex++;
        }
    }
});

export const { openWindow, closeWindow, focusWindow } = windowAppSlice.actions;
export default windowAppSlice.reducer;