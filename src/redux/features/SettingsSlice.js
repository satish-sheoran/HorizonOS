import { createSlice } from "@reduxjs/toolkit";
import { ALL_APPS } from "../../constants";

const SettingsSlice = createSlice({
    name: 'Settings',
    initialState: {
        Section: 'About Us',
        activePanel: '', //for opening of settings options
        TotalStorage: ALL_APPS.reduce((total, { size, dataSize }) => total + Number(size.slice(0, -2)) + Number(dataSize.slice(0, -2)), 0),

        AppTotalStorage: ALL_APPS.reduce((apps, { name, size, dataSize }) => {
            let appSize = Number(size.slice(0, -2))
            let appDataSize = Number(dataSize.slice(0, -2))
            apps[name] = appDataSize + appSize >= 1024 ? `${Math.floor((appDataSize + appSize) / 1024)} GB` : `${appDataSize + appSize} MB`
            return apps
        }, {})
    },
    reducers: {
        setSection(state, action) {
            const { section } = action.payload;
            if (!section) return;
            state.Section = section
            state.activePanel = ''; //close the active panel when section is changed

        },
        setActivePanel(state, action) {
            const { panel } = action.payload;
            state.activePanel = panel;
        },
        ResetSettings(state) {
            state.Section = 'About Us'
            state.activePanel = ''
        }
    }
})


export const { setSection, setActivePanel ,ResetSettings} = SettingsSlice.actions;
export default SettingsSlice.reducer;