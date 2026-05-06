import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_WALLPAPER, Wallpapers } from "../../constants";


const initialState = {
    src: window.innerWidth <= 768 ?
        Wallpapers['mobile'].find(item => item.id == DEFAULT_WALLPAPER['mobile'])?.url
        :
        Wallpapers['desktop'].find(item => item.id == DEFAULT_WALLPAPER['desktop'])?.url,
    theme: 'dark',      // 'light' | 'dark' | 'auto'
    isAutoTheme: false   //  checks if user allow set auto theme based on time
};


const wallpaperSlice = createSlice({
    name: 'wallpaper',
    initialState,
    reducers: {
        setWallpaper(state, action) {
            state.src = action.payload.src;
            state.theme = action.payload.theme;
        },
        changeTheme(state, action) {
            if (!action.payload.AutoTheme && action.payload.theme !== state.theme) state.isAutoTheme = false;
            state.theme = action.payload.theme === 'dark' ? 'dark' : 'light';
        },
        setAutoTheme(state) {
            state.isAutoTheme = state.isAutoTheme ? false : true
        }
    }
})

export const { setWallpaper, changeTheme, setAutoTheme } = wallpaperSlice.actions;
export default wallpaperSlice.reducer;