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
import { setCreateTaskOpen } from "../redux/features/NotesStrorage";
import EditTask from "../components/Notes/EditTask";

const Notes = () => {
    const notesBody = useRef(null);
    const dispatch = useDispatch()

    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)
    const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used apply animation on this returning div
    const isCreateTaskOpen = useSelector(store => store.Notes.CreateTaskOpen) // it is here to check if create task  pop up is open
    const isNotesOpen = useSelector((store) => store.windowApps.apps['notes'].isOpen);

    // if apps closes then close the create task pop up if it is open
    useEffect(() => {
        if (!isNotesOpen) {
            const closeCreateTask = () => {
                dispatch(setCreateTaskOpen({ open: false }))
            }
            closeCreateTask();
        }
        return;
    }, [isNotesOpen, dispatch])


    useGSAP(() => {
        if (!notesBody.current) return;

        gsap.to(notesBody.current, {
            x: isOpen ? '-100%' : '0%', //isOpen refers to if the folder is open or not,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [isOpen])

    return (
        <div className=" w-full h-full flex flex-col">

            {currDevice === 'Desktop' ? <WindowControls id='notes' /> : <MobileCntrls id='notes' />}

            {/* BODY  , flex-1 means grow ,  
            shrink (if needed)
            and min-h-0 all together*/}
            <main className={` relative  flex-1 w-full ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>


                {/* manage folder  which appears when openNotesFolder variable value changes in store . if it is close then return these all  */}
                <Folders />

                <div ref={notesBody} className="notes-body translate-x-0">
                    <Navbar />
                    <Content />
                    <Footer />
                </div>

                {/*  pop up which opens create task   */}
                {/* {isCreateTaskOpen === true && <CreateTask />} */}
                <CreateTask />
                <EditTask />
            </main>
        </div >
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;