import { toast } from "react-toastify";
import { FolderClosed, Settings } from "lucide-react";


const SettingNFolder = () => {

    return (
        <div className="setting-n-folders ">
                <button onClick={() => toast.info("This functionality will be available soon.")}>
                    <FolderClosed className="note-icons" />
                </button>
                <button onClick={() => toast.info("This functionality will be available soon.")}>
                    <Settings className="note-icons" />
                </button>
        </div>
    )
}

export default SettingNFolder