import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import CreateFolderPopUp from './CreateFolderPopUp';
import { useEffect, useState } from 'react';
import { COMMON_COLORS } from '../../../constants/style';
import { CSS_EASING } from '../../../constants/Settings'

const CreateFolder = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch()
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
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
                    '--hover': Theme !== 'dark' ? COMMON_COLORS.White : ThemeColors.grayish,
                    '--active': Theme !== 'dark' ? COMMON_COLORS.White : ThemeColors.grayish,
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}
                className={`HOVER_CLASS create-folder`}>
                <p className='plus-icon-div'>
                    <Plus strokeWidth={3.5} size={14} />
                </p>
                <span style={{fontFamily : Weights.SemibBold,fontSize : Sizes.Small}} className='select-none font-semibold '>New Folder</span>
            </button>

            {opencreateFolderPopUp === true && <CreateFolderPopUp opencreateFolderPopUp={opencreateFolderPopUp} setOpencreateFolderPopUp={setOpencreateFolderPopUp} Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />}
        </>
    )
}

export default CreateFolder