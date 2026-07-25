import { useDispatch, useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"
import Navbar from "../components/Notes/Navbar";
import Content from "../components/Notes/Content";
import Footer from "../components/Notes/Footer";
import Folders from "../components/Notes/Folder/Folders";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CreateNote from "../components/Notes/CreateNote";
import { setCreateNoteOpen, setOpenManageFolder, setStartDeletingCat, setStartDeletingNotes, manageEditNote, setopenTaskManager, addTaskTodeletedTasksArray, setstartDeletingTasks, setopenSettings } from "../redux/features/NotesStrorage";
import EditNote from "../components/Notes/EditNote";
import ManageTask from "../components/Notes/TaskComponents/ManageTask";
import NoteSetting from "../components/Notes/NoteSetting";


/* flex-1 means grow , shrink (if needed) and min-h-0 all together*/

const Notes = () => {
    const notesBody = useRef(null);
    const dispatch = useDispatch()

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const currDevice = useSelector((store) => store.Device.currDevice);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Notes)
    const Theme = useSelector((store) => store.wallpaper.theme.Notes)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used apply animation on this returning div
    const isNotesOpen = useSelector((store) => store.windowApps.apps['notes'].isOpen);

    // if apps closes => CLOSE  create task , edit task,folder manager,deleting notes OR deleting category
    useEffect(() => {
        if (!isNotesOpen) {
            const closeAll = () => {
                dispatch(setCreateNoteOpen({ open: false }))
                dispatch(setOpenManageFolder({ open: false }))
                dispatch(setStartDeletingCat({ start: false }))
                dispatch(setStartDeletingNotes({ start: false }))
                dispatch(setstartDeletingTasks({ start: false }))
                dispatch(manageEditNote({ open: false }))
                dispatch(setopenTaskManager({ shouldOpen: false }))
                dispatch(addTaskTodeletedTasksArray({ Taskid: 'Empty Trash' }))
                dispatch(setopenSettings({ open: false }));
            }
            closeAll();
        }
        return;
    }, [isNotesOpen, dispatch])

    // Animation for opening and closing folder manager
    useGSAP(() => {
        if (!notesBody.current) return;

        gsap.to(notesBody.current, {
            x: isOpen ? '-100%' : '0%', //isOpen refers to if the folder is open or not,
            duration: 0.5,
            ease: Animation ?? 'expo.out'
        })
    }, [isOpen])

    return (
        <div
            style={{
                backgroundColor: ThemeColors.bg,
            }}
            className={`w-full h-full flex flex-col `}>

            {currDevice === 'Desktop' || currDevice === 'Tablet' ?
                <WindowControls id='notes' Theme={Theme} ThemeColors={ThemeColors} />
                : <MobileCntrls id='notes' Theme={Theme} ThemeColors={ThemeColors} />}


            {/* BODY */}
            <main className={` relative  flex-1 w-full`}>


                {/* manage folder  which appears when openNotesFolder variable value changes to true in store  */}
                <Folders Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
                <NoteSetting Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />

                <div ref={notesBody} className="notes-body translate-x-0">
                    <Navbar Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
                    <Content Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
                    <Footer Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
                </div>

                {/*  pop up which opens create And Edit Note   */}
                <CreateNote Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
                <EditNote Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />

                {/* Tasks Add */}
                <ManageTask Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />


            </main>
        </div >
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;