import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ArrowLeft, Trash2 } from 'lucide-react'

import { removeCategory, setOpenManageFolder, setStartDeletingCat } from "../../../redux/features/NotesStrorage";


const FolderNav = () => {
    const dispatch = useDispatch();

    const theme = useSelector((store) => store.wallpaper.theme);
    const startDeletingCat = useSelector((store) => store.Notes.startDeletingCat);
    const deletedCategories = useSelector((store) => store.Notes.deletedCategories); //categories which are selected to delete

    return (
        <div className={`folder-nav ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>

            {/* if start editing then show cancel button to exit editing mode else just show button to go back to tasks area */}
            {
                startDeletingCat === true ?
                    <button onClick={() => {
                        dispatch(setStartDeletingCat({ start: false }));
                    }} className='text-(--bg-ok-btn-hover) hover:text-(--bg-ok-btn) active:scale-95'>
                        <span>Cancel</span>
                    </button>
                    :
                    <button onClick={() => {
                        dispatch(setOpenManageFolder({ open: false }));
                    }} className='pr-9.5 pb-1  active:scale-95'>
                        <ArrowLeft strokeWidth={2} />
                    </button>
            }


            <span className="select-none">Folders</span>

            {/* if start editing then show delete button,else show edit button  */}
            {startDeletingCat === true ?
                <button onClick={() => {
                    if (deletedCategories.length === 0) {
                        toast.info("Select categories to delete !")
                        return;
                    } else {
                        dispatch(removeCategory({ category: deletedCategories }));
                        dispatch(setStartDeletingCat({ start: false })); // exit delete mode after deleting category/categories
                    }
                }}
                    className='active:scale-95'>
                    <Trash2 strokeWidth={2} />
                </button>
                :
                <button onClick={() => dispatch(setStartDeletingCat({ start: true }))} className='text-(--bg-ok-btn-hover) hover:text-(--bg-ok-btn) active:scale-95'>
                    <span>Edit</span>
                </button>
            }
        </div>)
}

export default FolderNav