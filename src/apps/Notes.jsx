import { useSelector } from "react-redux";

import WindowControls from "../components/WindowControls";
import MobileCntrls from "../components/MobileCntrl";
import WindowWrapper from "../hoc/WindowWrapper"
import { FolderClosed, Settings } from "lucide-react";
import { toast } from "react-toastify";

const Notes = () => {
    const currDevice = useSelector((store) => store.Device.currDevice);
    const theme = useSelector((store) => store.wallpaper.theme)


    return (
        <div className="w-full h-full">

            {currDevice === 'Desktop' ? <WindowControls id='notes' /> : <MobileCntrls id='notes' />}

            {/* BODY */}
            <main className={`notes-body ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

                <nav className={`${theme !== 'dark' ? 'text-(--color-black)' : 'text-(--color-white)'}`}>

                    <div className="Name-n-options ">
                        <div className={`Notes-Name ${theme != 'dark' ? 'text-(--color-dark)' : 'text-(--color-ultra-light-gray) '}`} >Notes</div>
                        <div className="notes-setting-n-folder">
                            <button onClick={() => toast.info("This functionality will be available soon.")}>
                                <FolderClosed className="note-icons" />
                            </button>
                            <button onClick={() => toast.info("This functionality will be available soon.")}>
                                <Settings className="note-icons" />
                            </button>
                        </div>
                    </div>


                    {/* remaining */}
                    <div className="search-div"></div>
                    <div className="categories">
                        <button>All</button>
                        <button>Uncategorised</button>
                    </div>
                </nav>
                <main></main>
                <footer></footer>
            </main>
        </div >
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;