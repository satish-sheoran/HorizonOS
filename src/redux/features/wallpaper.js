import { createSlice } from "@reduxjs/toolkit";
import { ALL_APPS, DEFAULT_WALLPAPER, Wallpapers } from "../../constants";
import { LIGHT_THEME_COLORS, DARK_THEME_COLORS, COMMON_COLORS, ACCENT_COLORS } from "../../constants/style";
import { AnimationsName, AnimationSpeedAndType } from "../../constants/Settings";


const initialState = {
    src: window.innerWidth <= 768 ?
        Wallpapers['mobile'].find(item => item.id == DEFAULT_WALLPAPER['mobile'])?.url
        :
        Wallpapers['desktop'].find(item => item.id == DEFAULT_WALLPAPER['desktop'])?.url,

    theme: ALL_APPS.reduce((acc, { name, theme }) => {
        acc[name] = theme;
        return acc;
    }, {}),  // 'light' | 'dark' | 'auto'

    ThemeColors: ALL_APPS.reduce((acc, { name, theme }) => {
        acc[name] = theme === 'dark' ? DARK_THEME_COLORS : LIGHT_THEME_COLORS;
        return acc;
    }, {}),   // user will get colors as per theme and then they will be set easily bcz name are same just need to use object name before which is already in this object 
    AccentColors: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange'), //color which will be used for buttons,background of some divs  
    isAutoTheme: false,  //  checks if user allow set auto theme based on time
    AdvanceDarkMode: [],

    AnimationTypeNSpeed: AnimationSpeedAndType.find(({ Name }) => Name === 'Normal'),
    AnimationName: AnimationsName.find(({ Name }) => Name === 'Expo Out')
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
            // if Advance dark mode is not ON,then set same theme across all apps and same themeColors
            //  Object.keys retrun an array containg arrays with key at 0 index and its value at 1 index, that's why Object.fromEntries is used to create Object of it.
            state.theme = action.payload.theme === 'dark' ?
                Object.fromEntries(Object.keys(state.theme).map(key => [key, 'dark']))
                :
                Object.fromEntries(Object.keys(state.theme).map(key => {
                    return state.AdvanceDarkMode.includes(key) ? [key, 'dark'] : [key, 'light']
                }));
            state.ThemeColors = action.payload.theme === 'dark' ?
                Object.fromEntries(Object.keys(state.theme).map(key => [key, DARK_THEME_COLORS]))
                :
                Object.fromEntries(Object.keys(state.theme).map(key => {
                    return state.AdvanceDarkMode.includes(key) ? [key, DARK_THEME_COLORS] : [key, LIGHT_THEME_COLORS]
                }));

        },
        setAutoTheme(state) {
            state.isAutoTheme = state.isAutoTheme ? false : true
        },
        setAdvanceDarkMode(state) {
            state.AdvanceDarkMode = state.AdvanceDarkMode ? false : true
        }, AddToAdvanceDarkMode(state, action) {
            const App = action.payload.App;
            state.AdvanceDarkMode.push(App);
            state.theme[App] = 'dark'
            state.ThemeColors[App] = DARK_THEME_COLORS;
        }, RemoveFromAdvanceDarkMode(state, action) {
            const App = action.payload.App;
            state.AdvanceDarkMode = state.AdvanceDarkMode.filter(app => app !== App);
            state.theme[App] = 'light'
            state.ThemeColors[App] = LIGHT_THEME_COLORS;
        }, setAccentColor(state, action) {
            const Color = action.payload.Color;
            state.AccentColors = ACCENT_COLORS.find(({ COLOR }) => COLOR === Color) || ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue')
        }, setAnimationTypeNSpeed(state, action) {
            const Animation = action.payload.Animation;
            state.AnimationTypeNSpeed = AnimationSpeedAndType.find(({ Name }) => Name === Animation) || AnimationSpeedAndType.find(({ Name }) => Name === 'Normal');
        }, setAnimationName(state, action) {
            const Animation = action.payload.Animation
            state.AnimationName =  AnimationsName.find(({Name})=> Name === Animation) || AnimationsName.find(({Name})=> Name === 'Linear')
        }
    }
})

export const { setWallpaper, changeTheme, setAutoTheme, setAdvanceDarkMode, AddToAdvanceDarkMode, RemoveFromAdvanceDarkMode, setAccentColor, setAnimationTypeNSpeed,setAnimationName } = wallpaperSlice.actions;
export default wallpaperSlice.reducer;