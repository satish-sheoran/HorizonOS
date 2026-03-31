import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const NotesSlice = createSlice({
    name: 'Notes',
    initialState: {
        activeTab: 'Notes',
        activeCategory: 'All',
        openManageFolder: false,
        allCategories: ['All', 'Uncategorized'], // it will contain all the categories of notes, by default it will contain All and Uncategorized, All will show all the notes and Uncategorized will show the notes which do not have any category
        folderContentWidth: 0, // it is width of folder-content named class elem whose value will be used in folder Category component and based on its value we will device if categories will be shown in one column or two column
        baseNumberForDefaultFolder: 0, // it will be used to keep track of the number for default folder name when user create a new folder with default name in format Unnamed folder + number and number will be incremented by 1 every time user create a new folder without changing the default name
        startDeletingCat: false, //it track if user has started deleting category or not, if yes then show select icons on category `
        deletedCategories: [], // tracks categories selected to delete
        CreateTaskOpen: false, // it is used to track if create task pop up is open or not
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
            const { category, defaultName } = action.payload;
            if (!category || typeof category !== "string") return;
            if (state.allCategories.includes(category)) {
                toast.info("Category already exists !");
                return; // if category already exists then do not add it again
            }
            state.allCategories.push(category);
            if (defaultName && category.startsWith(defaultName)) {
                state.baseNumberForDefaultFolder += 1; // increment the number for default folder name when user create a new folder with default name
            }
            return;
        },
        removeCategory(state, action) {
            const { category } = action.payload;
            if (!category) return;
            if (typeof category === "object") {
                state.allCategories = state.allCategories.filter((cat) => !category.includes(cat)); //if multiple category is passed as array then filter all the categories which are in the array
            } else {
                state.allCategories = state.allCategories.filter((cat) => cat !== category); //remove single category which is passed as string
            }
            state.deletedCategories = []; // after deleting category/categories empty the deletedCategories array to remove the deleted categories from the array as now they are deleted

            // if active category is deleted then set active category to All
            if (!state.allCategories.includes(state.activeCategory)) state.activeCategory = 'All';
            return;
        },
        setWidthOfFolderContent(state, action) {
            const width = Number(action.payload.width);
            if (!Number.isFinite(width) || !width || width <= 0) return; //isFinite check if the value is a number and not infinity and also check if it is greater than 0
            state.folderContentWidth = width;
        },
        setStartDeletingCat(state, action) {
            const { start } = action.payload;
            if (typeof start !== "boolean" || start === undefined || start === null) return;
            state.startDeletingCat = start;
            return;
        },
        manageDeletedCategories(state, action) {
            const { category } = action.payload;
            if (!category || category === 'All' || category === 'Uncategorized') return;
            if (category === 'Empty Trash') { //if app is closed or user exits delete mode without deleting cateogry.
                state.deletedCategories = [];
                return;
            }
            if (state.deletedCategories.includes(category)) {
                state.deletedCategories = state.deletedCategories.filter((cat) => cat !== category); // if category is already in the deletedCategories array then remove it from the array
                return;
            }
            state.deletedCategories.push(category); // if category is not in the deletedCategories array then add it to the array

        },
        setCreateTaskOpen(state, action) {
            const { open } = action.payload;
            if (typeof open !== "boolean" || open === undefined || open === null) return;
            state.CreateTaskOpen = open;
            return;
        }
    }
})

export const {
    setActiveTab,
    setActiveCategory,
    setOpenManageFolder,
    addCategory,
    removeCategory,
    setWidthOfFolderContent,
    setStartDeletingCat,
    manageDeletedCategories,
    setCreateTaskOpen
} = NotesSlice.actions;
export default NotesSlice.reducer;