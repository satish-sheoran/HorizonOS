import { configureStore } from "@reduxjs/toolkit";
import wallpaperReducer from './features/wallpaper'

export const store = configureStore({
    reducer: {
        wallpaper: wallpaperReducer
    }
})