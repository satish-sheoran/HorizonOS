import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { deleteTasks, removeCategory, removeNotes, ResetNotesSettings, setStartDeletingCat, setStartDeletingNotes, setstartDeletingTasks } from '../../../redux/features/NotesStrorage';
import { toast } from 'react-toastify';
import { ACCENT_COLORS, COMMON_COLORS } from '../../../constants/style';
import { CSS_EASING } from '../../../constants/Settings'
import { RemoveFromAdvanceDarkMode, setFontSize } from '../../../redux/features/wallpaper';

const ConfirmDeletePopUp = ({ openDeletePopUp, setOpenDeletePopUp, WorkingOn, Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const DeletPopElem = useRef(null);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const device = useSelector((store) => store.Device.currDevice);

    const deletedCategories = useSelector((store) => store.Notes.deletedCategories); //categories which are selected to delete
    const deletedNotes = useSelector((store) => store.Notes.deletedNotes); //notes which are selected to delete
    const deletedTasks = useSelector(store => store.Notes.deletedTasks) // used to delete Tasks

    useGSAP(() => {
        if (!DeletPopElem.current) return;

        gsap.fromTo(DeletPopElem.current, {
            scale: openDeletePopUp ? 0 : 1,
        }, {
            scale: openDeletePopUp ? 1 : 0,
            duration: 0.65,
            force3D: true, //to make animation a bit smooth as it deals with scales (forcw3D)
            ease: Animation ?? 'expo.out'
        })

    }, [openDeletePopUp])

    return (
        <div className={`${openDeletePopUp ? 'block' : 'hidden'}  delete-folder-parent absolute top-0 left-0 inset-0 flex flex-col`}>

            {/* overlay */}
            <div
                onClick={() => setOpenDeletePopUp(false)}
                className='relative overlay grow backdrop-blur-[0.5px] bg-[rgba(0,0,0,0.35)] flex justify-center items-end pb-5'>


                <div ref={DeletPopElem}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        backgroundColor: ThemeColors.bg,
                        borderColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Red')?.CODE
                    }}
                    className={`border ${device === 'Mobile' ? 'w-[calc(100%-30px)] px-4' : 'w-75 px-3'} h-auto  rounded-2xl py-3.5  gap-2  flex flex-col items-center`}>

                    <span style={{
                        fontSize: `${((Sizes.Regular.slice(0, -3))) * 1.05}rem`,
                        color: ThemeColors.primaryText,
                        fontFamily: Weights.SemiBold,
                    }} className={`font-semibold `}>{WorkingOn === 'Reset Note Settings' ? 'Restore Default Settings' :
                        `Delete ${WorkingOn === 'Notes' ? 'Notes' : WorkingOn === 'Tasks' ? 'Tasks' : 'folder'}`
                        }</span>

                    <span style={{
                        fontSize: Sizes.Small,
                        color: ThemeColors.thirdText
                    }}>{WorkingOn === 'Reset Note Settings' ? "Your notes and tasks wont'be affected." :
                        `Delete ${WorkingOn === 'Notes' ? deletedNotes?.length : WorkingOn === 'Tasks' ? deletedTasks.length : deletedCategories?.length} items ?`
                        }</span>

                    <div className={`w-full flex items-center gap-2`}>

                        <button
                            onClick={() => {
                                setOpenDeletePopUp(false)
                                if (WorkingOn === 'Notes') dispatch(setStartDeletingNotes({ start: false }))
                                if (WorkingOn === 'Tasks') dispatch(setstartDeletingTasks({ start: false }))
                                else {
                                    dispatch(setStartDeletingCat({ start: false }))
                                }
                            }}
                            style={{
                                color: COMMON_COLORS.White, fontSize: Sizes.Small,
                                fontFamily: Weights.Bold,
                                backgroundColor: Theme !== 'dark' ? COMMON_COLORS.LightWhite : ThemeColors.grayish,
                                '--hover': Theme !== 'dark' ? COMMON_COLORS.grayishDark : COMMON_COLORS.LightWhite,
                                '--active': Theme !== 'dark' ? COMMON_COLORS.grayishDark : COMMON_COLORS.LightWhite,

                            }}
                            className={`${device !== 'Desktop' ? 'py-3.5' : 'py-2.5'} HOVER_CLASS w-[calc(50%-2px)]   font-bold select-none  active:scale-96 rounded-lg 
                         `}>Cancel</button>

                        <button
                            onClick={() => {
                                if (WorkingOn === 'Notes') {
                                    // Handle note deletion logic here
                                    dispatch(removeNotes({ NotesIds: deletedNotes }))
                                    dispatch(setStartDeletingNotes({ start: false }))
                                    setOpenDeletePopUp(false); //after delete close the pop up

                                    toast.info('Notes Deleted Successfully')

                                    return;
                                }
                                if (WorkingOn === 'Tasks') {
                                    // Handle note deletion logic here
                                    dispatch(deleteTasks({ Id: deletedTasks }))
                                    dispatch(setstartDeletingTasks({ start: false }))
                                    setOpenDeletePopUp(false); //after delete close the pop up

                                    toast.info('Tasks Deleted Successfully')
                                    return;
                                }
                                if (WorkingOn === 'Reset Note Settings') {
                                    dispatch(ResetNotesSettings())
                                    dispatch(setFontSize({Size : 'Default'}))
                                    dispatch(RemoveFromAdvanceDarkMode({ App: 'Notes' }))
                                    toast.info('Settings are Restored.')
                                    setOpenDeletePopUp(false); //after delete close the pop up
                                    return;
                                }

                                dispatch(removeCategory({ category: deletedCategories }));
                                dispatch(setStartDeletingCat({ start: false })); // exit delete mode after deleting category/categories
                                toast.info('Categories Deleted Successfully')

                                setOpenDeletePopUp(false); //after delete close the pop up
                            }}
                            style={{
                                fontFamily: Weights.Bold,
                                fontSize: Sizes.Small,
                                backgroundColor: COMMON_COLORS.Red,
                                color: COMMON_COLORS.White,
                                '--hover': COMMON_COLORS.LightRed,
                                '--active': COMMON_COLORS.LightRed
                                ,
                            }}
                            className={`HOVER_CLASS grow ${device !== 'Desktop' ? 'py-3.5' : 'py-2.5'}   font-bold rounded-lg select-none   active:scale-96`}>{
                                WorkingOn === 'Reset Note Settings' ? 'Restore' : 'DELETE'
                            }
                        </button>
                    </div>


                </div>
            </div>
        </div >


    )
}

export default ConfirmDeletePopUp
