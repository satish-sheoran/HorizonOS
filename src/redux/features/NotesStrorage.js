import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getCategories = () => {
    try {
        const stored = JSON.parse(localStorage.getItem('Categories'));
        return Array.isArray(stored) ? stored : ['All', 'Uncategorized'];
    } catch {
        return ['All', 'Uncategorized'];
    }
};

const getNotes = () => {
    try {
        const stored = JSON.parse(localStorage.getItem('Notes'));
        return Array.isArray(stored) ? stored : [
            {
                id: 'a12@1#$', //id will be random of 5 charaacters including 0-9,a-z,A-Z and special chars : '@$&!#'
                category: 'Uncategorized',
                title: 'Welcome to Notes App Default Note',
                desc: 'This is your first note, you can edit or delete it. You can also create new notes and organize them into categories. Enjoy using the app!',
                timeStamp: Date.now()
            },
        ];
    } catch {
        return [
            {
                id: 'a12@1#$', //id will be random of 5 charaacters including 0-9,a-z,A-Z and special chars : '@$&!#'
                category: 'Uncategorized',
                title: 'Welcome to Notes App Default Note',
                desc: 'This is your first note, you can edit or delete it. You can also create new notes and organize them into categories. Enjoy using the app!',
                timeStamp: Date.now()
            },
        ];
    }
};


const NotesSlice = createSlice({
    name: 'Notes',
    initialState: {
        activeTab: 'Notes',
        activeCategory: 'All',
        openManageFolder: false,

        allCategories: getCategories(), // it will contain all the categories of notes, by default it will contain All and Uncategorized, All will show all the notes and Uncategorized will show the notes which do not have any category
        folderContentWidth: 0, // it is width of folder-content named class elem whose value will be used in folder Category component and based on its value we will device if categories will be shown in one column or two column
        baseNumberForDefaultFolder: 0, // it will be used to keep track of the number for default folder name when user create a new folder with default name in format Unnamed folder + number and number will be incremented by 1 every time user create a new folder without changing the default name
        startDeletingCat: false, //it track if user has started deleting category or not, if yes then show select icons on category `
        deletedCategories: [], // tracks categories selected to delete
        CreateTaskOpen: false, // it is used to track if create task pop up is open or not
        Notes: getNotes(),// all notes 
        NotesContainerWidth: 0, //used to set colums in notes area and then as per that,set width of 1 note 
        EditTaskOpen: { open: false, TaskId: '' }
    },
    reducers: {
        addNote(state, action) {
            // Task being edited area
            if (action.payload.TaskId) {
                const { title, desc, TaskId } = action.payload

                const itemIdx = state.Notes.findIndex(item => item.id === TaskId);
                state.Notes[itemIdx] = { ...state.Notes[itemIdx], title, desc };

                localStorage.setItem('Notes', JSON.stringify(state.Notes));

                state.EditTaskOpen = { open: false, TaskId: '' };
                return;
            }

            // task adding area
            const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&";
            const { title, desc } = action.payload;
            let category, timeStamp, id;

            category = state.activeCategory === 'All'
                ? 'Uncategorized'
                : state.activeCategory;

            id = Array.from({ length: 7 }, () =>
                chars[Math.floor(Math.random() * chars.length)]
            ).join("");

            let idExists = state.Notes.some((notes) => notes.id === id); //checking if id exists 
            // ensure unique id 
            while (idExists) {
                id = Array.from({ length: 7 }, () =>
                    chars[Math.floor(Math.random() * chars.length)]
                ).join("");
                idExists = state.Notes.some((notes) => notes.id === id); //now check if it exists or not again 
            }

            timeStamp = Date.now();

            state.Notes.push({ id, category, title, desc, timeStamp });
            localStorage.setItem('Notes', JSON.stringify(state.Notes))
        },
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
            if (typeof open !== "boolean") return;
            state.openManageFolder = open;

        },
        addCategory(state, action) {
            const { category, defaultName } = action.payload;
            if (!category || typeof category !== "string") return;
            if (state.allCategories.includes(category)) {
                toast.info("Category already exists !");
                return; // if category already exists then do not add it again
            }
            state.allCategories.push(category);
            localStorage.setItem('Categories', JSON.stringify(state.allCategories))

            if (defaultName && category.startsWith(defaultName)) {
                state.baseNumberForDefaultFolder += 1; // increment the number for default folder name when user create a new folder with default name
            }

        },
        removeCategory(state, action) {
            const { category } = action.payload;
            if (!category) return;

            if (Array.isArray(category)) {
                state.allCategories = state.allCategories.filter((cat) => !category.includes(cat)); //if multiple category is passed as array then filter all the categories which are in the array
                state.Notes = state.Notes.filter(note => !category.includes(note.category)); //delete notes under that category

            } else {
                state.allCategories = state.allCategories.filter((cat) => cat !== category); //remove single category which is passed as string
                state.Notes = state.Notes.filter((note) => note.category !== category); //deleting note under that cateogry
            }
            state.deletedCategories = []; // after deleting category/categories empty the deletedCategories array to remove the deleted categories from the array as now they are deleted

            // if active category is deleted then set active category to All
            if (!state.allCategories.includes(state.activeCategory)) state.activeCategory = 'All';


            //saving updated categories and notes to local storage
            localStorage.setItem('Categories', JSON.stringify(state.allCategories))
            localStorage.setItem('Notes', JSON.stringify(state.Notes))

        },
        setWidthOfFolderContent(state, action) {
            const width = Number(action.payload.width);
            if (!Number.isFinite(width) || !width || width <= 0) return; //isFinite check if the value is a number and not infinity and also check if it is greater than 0
            state.folderContentWidth = width;
        },
        setNotesContainerWidth(state, action) {
            const width = Number(action.payload.width);
            if (!Number.isFinite(width) || !width || width <= 0) return;
            state.NotesContainerWidth = width;
        },
        setStartDeletingCat(state, action) {
            const { start } = action.payload;
            if (typeof start !== "boolean") return;
            state.startDeletingCat = start;

        },
        manageDeletedCategories(state, action) {
            const { category } = action.payload;
            if (!category || category === 'All' || category === 'Uncategorized') return;
            if (category === 'Empty Trash') { //if app is closed or user exits delete mode without deleting cateogry.
                state.deletedCategories = [];
                return;
            }

            // if cateogry is their then remove it (user want to unselect it) else add to it

            if (state.deletedCategories.includes(category)) {
                state.deletedCategories = state.deletedCategories.filter((cat) => cat !== category)
                return;
            }
            state.deletedCategories.push(category);

        },
        setCreateTaskOpen(state, action) {
            const { open } = action.payload;
            if (typeof open !== "boolean") return;
            state.CreateTaskOpen = open;

        },
        manageEditTask(state, action) {
            if (action.payload.open === false) { //close it
                state.EditTaskOpen.open = false;
                state.EditTaskOpen.TaskId = '';
                return;
            }

            const { TaskId } = action.payload;
            if (!TaskId) return;
            state.EditTaskOpen.open = true
            state.EditTaskOpen.TaskId = TaskId

        }
    }
})

export const {
    addNote,
    setActiveTab,
    setActiveCategory,
    setOpenManageFolder,
    addCategory,
    removeCategory,
    setWidthOfFolderContent,
    setStartDeletingCat,
    manageDeletedCategories,
    setCreateTaskOpen,
    setNotesContainerWidth,
    manageEditTask
} = NotesSlice.actions;
export default NotesSlice.reducer;