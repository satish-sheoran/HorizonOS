import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { removeCategory, removeNotes, setStartDeletingCat, setStartDeletingNotes } from '../../../redux/features/NotesStrorage';
import { toast } from 'react-toastify';
import {  COMMON_COLORS } from '../../../constants/style';
import { CSS_EASING } from '../../../constants/Settings'

const ConfirmDeletePopUp = ({ openDeletePopUp, setOpenDeletePopUp, WorkingOn, Theme, AccentColors, ThemeColors }) => {
    
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const DeletPopElem = useRef(null);
    const dispatch = useDispatch();
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const device = useSelector((store) => store.Device.currDevice);

    const deletedCategories = useSelector((store) => store.Notes.deletedCategories); //categories which are selected to delete
    const deletedNotes = useSelector((store) => store.Notes.deletedNotes); //notes which are selected to delete


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
                className='overlay grow backdrop-blur-[0.5px] bg-[rgba(0,0,0,0.35)]'></div>


            <div ref={DeletPopElem}
                style={{
                    backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                    borderColor : COMMON_COLORS.Red,
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}
                className={`border ${device === 'Mobile' ? 'w-[calc(100%-30px)] px-4' : 'w-75 px-3'} h-auto absolute rounded-2xl py-3.5  gap-2.5 bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center`}>

                <span style={{
                    fontSize : Sizes.Regular ,
                    color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    fontFamily : Weights.SemiBold,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={`font-semibold `}>Delete folder</span>

                <span style={{
                    fontSize : Sizes.Small,
                    color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                    fontFamily : Weights.Regular,
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}>Delete {WorkingOn === 'Notes' ? deletedNotes.length : deletedCategories.length} items ?</span>

                <div className={`w-full flex items-center gap-2`}>

                    <button
                        onClick={() => setOpenDeletePopUp(false)}
                        style={{
                            color: COMMON_COLORS.White,fontSize : Sizes.Small,
                            fontFamily : Weights.Bold,
                            backgroundColor: Theme !== 'dark' ? COMMON_COLORS.LightWhite : ThemeColors.grayish,
                            '--hover': Theme !== 'dark' ? COMMON_COLORS.grayishDark : COMMON_COLORS.LightWhite,
                            '--active': Theme !== 'dark' ? COMMON_COLORS.grayishDark : COMMON_COLORS.LightWhite,
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
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

                            dispatch(removeCategory({ category: deletedCategories }));
                            dispatch(setStartDeletingCat({ start: false })); // exit delete mode after deleting category/categories
                            toast.info('Categories Deleted Successfully')

                            setOpenDeletePopUp(false); //after delete close the pop up
                        }}
                        style={{
                            fontFamily : Weights.Bold,
                            fontSize : Sizes.Small,
                            backgroundColor: COMMON_COLORS.Red,
                            color: COMMON_COLORS.White,
                            '--hover': COMMON_COLORS.LightRed,
                            '--active': COMMON_COLORS.LightRed
                            , transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`HOVER_CLASS grow ${device !== 'Desktop' ? 'py-3.5' : 'py-2.5'}   font-bold rounded-lg select-none   active:scale-96`}>DELETE</button>
                </div>


            </div>
        </div >


    )
}

export default ConfirmDeletePopUp
