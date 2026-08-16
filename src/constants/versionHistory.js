export const VERSION_HISTORY = [
    {
        version: '1.4',
        codename: 'ControlOS',
        clr: 'Blue',
        releaseDate: '2026-08-11',
        type: 'Minor',
        changes: [
            { icon: 'Settings2', iconClr: 'Blue', change: "Fully functional Developer options." },
            { icon: 'RotateCcw', iconClr: 'Orange', change: "Reset individual app data." },
            { icon: 'FlaskConical', iconClr: 'Purple', change: "Experimental features support." },
            { icon: 'SquareChevronRight', iconClr: 'Red', change: "Debug logging controls." }
        ]
    },
    {
        version: '1.3.2',
        codename: 'Chronos',
        clr: 'Orange',
        releaseDate: '2026-08-04',
        type: 'Minor',
        changes: [
            { icon: 'Clock', iconClr: 'Blue', change: "Introduced a redesigned Timer section with smooth animations." },
            { icon: 'Timer', iconClr: 'Orange', change: "Added fully functional Stopwatch with start,pause,reset and all supports." },
            { icon: 'Trash', iconClr: 'Red', change: "Implemented timer deletion with animated transitions." },
            { icon: 'Sparkles', iconClr: 'Purple', change: "Refined the clock app UI and  improve overall user experience." },
            { icon: 'Pin', iconClr: 'Green', change: "Added Notes Pin functionality." }
        ]
    },
    {
        version: '1.2',
        codename: 'NoteDown',
        clr: 'Purple',
        releaseDate: '2026-07-25',
        type: 'Major',
        changes: [
            { icon: 'SquarePen', iconClr: 'Blue', change: "Added customizable Notes settings." },
            { icon: 'FolderSync', iconClr: 'Green', change: "Move notes between cateogries." },
            { icon: 'LayoutPanelLeft', iconClr: 'Purple', change: "Grid/List layout &  many other options." },
            { icon: 'Bug', iconClr: 'Red', change: "Bug fixes and improve user experience." }
        ]
    },
    {
        version: '1.1.4',
        codename: 'Motion',
        clr: 'Blue',
        releaseDate: '2026-07-21',
        type: 'Minor',
        changes: [
            { icon: 'Search', iconClr: 'Blue', change: "Added Search Notes functionality." },
            { icon: 'Package', iconClr: 'Pink', change: "Introduced version details panel." },
            { icon: 'Clapperboard', iconClr: 'Purple', change: "Improved app launch and Notes app animations." },
            { icon: 'Zap', iconClr: 'Green', change: "Overall UI feels smoother and more responsive." }
        ]
    },
    {
        version: '1.1.0',
        codename: 'Productivity',
        clr: 'Yellow',
        releaseDate: '2026-07-18',
        type: 'Major',
        changes: [
            { icon: 'ListTodo', iconClr: 'Blue', change: "Added Tasks application." },
            { icon: 'Eye', iconClr: 'Cyan', change: "Added task showcase view." },
            { icon: 'RefreshCw', iconClr: '#6366F1', change: "Migrated UI transition to global CSS variables." },
            { icon: 'Sparkles', iconClr: 'Yellow', change: "Improved animation consistency across HorizonOS." },
            { icon: 'SquarePen', iconClr: 'Blue', change: "Implemented task creation,deletion" },
            { icon: 'Palette', iconClr: 'Pink', change: "General UI polish." },
            { icon: 'Bug', iconClr: 'Red', change: "Bug fixes and improve user experience." }
        ]
    },
    {
        version: '1.0.4',
        codename: 'Restore',
        clr: 'Orange',
        releaseDate: '2026-07-12',
        type: 'Feature',
        changes: [
            { icon: 'RotateCcw', iconClr: 'Blue', change: "Added Factory Reset." },
            { icon: 'SlidersHorizontal', iconClr: 'Gray', change: "Reset all user preferences." },
            { icon: 'Trash2', iconClr: 'Red', change: "Clear application data." },
            { icon: 'Sparkles', iconClr: 'Yellow', change: "Added reset animation." },
            { icon: 'ShieldCheck', iconClr: 'Green', change: "Improved reset reliability." }
        ]
    },
    {
        version: '1.0.3',
        codename: 'Notebook',
        clr: 'Blue',
        releaseDate: '2026-05-02',
        type: 'Feature',
        changes: [
            { icon: 'NotebookPen', iconClr: 'Blue', change: "Added Notes application." },
            { icon: 'HardDrive', iconClr: 'Green', change: "Added local storage persistence." },
            { icon: 'Wrench', iconClr: '#14B8A6', change: "Improved application state handling." },
            { icon: 'Pencil', iconClr: 'Blue', change: "Implemented create,edit and delete notes." },
            { icon: 'ShieldCheck', iconClr: 'Red', change: "Bug fixes and stability." }
        ]
    },
    {
        version: '1.0.2',
        codename: 'Calculate',
        clr: 'Green',
        releaseDate: '2026-04-22',
        type: 'Feature',
        changes: [
            { icon: 'Calculator', iconClr: 'Blue', change: "Added fully functional Calculator app." },
            { icon: 'PanelsTopLeft', iconClr: '#14B8A6', change: "Improved window interactions." },
            { icon: 'Bug', iconClr: 'Red', change: "Fixed minor UI inconsistencies." }
        ]
    },
    {
        version: '1.0.1',
        clr: 'Pink',
        codename: 'Canvas',
        releaseDate: '2026-04-15',
        type: 'Feature',
        changes: [
            { icon: 'Image', iconClr: 'Pink', change: "Added wallpaper management." },
            { icon: 'MonitorSmartphone', iconClr: 'Blue', change: "Introduced device-specific wallpapers." },
            { icon: 'HardDrive', iconClr: 'Green', change: "Implemented wallapaper persistence." },
            { icon: 'Settings', iconClr: 'Gray', change: "Improved Settings application." }
        ]
    },
    {
        version: '1.0.0',
        codename: 'Genesis',
        clr: 'Purple',
        releaseDate: '2026-04-01',
        type: 'Major',
        changes: [
            { icon: 'Rocket', iconClr: 'Purple', change: "Initial HorizonOS release." },
            { icon: 'Monitor', iconClr: 'Blue', change: "Introduced desktop-style home screen." },
            { icon: 'PanelsTopLeft', iconClr: '#14B8A6', change: "Implemented window management system." },
            { icon: 'Smartphone', iconClr: 'Cyan', change: "Added responsive layout for mobile and desktop." },
            { icon: 'Signal', iconClr: 'Gray', change: "Created status bar with system indicators." },
            { icon: 'AppWindow', iconClr: 'Blue', change: "Added application launcher and dock." },
        ]
    }
]


// new version changes :
// [
//             { icon: 'Globe2', iconClr: 'Blue', change: "View time across multiple time zones." },
//             { icon: 'Timer', iconClr: 'Purple', change: "Countdown Timer : PLay, Pause, and Track timers with synchronized countdown and automatic completion." },
// ]