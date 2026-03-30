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
        defaultValOfInput: 'Unnamed folder',
        baseNumberForDefaultFolder: 0, // it will be used to keep track of the number for default folder name when user create a new folder with default name in format Unnamed folder + number and number will be incremented by 1 every time user create a new folder without changing the default name
        startDeletingCat: false, //it keeps track if user has started deleting category or not, if yes then show select icons on category `
        deletedCategories: [] // it will keep the track of categories which are selected to be deleted when user start deleting category, it will be used in manage folder component when user click on delete button to delete the selected categories 
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
            if (!category || typeof category !== "string") return;
            if (state.allCategories.includes(category)) {
                toast.info("Category already exists !");
                return; // if category already exists then do not add it again
            }
            state.allCategories.push(category);
            if (category.startsWith(state.defaultValOfInput)) {
                state.baseNumberForDefaultFolder += 1; // increment the number for default folder name when user create a new folder with default name
                state.defaultValOfInput = 'Unnamed folder' + state.baseNumberForDefaultFolder; // update the default value for input field for next folder creation with default name
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
    manageDeletedCategories
} = NotesSlice.actions;
export default NotesSlice.reducer;