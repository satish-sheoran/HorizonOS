import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import CreateFolderPopUp from './CreateFolderPopUp';
import { useEffect, useState } from 'react';

const CreateFolder = () => {
    const dispatch = useDispatch()
    const theme = useSelector((store) => store.wallpaper.theme);
    const [opencreateFolderPopUp, setOpencreateFolderPopUp] = useState(false)
    const isNotesOpen = useSelector((store) => store.windowApps.apps['notes'].isOpen);

    // if apps closes then close the create folder pop up if it is open
    useEffect(() => {
        if (!isNotesOpen) {
            const closeCreateTask = () => {
                setOpencreateFolderPopUp(false);
            }
            closeCreateTask();
        }
        return;
    }, [isNotesOpen, dispatch])

    return (
        <>
            <button
                onClick={() => setOpencreateFolderPopUp(true)}
                className={`duration-500 ease-out create-folder
                ${theme !== 'dark' ?
                        'bg-(--third-light-clr) text-(--primary-dark-clr) hover:bg-(--primary-light-clr) active:bg-(--primary-light-clr)'
                        : 'bg-(--third-dark-clr) text-(--primary-light-clr) hover:bg-(--grayish-dark-clr) active:bg-(--sec-dark-clr)'
                    }
                `}>
                <p className='plus-icon-div'>
                    <Plus strokeWidth={3.5} size={14} />
                </p>
                <span className='select-none font-semibold text-sm'>New Folder</span>
            </button>

            {opencreateFolderPopUp === true && <CreateFolderPopUp opencreateFolderPopUp={opencreateFolderPopUp} setOpencreateFolderPopUp={setOpencreateFolderPopUp} />}
        </>
    )
}

export default CreateFolder