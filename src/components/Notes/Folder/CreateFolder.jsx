import { Plus } from 'lucide-react'
import { useSelector } from 'react-redux'
import CreateFolderPopUp from './CreateFolderPopUp';
import { useState } from 'react';

const CreateFolder = () => {
    const theme = useSelector((store) => store.wallpaper.theme);
    const [opencreateFolderPopUp, setOpencreateFolderPopUp] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpencreateFolderPopUp(true)}
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

            {opencreateFolderPopUp === true && <CreateFolderPopUp opencreateFolderPopUp={opencreateFolderPopUp} setOpencreateFolderPopUp={setOpencreateFolderPopUp} />}
        </>
    )
}

export default CreateFolder