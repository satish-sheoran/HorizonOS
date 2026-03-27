import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ArrowLeft, Trash2 } from 'lucide-react'

import { setOpenManageFolder } from "../../../redux/features/NotesStrorage";
const FolderNav = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <div className={`folder-nav ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>

            <button onClick={() => {
                dispatch(setOpenManageFolder({ open: false }));
            }} className='active:scale-95'>
                <ArrowLeft strokeWidth={2} />
            </button>
            <span className="select-none">Folders</span>
            <button onClick={() => toast.info("This functionality will be available soon.")} className='active:scale-95'>
                <Trash2 strokeWidth={2} />
            </button>
        </div>)
}

export default FolderNav