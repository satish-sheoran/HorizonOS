import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { toast } from 'react-toastify';
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style';
import { CSS_EASING } from '../../constants/Settings'
import { Check } from 'lucide-react';
import { MoveNotes } from '../../redux/features/NotesStrorage';

const MoveTo = ({ openMoveToPop, setopenMoveToPop, Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const device = useSelector((store) => store.Device.currDevice);
    const MoveAbleNotes = useSelector((store) => store.Notes.deletedNotes); //notes which are selected to move
    const MoveTasks = useSelector(store => store.Notes.deletedTasks) // used to move Tasks
    const MoveToElem = useRef(null);

    const [newMoveCategory, setnewMoveCategory] = useState(activeCategory)

    useGSAP(() => {
        if (!MoveToElem.current) return;

        gsap.fromTo(MoveToElem.current, {
            scale: openMoveToPop ? 0 : 1,
        }, {
            scale: openMoveToPop ? 1 : 0,
            duration: 0.65,
            force3D: true, //to make animation a bit smooth as it deals with scales (forcw3D)
            ease: Animation ?? 'expo.out'
        })

    }, [openMoveToPop])

    return (
        <div className={`${openMoveToPop ? 'block' : 'hidden'}  absolute top-0 left-0 inset-0 flex flex-col`}>

            {/* overlay */}
            <div
                onClick={() => setopenMoveToPop(false)}
                className='relative overlay grow backdrop-blur-[0.5px] bg-[rgba(0,0,0,0.35)] flex justify-center items-end pb-5'>
                <div ref={MoveToElem}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        backgroundColor: ThemeColors?.bg,
                        borderColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.Hover_Clr
                    }}
                    className={`border ${device === 'Mobile' ? 'w-[calc(100%-30px)] px-4' : 'w-75 px-3'} h-auto  rounded-2xl py-3.5  gap-2.5  flex flex-col items-center`}>

                    <span style={{
                        fontSize: Sizes.Regular,
                        color: ThemeColors.primaryText,
                        fontFamily: Weights.SemiBold,
                    }} className={`font-semibold `}>Select Category</span>

                    <div className='flex flex-col gap-2'>
                        {categories.map((category, idx) => {
                            return <div key={idx}
                                onClick={() => setnewMoveCategory(category)}
                                style={{
                                    borderColor: newMoveCategory === category ? AccentColors.CODE : ThemeColors.third,
                                    fontFamily: newMoveCategory === category ? Weights.Bold : Weights.SemiBold,
                                    backgroundColor: newMoveCategory === category ? AccentColors.CODE : ThemeColors.header,
                                    color: newMoveCategory === category ? COMMON_COLORS.White : ThemeColors.primaryText,
                                    '--hover': ThemeColors.header,
                                    '--active': ThemeColors.header,

                                }}
                                className={`h-fit flex px-4 py-1.5 justify-between items-center border w-full rounded-2xl ${newMoveCategory === category ? 'font-bold' : 'font-semibold HOVER_CLASS'}`}>

                                <span style={{ fontSize: Sizes.Small }} className="w-fit select-none">{category?.length >= 17 ? category.slice(0, 17) + '...' : category}</span>
                                <span>
                                    <Check strokeWidth={2.5}
                                        style={{
                                            color: newMoveCategory === category ? COMMON_COLORS.Yellow : 'transparent',
                                        }}
                                        className={`select-none `} />
                                </span>
                            </div>
                        })}
                    </div>


                    <div className={`w-full flex items-center gap-2`}>

                        <button
                            onClick={() => {
                                setopenMoveToPop(false)
                                // if (WorkingOn === 'Notes') dispatch(setStartDeletingNotes({ start: false }))
                                // if (WorkingOn === 'Tasks') dispatch(setstartDeletingTasks({ start: false }))
                                // else {
                                //     dispatch(setStartDeletingCat({ start: false }))
                                // }
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
                                dispatch(MoveNotes({ newCat: newMoveCategory, Id: MoveAbleNotes }))
                                toast.info(`Moved to ${newMoveCategory}`)
                                setopenMoveToPop(false)
                            }}
                            style={{
                                fontFamily: Weights.Bold,
                                fontSize: Sizes.Small,
                                backgroundColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.CODE,
                                color: COMMON_COLORS.White,
                                '--hover': ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.Hover_Clr,
                                '--active': ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.Hover_Clr
                                ,
                            }}
                            className={`HOVER_CLASS grow ${device !== 'Desktop' ? 'py-3.5' : 'py-2.5'}   font-bold rounded-lg select-none   active:scale-96`}>Move</button>
                    </div>


                </div>
            </div>
        </div >


    )
}

export default MoveTo
