import { configureStore } from "@reduxjs/toolkit";
import wallpaperReducer from './features/wallpaper'
import windowAppReducer from './features/windowApps'
import DeviceReducer from './features/DeviceSet'

export const store = configureStore({
    reducer: {
        wallpaper: wallpaperReducer,
        windowApps: windowAppReducer,
        Device: DeviceReducer

    }
})