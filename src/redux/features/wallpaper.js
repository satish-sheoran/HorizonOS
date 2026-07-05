import { createSlice } from "@reduxjs/toolkit";
import { ALL_APPS, DEFAULT_WALLPAPER, Wallpapers } from "../../constants";
import { LIGHT_THEME_COLORS, DARK_THEME_COLORS, COMMON_COLORS, ACCENT_COLORS } from "../../constants/style";
import { AnimationsName, AnimationSpeedAndType, FONT_FAMILY, FONT_SIZES } from "../../constants/Settings";

const DefaultSettings = {
    src: window.innerWidth <= 768 ?
        Wallpapers['mobile'].find(item => item.id == DEFAULT_WALLPAPER['mobile'])?.url
        :
        Wallpapers['desktop'].find(item => item.id == DEFAULT_WALLPAPER['desktop'])?.url,

    theme: ALL_APPS.reduce((acc, { name, theme }) => {
        acc[name] = theme;
        return acc;
    }, {}),

    ThemeColors: ALL_APPS.reduce((acc, { name, theme }) => {
        acc[name] = theme === 'dark' ? DARK_THEME_COLORS : LIGHT_THEME_COLORS;
        return acc;
    }, {}),
    AccentColors: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange'), //color which will be used for buttons,background of some divs  
    isAutoTheme: false,  //  checks if user allow set auto theme based on time
    AdvanceDarkMode: [],

    AnimationTypeNSpeed: AnimationSpeedAndType.find(({ Name }) => Name === 'Normal'),
    AnimationName: AnimationsName.find(({ Name }) => Name === 'Expo Out'),

    //font family
    Font: FONT_FAMILY.find(font => font.Name === 'Poppins'),
    FontSize: FONT_SIZES.find(({ SizeType }) => SizeType === 'Default')
}


const getStoredSettings = () => {
    try {
        const storedSettings = JSON.parse(localStorage.getItem('storedSettings'));
        if (typeof storedSettings === 'object' && !Array.isArray(storedSettings) && storedSettings !== null) {
            const src = (
                window.innerWidth <= 768 ?
                    Wallpapers['mobile'].find(item => item.url === storedSettings?.src)?.url
                    :
                    Wallpapers['desktop'].find(item => item.url === storedSettings?.src)?.url
            ) || undefined // url of wallpaper

            const theme = ALL_APPS.reduce((acc, { name, theme }) => {
                acc[name] = (storedSettings?.theme?.[name] === 'dark' || storedSettings?.theme?.[name] === 'light') ? storedSettings?.theme?.[name] : theme;
                return acc;
            }, {});

            const ThemeColors = ALL_APPS.reduce((acc, { name }) => {
                acc[name] = storedSettings?.theme?.[name] === 'dark' ? DARK_THEME_COLORS : LIGHT_THEME_COLORS
                return acc;
            }, {});

            const AccentColors = ACCENT_COLORS.find(({ COLOR }) => COLOR === storedSettings?.AccentColors?.COLOR) || undefined

            const AnimationTypeNSpeed = AnimationSpeedAndType.find(({ Name }) => Name === storedSettings?.AnimationTypeNSpeed?.Name) || undefined;

            const AnimationName = AnimationsName.find(({ Name }) => Name === storedSettings?.AnimationName?.Name) || undefined;

            const Font = FONT_FAMILY.find(font => font.Name === storedSettings?.Font?.Name) || undefined;


            return {
                src,
                theme,
                ThemeColors,
                AccentColors: AccentColors,
                isAutoTheme: typeof storedSettings.isAutoTheme === "boolean"
                    ? storedSettings.isAutoTheme
                    : undefined,
                AdvanceDarkMode: typeof storedSettings.AdvanceDarkMode === "boolean"
                    ? storedSettings.AdvanceDarkMode
                    : undefined,
                AnimationTypeNSpeed: AnimationTypeNSpeed,
                AnimationName: AnimationName,
                Font: Font
            }
        }
    } catch {
        return undefined
    }

}


