import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setCreateFolderPopUp } from '../../../redux/features/NotesStrorage';
import CreateFolderPopUp from './CreateFolderPopUp';

const CreateFolder = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme);
    const createFolderPopUp = useSelector((store) => store.Notes.createFolderPopUp);

    return (
        <>
            <button
                onClick={() => {
                    dispatch(setCreateFolderPopUp({ open: true }));
                }}
                className={`create-folder
                ${theme !== 'dark' ?
                        'bg-(--bg-light-window-header) text-(--primary-dark-clr) hover:bg-(--primary-light-clr) active:bg-(--primary-light-clr)'
                        : 'bg-(--primary-dark-clr) text-(--primary-light-clr) hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr)'
                    }
                `}>
                <p className='plus-icon-div'>
                    <Plus strokeWidth={3.5} size={14} />
                </p>
                <span className='select-none text-sm'>New Folder</span>
            </button>

            {createFolderPopUp === true && <CreateFolderPopUp />}
        </>
    )
}

export default CreateFolder