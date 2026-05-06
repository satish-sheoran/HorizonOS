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
import CreateTask from "../components/Notes/CreateTask";
import { setCreateTaskOpen, setOpenManageFolder, setStartDeletingCat, setStartDeletingNotes, manageEditTask } from "../redux/features/NotesStrorage";
import EditTask from "../components/Notes/EditTask";


 /* flex-1 means grow , shrink (if needed) and min-h-0 all together*/

const Notes = () => {
    const notesBody = useRef(null);
    const dispatch = useDispatch()

    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)
    const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used apply animation on this returning div
    const isNotesOpen = useSelector((store) => store.windowApps.apps['notes'].isOpen);


    // if apps closes => CLOSE  create task , edit task,folder manager,deleting notes OR deleting category
    useEffect(() => {
        if (!isNotesOpen) {
            const closeAll = () => {
                dispatch(setCreateTaskOpen({ open: false }))
                dispatch(setOpenManageFolder({ open: false }))
                dispatch(setStartDeletingCat({ start: false }))
                dispatch(setStartDeletingNotes({ start: false }))
                dispatch(manageEditTask({ open: false }))
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
            ease: 'expo.out'
        })
    }, [isOpen])

    return (
        <div className={`w-full h-full flex flex-col transition-colors duration-500 ease-out ${theme != 'dark' ?
                    'bg-(--primary-light-clr)'
                    : 'bg-(--bg-dark-app-body)'}`}>

            {currDevice === 'Desktop' ?
                <WindowControls id='notes' />
                : <MobileCntrls id='notes' />}


            {/* BODY */}
                <main className={` relative  flex-1 w-full`}>


                    {/* manage folder  which appears when openNotesFolder variable value changes to true in store  */}
                    <Folders />

                    <div ref={notesBody} className="notes-body translate-x-0">
                        <Navbar />
                        <Content />
                        <Footer />
                    </div>

                    {/*  pop up which opens create task   */}
                    <CreateTask />
                    <EditTask />
                </main>
        </div >
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;