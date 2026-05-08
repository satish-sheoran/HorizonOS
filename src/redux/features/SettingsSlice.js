import { createSlice } from "@reduxjs/toolkit";
import { SETTINGS_SECTIONS } from "../../constants/Settings";

const SettingsSlice = createSlice({
    name: 'Settings',
    initialState: {
        Section : 'About Us',
    },
    reducers: {
        setSection(state, action) {
            const { section } = action.payload;
            if (!section) return;
            state.Section = section
        }
    }
})


export const { setSection } = SettingsSlice.actions;
export default SettingsSlice.reducer;