import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_WALLPAPER, Wallpapers } from "../../constants";

const DeviceSlice = createSlice({
    name: 'Device',
    initialState: {
        currDevice: window.innerWidth >= 768 ? 'Desktop' : 'Mobile',
        isTime12HourFormat: true,

    },
    reducers: {
        setDevice(state,action) {
            const width = action.payload.width;
            state.currDevice =  width >= 768 ? 'Desktop' : 'Mobile';
        }, setTimeFormat(state) {
            state.isTime12HourFormat = state.isTime12HourFormat ? false : true;
        }
    }
})

export const { setDevice, setTimeFormat } = DeviceSlice.actions;
export default DeviceSlice.reducer;