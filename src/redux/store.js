import { configureStore } from "@reduxjs/toolkit";
import wallpaperReducer from './features/wallpaper'
import windowAppReducer from './features/windowApps'
import DeviceReducer from './features/DeviceSet'
import NotesReducer from './features/NotesStrorage'
import SettingsReducer from './features/SettingsSlice'
import CalculatorReducer from './features/Calculator'

export const store = configureStore({
    reducer: {
        Calculator : CalculatorReducer,
        wallpaper: wallpaperReducer,
        windowApps: windowAppReducer,
        Device: DeviceReducer,
        Notes : NotesReducer,
        Settings : SettingsReducer,
    }
})