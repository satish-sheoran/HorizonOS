import { toast } from "react-toastify";
import { FolderClosed, Settings } from "lucide-react";
import { useSelector } from "react-redux";


const SettingNFolder = () => {
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    return (
        <div className="setting-n-folders ">

            {activeTab === 'Notes' ? <button onClick={() => toast.info("This functionality will be available soon.")}>
                <FolderClosed className="note-icons transition-all duration-150 ease-in-out" />
            </button> : ''}
            <button onClick={() => toast.info("This functionality will be available soon.")}>
                <Settings className="note-icons" />
            </button>
        </div>
    )
}

export default SettingNFolder