const initialState = {
    src: getStoredSettings()?.src || DefaultSettings.src,

    theme: getStoredSettings()?.theme || DefaultSettings.theme,  // 'light' | 'dark' | 'auto'

    ThemeColors: getStoredSettings()?.ThemeColors || DefaultSettings.ThemeColors,   // user will get colors as per theme and then they will be set easily bcz name are same just need to use object name before which is already in this object 

    AccentColors: getStoredSettings()?.AccentColors || DefaultSettings.AccentColors, //color which will be used for buttons,background of some divs  
    isAutoTheme: getStoredSettings()?.isAutoTheme || DefaultSettings.isAutoTheme,  //  checks if user allow set auto theme based on time
    AdvanceDarkMode: getStoredSettings()?.AdvanceDarkMode || DefaultSettings.AdvanceDarkMode,

    AnimationTypeNSpeed: getStoredSettings()?.AnimationTypeNSpeed || DefaultSettings.AnimationTypeNSpeed,
    AnimationName: getStoredSettings()?.AnimationName || DefaultSettings.AnimationName,
    //font family
    Font: getStoredSettings()?.Font || DefaultSettings.Font,
    FontSize: getStoredSettings()?.FontSize || DefaultSettings.FontSize
};


const wallpaperSlice = createSlice({
    name: 'wallpaper',
    initialState,
    reducers: {
        setWallpaper(state, action) {
            const { url } = action.payload;
            state.src = url;
            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, src: url };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
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

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, theme: state.theme, ThemeColors: state.ThemeColors, isAutoTheme: state.isAutoTheme };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));

        },

        setAutoTheme(state) {
            state.isAutoTheme = state.isAutoTheme ? false : true
            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, theme: state.theme, isAutoTheme: state.isAutoTheme };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },

        AddToAdvanceDarkMode(state, action) {
            const App = action.payload.App;
            state.AdvanceDarkMode.push(App);
            state.theme[App] = 'dark'
            state.ThemeColors[App] = DARK_THEME_COLORS;

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, AdvanceDarkMode: state.AdvanceDarkMode };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },

        RemoveFromAdvanceDarkMode(state, action) {
            const App = action.payload.App;
            state.AdvanceDarkMode = state.AdvanceDarkMode.filter(app => app !== App);
            state.theme[App] = 'light'
            state.ThemeColors[App] = LIGHT_THEME_COLORS;

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, AdvanceDarkMode: state.AdvanceDarkMode };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },

        setAccentColor(state, action) {
            const Color = action.payload.Color;
            state.AccentColors = ACCENT_COLORS.find(({ COLOR }) => COLOR === Color) || ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue')

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, AccentColors: state.AccentColors };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },

        setAnimationTypeNSpeed(state, action) {
            const Animation = action.payload.Animation;
            state.AnimationTypeNSpeed = AnimationSpeedAndType.find(({ Name }) => Name === Animation) || AnimationSpeedAndType.find(({ Name }) => Name === 'Normal');
            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, AnimationTypeNSpeed: state.AnimationTypeNSpeed };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },

        setAnimationName(state, action) {
            const Animation = action.payload.Animation
            state.AnimationName = AnimationsName.find(({ Name }) => Name === Animation) || AnimationsName.find(({ Name }) => Name === 'Linear')

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, AnimationName: state.AnimationName };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },

        setFontFamily(state, action) {
            const Family = FONT_FAMILY.find(font => font.Name === action.payload.FontFamily);
            if (!Family) return;
            state.Font = Family;

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, Font: state.Font };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },

        setFontSize(state, action) {
            const Size = FONT_SIZES.find(size => size.SizeType === action.payload.Size);
            if (!Size) return;
            state.FontSize = Size;

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, FontSize: state.FontSize };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        }
    }
})

export const { setWallpaper, changeTheme, setAutoTheme, setAdvanceDarkMode, AddToAdvanceDarkMode, RemoveFromAdvanceDarkMode, setAccentColor, setAnimationTypeNSpeed, setAnimationName, setFontFamily ,setFontSize} = wallpaperSlice.actions;
export default wallpaperSlice.reducer;