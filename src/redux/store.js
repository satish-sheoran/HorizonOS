import { configureStore } from "@reduxjs/toolkit";
import wallpaperReducer from './features/wallpaper'
import windowAppReducer from './features/windowApps'

export const store = configureStore({
    reducer: {
        wallpaper: wallpaperReducer,
        windowApps: windowAppReducer
    }
})