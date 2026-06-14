import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ArrowLeft, Trash2 } from 'lucide-react'
import { useEffect, useState } from "react";

import { manageDeletedCategories, setOpenManageFolder, setStartDeletingCat } from "../../../redux/features/NotesStrorage";
import ConfirmDeletePopUp from './ConfirmDeletePopUp'


const FolderNav = () => {
    const dispatch = useDispatch();
    const [openDeletePopUp, setOpenDeletePopUp] = useState(false);

    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)

    const startDeletingCat = useSelector((store) => store.Notes.startDeletingCat);
    const deletedCategories = useSelector((store) => store.Notes.deletedCategories); //categories which are selected to delete
    const isNotesOpen = useSelector((store) => store.windowApps.apps['notes'].isOpen);

    // if apps closes then close the edit mode to delete categories if it is open, also clears the deleteCategories and close the delete pop up if open 
    useEffect(() => {
        if (!isNotesOpen) {
            const closePopUp = () => {
                setOpenDeletePopUp(false);
                dispatch(manageDeletedCategories({ category: 'Empty Trash' })) // empty the deletedCategories in notes storage when notes app is closed to remove the select icons from categories when user open the notes app again
            }
            closePopUp();
        }
        return;
    }, [isNotesOpen, dispatch])


    return (
        <div style={{ color: ThemeColors.primaryText }} className={`duration-500 ease-out folder-nav `}>

            {/* if start editing then show cancel button to exit editing mode else just show button to go back to tasks area */}
            {
                startDeletingCat === true ?
                    <button onClick={() => {
                        dispatch(setStartDeletingCat({ start: false }));
                        dispatch(manageDeletedCategories({ category: 'Empty Trash' })) // empty the deletedCategories in notes storage when user exit from deleting mode to remove the select icons from categories
                    }}
                        style={{
                            color: AccentColors.CODE,
                        }}
                        className={`active:scale-95`}>
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
                        setOpenDeletePopUp(true);
                    }
                }}
                    style={{
                        color: AccentColors.CODE,
                    }}
                    className='active:scale-95'>
                    <Trash2 strokeWidth={2} />
                </button>
                :
                <button onClick={() => dispatch(setStartDeletingCat({ start: true }))}
                    style={{
                        color: AccentColors.CODE,
                    }}
                    className='active:scale-95'>
                    <span>Edit</span>
                </button>
            }

            {/* delete pop up  */}
            {openDeletePopUp === true && <ConfirmDeletePopUp openDeletePopUp={openDeletePopUp} setOpenDeletePopUp={setOpenDeletePopUp} WorkingOn='Categories' />}

        </div>)
}

export default FolderNav