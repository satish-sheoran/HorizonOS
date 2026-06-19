import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_WALLPAPER, Wallpapers } from "../../constants";
import { LIGHT_THEME_COLORS, DARK_THEME_COLORS, COMMON_COLORS, ACCENT_COLORS } from "../../constants/style";


const initialState = {
    src: window.innerWidth <= 768 ?
        Wallpapers['mobile'].find(item => item.id == DEFAULT_WALLPAPER['mobile'])?.url
        :
        Wallpapers['desktop'].find(item => item.id == DEFAULT_WALLPAPER['desktop'])?.url,
        
    theme: 'dark',  // 'light' | 'dark' | 'auto'
    ThemeColors: DARK_THEME_COLORS,   // user will get colors as per theme and then they will be set easily bcz name are same just need to use object name before which is already in this object 
    AccentColors: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange'), //color which will be used for buttons,background of some divs  
    isAutoTheme: false,  //  checks if user allow set auto theme based on time
    AdvanceDarkMode: false
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
            state.ThemeColors = action.payload.theme === 'dark' ? DARK_THEME_COLORS : LIGHT_THEME_COLORS;
        },
        setAutoTheme(state) {
            state.isAutoTheme = state.isAutoTheme ? false : true
        },
        setAdvanceDarkMode(state) {
            state.AdvanceDarkMode = state.AdvanceDarkMode ? false : true
        }
    }
})

export const { setWallpaper, changeTheme, setAutoTheme, setAdvanceDarkMode } = wallpaperSlice.actions;
export default wallpaperSlice.reducer;