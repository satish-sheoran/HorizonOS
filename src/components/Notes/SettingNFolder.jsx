import { toast } from "react-toastify";
import { FolderClosed, Settings } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenManageFolder } from "../../redux/features/NotesStrorage";


const SettingNFolder = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used because when switching/opening folders window,the icon shows still,so to fix it,it is used here


    return (
        <div className="setting-n-folders ">

            {activeTab === 'Notes' ? <button onClick={() => {
                dispatch(setOpenManageFolder({ open: true }));
            }}>
                <FolderClosed className={`note-icons transition-opacity duration-100 ${isOpen === true ? "opacity-0 pointer-events-none" : 'opacity-100'}`} />
            </button> : ''}
            <button onClick={() => toast.info("This functionality will be available soon.")}>
                <Settings className="note-icons" />
            </button>
        </div>
    )
}

export default SettingNFolder