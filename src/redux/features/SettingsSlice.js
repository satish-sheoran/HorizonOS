import { createSlice } from "@reduxjs/toolkit";
import { SETTINGS_SECTIONS } from "../../constants/Settings";

const SettingsSlice = createSlice({
    name: 'Settings',
    initialState: {
        Section: 'About Us',
        activePanel: '' //for opening of settings options
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
        }
    }
})


export const { setSection, setActivePanel } = SettingsSlice.actions;
export default SettingsSlice.reducer;