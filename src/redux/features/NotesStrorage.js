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

const getTasks = () => {
    try {
        const stored = JSON.parse(localStorage.getItem('Tasks'));
        return Array.isArray(stored) ? stored.filter(({ Task }) => (Task??'').trim()) : [
            {
                id: "@#$RSP",
                Category: 'Personal',
                Task : 'Welcome To Tasks. This is a default Task.',
                Time: '12 : 26 AM',
                Date: 'Sat Jul 18 2026',
                TimeStamp: 1784314786118
            }
        ];
    } catch {
        return [
            {
                id: "@#$RSP",
                Category: 'Personal',
                Task : 'Welcome To Tasks. This is a default Task.',
                Time: '12 : 26 AM',
                Date: 'Sat Jul 18 2026',
                TimeStamp: 1784314786118
            }
        ];
    }
}


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
        startDeletingNotes: false, //it track if user has started deleting notes or not, if yes then show select icons on notes `
        deletedCategories: [], // tracks categories selected to delete
        deletedNotes: [], // tracks notes selected to delete
        CreateNoteOpen: false, // it is used to track if create task pop up is open or not
        Notes: getNotes(),// all notes 
        EditNoteOpen: { open: false, NoteId: '' },
        openTaskManager: false,
        Tasks: getTasks() ?? [],
        CurrentEditingTask: {},
        startDeletingTasks: false,
        deletedTasks: []
    },
    reducers: {
        addNote(state, action) {
            // Task being edited area
            if (action.payload.NoteId) {
                const { title, desc, NoteId, category } = action.payload

                const itemIdx = state.Notes.findIndex(item => item.id === NoteId);
                state.Notes[itemIdx] = { ...state.Notes[itemIdx], title, desc, category };

                localStorage.setItem('Notes', JSON.stringify(state.Notes));

                state.EditNoteOpen = { open: false, NoteId: '' };
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
        setStartDeletingCat(state, action) {
            const { start } = action.payload;
            if (typeof start !== "boolean") return;
            state.startDeletingCat = start;
            if (start === false) state.deletedCategories = []
        },
        setStartDeletingNotes(state, action) {
            const { start } = action.payload;
            if (typeof start !== "boolean") return;
            state.startDeletingNotes = start;
            if (start === false) state.deletedNotes = []
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
        setCreateNoteOpen(state, action) {
            const { open } = action.payload;
            if (typeof open !== "boolean") return;
            state.CreateNoteOpen = open;

        },
        manageEditNote(state, action) {
            if (action.payload.open === false) { //close it
                state.EditNoteOpen.open = false;
                state.EditNoteOpen.NoteId = '';
                return;
            }

            const { NoteId } = action.payload;
            if (!NoteId) return;
            state.EditNoteOpen.open = true
            state.EditNoteOpen.NoteId = NoteId

        },
        manageDeletedNotes(state, action) {
            const { noteId } = action.payload;
            if (!noteId) return;
            if (noteId === 'Empty Trash') { //if app is closed or user exits delete mode without deleting cateogry.
                state.deletedNotes = [];
                return;
            }

            if (state.deletedNotes.includes(noteId)) {
                state.deletedNotes = state.deletedNotes.filter((id) => id !== noteId);
                return;
            }
            state.deletedNotes.push(noteId);

        },
        removeNotes(state, action) {
            const { NotesIds } = action.payload;
            if (!NotesIds) return;

            if (Array.isArray(NotesIds)) {
                state.Notes = state.Notes.filter(({ id }) => !NotesIds.includes(id)); //if multiple notes ID is passed as array then filter all the notes which are in the array

            } else {
                state.Notes = state.Notes.filter(({ id }) => id !== NotesIds); //remove single note which is passed as using its ID
            }
            state.deletedNotes = []; // after deleting notes empty the deletedNotes array to remove the deleted notes from the array as now they are deleted

            localStorage.setItem('Notes', JSON.stringify(state.Notes))

        },
        ResetNotesApp(state) {
            state.activeTab = 'Notes',
                state.activeCategory = 'All',
                state.openManageFolder = false,

                state.allCategories = getCategories(),
                state.baseNumberForDefaultFolder = 0,
                state.startDeletingCat = false,
                state.startDeletingNotes = false,
                state.deletedCategories = [],
                state.deletedNotes = [],
                state.CreateNoteOpen = false,
                state.Notes = getNotes(),
                state.EditNoteOpen = { open: false, NoteId: '' }
            state.openTaskManager = false
            state.Tasks = [],
                state.CurrentEditingTask = {}
        },
        setopenTaskManager(state, action) {
            const { shouldOpen } = action.payload
            if (typeof shouldOpen !== 'boolean') return
            state.openTaskManager = shouldOpen
        },
        addTask(state, action) {
            if (action.payload.id) {
                const { NewTask, Time, Date, TimeStamp, Category } = action.payload
                const idx = state.Tasks.findIndex(({ id }) => id === action.payload.id)
                if (idx === -1) return
                state.Tasks[idx] = { ...state.Tasks[idx], Task: NewTask }
                state.CurrentEditingTask = {}
                localStorage.setItem('Tasks', JSON.stringify(state.Tasks));
                return;
            }
            const { Task, Time, Date, TimeStamp, Category } = action.payload
            if (!(Task??'').trim()) return
            const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&";
            let id;

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


            state.Tasks.push({ id, Task, Time, Date, TimeStamp, Category: 'Personal' })
            localStorage.setItem('Tasks', JSON.stringify(state.Tasks));

        },
        changeTaskCategory(state, action) {
            const { Taskid, TaskCategory } = action.payload

            const idx = state.Tasks.findIndex(({ id, Category }) => id === Taskid && Category !== TaskCategory)
            if (idx === -1) return;
            state.Tasks[idx] = { ...state.Tasks[idx], Category: TaskCategory }
            localStorage.setItem('Tasks', JSON.stringify(state.Tasks));
        },
        setCurrentEditingTask(state, action) {
            const { EditTask } = action.payload;
            const isTaskPresent = state.Tasks.find(({ Category, id }) => EditTask.Category === Category && id === EditTask.id)
            if (!isTaskPresent) return;
            state.CurrentEditingTask = EditTask;
        },
        removeTask(state, action) {
            const { Taskid } = action.payload
            if (!Taskid) return;
            state.Tasks = state.Tasks.filter(({ id }) => id !== Taskid)
            state.CurrentEditingTask = {}
            localStorage.setItem('Tasks', JSON.stringify(state.Tasks))
        },
        deleteTasks(state, action) {
            const { Id } = action.payload;
            if (!Id) return;

            if (Array.isArray(Id)) {
                state.Tasks = state.Tasks.filter(({ id }) => !Id.includes(id));  //filtering Tasks which are present in Ids

            } else {
                state.Task = state.Tasks.filter(({ id }) => id !== Id); //remove single Task which is passed id

            }
            state.deletedTasks = []; // after deleting  empty the deletedTasks array to remove the deleted Tasks from the array as now they are deleted

            //saving updated categories and notes to local storage
            localStorage.setItem('Tasks', JSON.stringify(state.Tasks))
        },
        setstartDeletingTasks(state, action) {
            const { start } = action.payload
            if (typeof start !== 'boolean') return;
            state.startDeletingTasks = start
            if (start === false) state.deletedTasks = []
        },
        addTaskTodeletedTasksArray(state, action) {
            const { Taskid } = action.payload;
            if (Taskid === 'Empty Trash') { //if app is closed or user exits delete mode without deleting cateogry.
                state.deletedTasks = [];
                return;
            }
            const Task = state.Tasks.find(({ id }) => id === Taskid)
            if (!Task) return;
            state.deletedTasks.includes(Taskid) ? state.deletedTasks = state.deletedTasks.filter((val) => val !== Taskid) : state.deletedTasks.push(Taskid)
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
    setStartDeletingNotes,
    manageDeletedCategories,
    setCreateNoteOpen,
    manageEditNote,
    manageDeletedNotes,
    removeNotes,
    ResetNotesApp,
    addTask,
    setopenTaskManager,
    removeTask,
    changeTaskCategory,
    setCurrentEditingTask,
    deleteTasks,
    setstartDeletingTasks,
    addTaskTodeletedTasksArray
} = NotesSlice.actions;
export default NotesSlice.reducer;