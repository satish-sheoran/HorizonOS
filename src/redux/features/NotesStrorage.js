import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice({
    name: 'Notes',
    initialState: {
        activeTab: 'Notes'
    },
    reducers: {
        setActiveTab(state, action) {
            const { tab } = action.payload;
            if (!tab) return;
            state.activeTab = tab;
        }
    }

})

export const { setActiveTab } = NotesSlice.actions;
export default NotesSlice.reducer;