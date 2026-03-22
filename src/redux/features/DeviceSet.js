import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_WALLPAPER, Wallpapers } from "../../constants";

const DeviceSlice = createSlice({
    name: 'Device',
    initialState: {
        currDevice: window.innerWidth >= 768 ? 'Desktop' : 'Mobile'
    },
    reducers: {
        setDevice(state, action) {
            state.currDevice = action.payload;
        }
    }
})

export const { setDevice } = DeviceSlice.actions;
export default DeviceSlice.reducer;