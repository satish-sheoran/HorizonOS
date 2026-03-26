import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const NotesSlice = createSlice({
    name: 'Notes',
    initialState: {
        activeTab: 'Notes',
        activeCategory: 'All',
        openManageFolder: false,
        allCategories: ['All', 'Uncategorized'] // it will contain all the categories of notes, by default it will contain All and Uncategorized, All will show all the notes and Uncategorized will show the notes which do not have any category
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
        },
        addCategory(state, action) {
            const { category } = action.payload;
            if (!category) return;
            if (state.allCategories.includes(category)) {
                toast.info("Category already exists !");
                return; // if category already exists then do not add it again
            }
            state.allCategories.push(category);
        },
        removeCategory(state, action) {
            const { category } = action.payload;
            if (!category) return;
            if (typeof category === "object") {
                state.allCategories = state.allCategories.filter((cat) => !category.includes(cat)); //if multiple category is passed as array then filter all the categories which are in the array
            } else {
                state.allCategories = state.allCategories.filter((cat) => cat !== category); //remove single category which is passed as string
            }
            return;
        }

    }

})

export const { setActiveTab, setActiveCategory, setOpenManageFolder, addCategory, removeCategory } = NotesSlice.actions;
export default NotesSlice.reducer;