import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"
import Navbar from "../components/Notes/Navbar";
import Content from "../components/Notes/Content";
import Footer from "../components/Notes/Footer";
import Folders from "../components/Notes/Folders";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Notes = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)
    const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used apply animation on this returning div
    const notesBody = useRef(null);

    useGSAP(() => {
        if (!notesBody.current) return;

        gsap.to(notesBody.current, {
            x: isOpen ? '-100%' : '0%', //isOpen refers to if the folder is open or not
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [isOpen])

    return (
        <div className="w-full h-full flex flex-col">

            {currDevice === 'Desktop' ? <WindowControls id='notes' /> : <MobileCntrls id='notes' />}

            {/* BODY */}
            <main className={`relative grow w-full ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>


                {/* manage folder  which appears when openNotesFolder variable value changes in store . if it is close then return these all  */}
                <Folders />

                <div ref={notesBody} className="notes-body relative translate-x-0">
                    <Navbar />
                    <Content />
                    <Footer />
                </div>


            </main>
        </div >
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;