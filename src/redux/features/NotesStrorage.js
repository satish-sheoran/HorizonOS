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
                timeStamp: Date.now(),
                pin: false
            },
        ];
    } catch {
        return [
            {
                id: 'a12@1#$', //id will be random of 5 charaacters including 0-9,a-z,A-Z and special chars : '@$&!#'
                category: 'Uncategorized',
                title: 'Welcome to Notes App Default Note',
                desc: 'This is your first note, you can edit or delete it. You can also create new notes and organize them into categories. Enjoy using the app!',
                timeStamp: Date.now(),
                pin: false
            },
        ];
    }
};

const getTasks = () => {
    try {
        const stored = JSON.parse(localStorage.getItem('Tasks'));
        return Array.isArray(stored) ? stored.filter(({ Task }) => (Task ?? '').trim()) : [
            {
                id: "@#$RSP",
                Category: 'Personal',
                Task: 'Welcome To Tasks. This is a default Task.',
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
                Task: 'Welcome To Tasks. This is a default Task.',
                Time: '12 : 26 AM',
                Date: 'Sat Jul 18 2026',
                TimeStamp: 1784314786118
            }
        ];
    }
}

const getViewStyleAndSort = () => {
    try {
        const storedSettings = JSON.parse(localStorage.getItem('storedSettings'));
        if (typeof storedSettings === 'object' && !Array.isArray(storedSettings) && storedSettings !== null) {
            const NoteSortMethod = storedSettings?.NoteSortMethod;

            return {
                NotesViewStyle: storedSettings?.NotesViewStyle ?? undefined,
                NoteSortMethod: (NoteSortMethod !== 'Earliest' && NoteSortMethod !== 'Latest' && NoteSortMethod !== 'A-Z' && NoteSortMethod !== 'Z-A') ? undefined : NoteSortMethod
            }
        }
        return undefined
    }
    catch {
        return undefined;
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
        Notes: getNotes() ?? [],// all notes 
        EditNoteOpen: { open: false, NoteId: '' },
        openTaskManager: false,
        Tasks: getTasks() ?? [],
        CurrentEditingTask: {},
        startDeletingTasks: false,
        deletedTasks: [],
        searchInputVal: '',
        usedQuery: { open: false, queryId: '' },
        openSettings: false,
        NotesViewStyle: getViewStyleAndSort()?.NotesViewStyle ?? 'Grid view',
        NoteSortMethod: getViewStyleAndSort()?.NoteSortMethod ?? 'Earliest'
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

            state.Notes.push({ id, category, title, desc, timeStamp, pin: false });
            localStorage.setItem('Notes', JSON.stringify(state.Notes))
        },
        ManageNotesPin(state, action) {
            const { NotesId, pin } = action.payload

            if (Array.isArray(NotesId)) {
                state.Notes = state.Notes.map(({ id, pin: oldPin }) => NotesId.includes(id) ? { ...state.Notes.find(note => note.id === id), pin } : { ...state.Notes.find(note => note.id === id), pin: oldPin ?? false });

            } else {
                const idx = state.Notes.findIndex(({ id }) => id === NotesId);
                state.Notes[idx] = { ...state.Notes[idx], pin };
            }
            state.deletedNotes = [];
            state.startDeletingNotes = false


            if (state.NoteSortMethod === 'Latest') state.Notes = state.Notes.sort((a, b) => {
                if (a.pin !== b.pin) return b.pin - a.pin;
                return b.timeStamp - a.timeStamp
            })
            if (state.NoteSortMethod === 'Earliest') state.Notes = state.Notes.sort((a, b) => {
                if (a.pin !== b.pin) return b.pin - a.pin;
                return a.timeStamp - b.timeStamp
            })
            if (state.NoteSortMethod === 'A-Z') state.Notes = state.Notes.sort((a, b) => {
                if (a.pin !== b.pin) return b.pin - a.pin;
                return a.title.localeCompare(b.title)
            })
            if (state.NoteSortMethod === 'Z-A') state.Notes = state.Notes.sort((a, b) => {
                if (a.pin !== b.pin) return b.pin - a.pin;
                return b.title.localeCompare(a.title)
            })
            localStorage.setItem('Notes', JSON.stringify(state.Notes));

            localStorage.setItem('Notes', JSON.stringify(state.Notes))

        },
        setActiveTab(state, action) {
            const { tab } = action.payload;
            if (!tab) return;
            state.activeTab = tab;
            state.Notes = getNotes()
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

            if (NotesIds === 'Empty Trash') { //if app is closed or user exits delete mode without deleting cateogry.
                state.Notes = [];
                localStorage.setItem('Notes', JSON.stringify(state.Notes))
                return;
            }

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
            if (!(Task ?? '').trim()) return
            const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&";
            let id;

            id = Array.from({ length: 7 }, () =>
                chars[Math.floor(Math.random() * chars.length)]
            ).join("");

            let idExists = state?.Tasks?.some((task) => task.id === id); //checking if id exists 
            // ensure unique id 
            while (idExists) {
                id = Array.from({ length: 7 }, () =>
                    chars[Math.floor(Math.random() * chars.length)]
                ).join("");
                idExists = state.Tasks.some((task) => task.id === id); //now check if it exists or not again 
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

            if (Id === 'Empty Trash') { //if app is closed or user exits delete mode without deleting cateogry.
                state.Tasks = [];
                localStorage.setItem('Tasks', JSON.stringify(state.Tasks))
                return;
            }

            if (Array.isArray(Id)) {
                state.Tasks = state.Tasks.filter(({ id }) => !Id.includes(id));  //filtering Tasks which are present in Ids

            } else {
                state.Task = state.Tasks.filter(({ id }) => id !== Id); //remove single Task which is passed id

            }
            state.deletedTasks = []; // after deleting  empty the deletedTasks array to remove the deleted Tasks from the array as now they are deleted

            //saving updated categories and notes to local storage
            localStorage.setItem('Tasks', JSON.stringify(state.Tasks))
        },
        MoveNotes(state, action) {
            const { Id, newCat } = action.payload;

            if (!Id || !newCat || newCat === 'All' || newCat === 'Uncategorized') return;

            if (Array.isArray(Id)) {
                state.Notes.forEach((note, idx) => {
                    if (Id.includes(note.id)) {
                        state.Notes[idx] = { ...state.Notes[idx], category: newCat }
                    }
                });

            }
            state.deletedNotes = []; // after deleting  empty the deletedTasks array to remove the deleted Tasks from the array as now they are deleted
            state.startDeletingNotes = false;

            //saving updated categories and notes to local storage
            localStorage.setItem('Notes', JSON.stringify(state.Notes))
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
        },
        setSearchInputVal(state, action) {
            const { inputVal } = action.payload;

            if (typeof inputVal === 'boolean' || inputVal === undefined || typeof inputval === 'object') return;
            state.searchInputVal = inputVal;

            // for Notes
            let hasSearch = (state.activeTab === 'Notes' && (state.searchInputVal ?? '').trim());
            let AllNotes;
            if (state.activeTab === 'Notes') AllNotes = getNotes()
            if (!hasSearch) state.Notes = AllNotes
            if (hasSearch) {
                state.Notes = AllNotes.filter(({ title, desc }) => title.includes(state.searchInputVal) || desc.includes(state.searchInputVal))
            }

        },
        setusedQuery(state, action) {
            const { open, queryId } = action.payload

            if (typeof open !== 'boolean') return
            state.usedQuery = { open, queryId }
        },
        setopenSettings(state, action) {
            const { open } = action.payload
            if (typeof open !== 'boolean') return
            state.openSettings = open;

        },
        changeNotesViewStyle(state, action) {
            const { style } = action.payload;
            if (style !== 'Grid view' && style !== 'List view') return;
            state.NotesViewStyle = style;

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, NotesViewStyle: state.NotesViewStyle };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },
        changeSortNotesMethod(state, action) {
            const { method } = action.payload;

            if (method !== 'A-Z' && method !== 'Z-A' && method !== 'Latest' && method !== 'Earliest') return;

            state.NoteSortMethod = method;
            if (method === 'Latest') state.Notes = state.Notes.sort((a, b) => {
                if (a.pin !== b.pin) return b.pin - a.pin;
                return b.timeStamp - a.timeStamp
            })
            if (method === 'Earliest') state.Notes = state.Notes.sort((a, b) => {
                if (a.pin !== b.pin) return b.pin - a.pin;
                return a.timeStamp - b.timeStamp
            })
            if (method === 'A-Z') state.Notes = state.Notes.sort((a, b) => {
                if (a.pin !== b.pin) return b.pin - a.pin;
                return a.title.localeCompare(b.title)
            })
            if (method === 'Z-A') state.Notes = state.Notes.sort((a, b) => {
                if (a.pin !== b.pin) return b.pin - a.pin;
                return b.title.localeCompare(a.title)
            })
            localStorage.setItem('Notes', JSON.stringify(state.Notes));

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, NoteSortMethod: state.NoteSortMethod };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },
        ResetNotesSettings(state) {
            state.activeTab = 'Notes'
            state.category = 'All'
            state.NotesViewStyle = 'Grid view'
            state.NoteSortMethod = 'Earliest'
            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, NotesViewStyle: state.NotesViewStyle, NoteSortMethod: state.NoteSortMethod };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        }
    }
})

export const {
    addNote,
    ManageNotesPin,
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
    setusedQuery,
    manageEditNote,
    manageDeletedNotes,
    removeNotes,
    ResetNotesApp,
    MoveNotes,
    addTask,
    setopenTaskManager,
    removeTask,
    changeTaskCategory,
    setCurrentEditingTask,
    deleteTasks,
    setstartDeletingTasks,
    addTaskTodeletedTasksArray,
    setSearchInputVal,
    setopenSettings,
    changeNotesViewStyle,
    changeSortNotesMethod,
    ResetNotesSettings
} = NotesSlice.actions;
export default NotesSlice.reducer;