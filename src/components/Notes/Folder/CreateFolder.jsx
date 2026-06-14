import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import CreateFolderPopUp from './CreateFolderPopUp';
import { useEffect, useState } from 'react';
import { COMMON_COLORS } from '../../../constants/style';

const CreateFolder = () => {
    const dispatch = useDispatch()
    const theme = useSelector((store) => store.wallpaper.theme);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)

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
                style={{
                    color: ThemeColors.primaryText,
                    background: ThemeColors.third,
                    '--hover':theme !=='dark'?COMMON_COLORS.White:ThemeColors.grayish,
                    '--active':theme !=='dark'?COMMON_COLORS.White:ThemeColors.grayish

                }}
                className={`HOVER_CLASS duration-500 ease-out create-folder`}>
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