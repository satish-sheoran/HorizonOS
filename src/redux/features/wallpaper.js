import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_WALLPAPER, Wallpapers } from "../../constants";

const wallpaperSlice = createSlice({
    name: 'wallpaper',
    initialState: {
        src: window.innerWidth <= 768 ?
            Wallpapers['mobile'].find(item => item.id == DEFAULT_WALLPAPER['mobile']).url
            :
            Wallpapers['desktop'].find(item => item.id == DEFAULT_WALLPAPER['desktop']).url,

        theme: window.innerWidth <= 768 ?
            Wallpapers['mobile'].find(item => item.id == DEFAULT_WALLPAPER['mobile']).theme
            :
            Wallpapers['desktop'].find(item => item.id == DEFAULT_WALLPAPER['desktop']).theme,

    },
    reducers: {
        setWallpaper(state, action) {
            state.src = action.payload.src;
            state.theme = action.payload.theme;
        }
    }
})

export const { setWallpaper } = wallpaperSlice.actions;
export default wallpaperSlice.reducer;