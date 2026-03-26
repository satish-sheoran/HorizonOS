import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice({
    name: 'Notes',
    initialState: {
        activeTab: 'Notes',
        activeCategory: 'All',
        openManageFolder: false
    },
    reducers: {
        setActiveTab(state, action) {
            const { tab } = action.payload;
            if (!tab) return;
            state.activeTab = tab;
        },
        setActiveCategory(state, action) {
            const { category } = action.payload;
            if (!category) return;
            state.activeCategory = category;
        },
        setOpenManageFolder(state, action) {
            const { open } = action.payload;
            state.openManageFolder = open;
            return;
        }
    }

})

export const { setActiveTab, setActiveCategory, setOpenManageFolder } = NotesSlice.actions;
export default NotesSlice.reducer;