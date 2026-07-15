import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_WALLPAPER, Wallpapers } from "../../constants";

const getTimeFormat = () => {
    const storedSettings = JSON.parse(localStorage.getItem('storedSettings'));
    return { is12HourFormat: storedSettings?.is12HourFormat ?? true }
}

const DeviceSlice = createSlice({
    name: 'Device',
    initialState: {
        currDevice: window.innerWidth < 768 ? 'Mobile' : window.innerWidth <= 1023 ? 'Tablet' : 'Desktop',
        isTime12HourFormat: getTimeFormat()?.is12HourFormat ?? true,
        startFactoryReset: false

    },
    reducers: {
        setDevice(state, action) {
            const width = action.payload.width;
            state.currDevice = width < 768 ? 'Mobile' : width <= 1023 ? 'Tablet' : 'Desktop';
        }, setTimeFormat(state) {
            state.isTime12HourFormat = state.isTime12HourFormat ? false : true;
            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, is12HourFormat: state.isTime12HourFormat };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },
        startingFactoryReset(state, action) {
            const { Start } = action.payload
            if (typeof Start !== 'boolean') return
            state.startFactoryReset = Start;
        },ResetAll(state){
            state.isTime12HourFormat = getTimeFormat()?.is12HourFormat ?? true
        }
    }
})

export const { setDevice, setTimeFormat,startingFactoryReset,ResetAll } = DeviceSlice.actions;
export default DeviceSlice.reducer;