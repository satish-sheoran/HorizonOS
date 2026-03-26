import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice({
    name: 'Notes',
    initialState: {
        activeTab: 'Notes',
        activeCategory: 'All'
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
        }
    }

})

export const { setActiveTab, setActiveCategory } = NotesSlice.actions;
export default NotesSlice.reducer;