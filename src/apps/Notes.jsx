import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"
import Navbar from "../components/Notes/Navbar";
import AllNotes from "../components/Notes/AllNotes";
import Footer from "../components/Notes/Footer";

const Notes = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <div className="w-full h-full flex flex-col">

            {currDevice === 'Desktop' ? <WindowControls id='notes' /> : <MobileCntrls id='notes' />}

            {/* BODY */}
            <main className={`notes-body ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>
                <Navbar />
                <AllNotes />
                <Footer />
            </main>
        </div >
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;