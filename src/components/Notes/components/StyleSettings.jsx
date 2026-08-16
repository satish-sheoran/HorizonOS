import React from 'react'
import { changeNotesViewStyle, changeSortNotesMethod } from '../../../redux/features/NotesStrorage';
import { useDispatch, useSelector } from 'react-redux';
import { NOTES_SETTING_OPTIONS } from '../../../constants/Notes';
import { COMMON_COLORS } from '../../../constants/style';
import { AddToAdvanceDarkMode, RemoveFromAdvanceDarkMode, setFontSize } from '../../../redux/features/wallpaper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StyleSettings = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch();
    const Device = useSelector(store => store.Device.currDevice)
    const { Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes, SizeType } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { NotesViewStyle, NoteSortMethod } = useSelector(store => store.Notes)

    return (
        <div className={`flex flex-col gap-3 select-none `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                }} className={` font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>Styles </span>
                <span style={{
                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
                }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
                    Change the visuals style of your notes tasks.
                </span>
            </div>
            {/* options */}
            <div style={{ borderColor: ThemeColors.third, backgroundColor: ThemeColors.header }} className={`rounded-2xl   border flex flex-col gap-2 ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
                {
                    NOTES_SETTING_OPTIONS?.map(({ option, detail, values }, idx) => {
                        return <div key={idx}
                            style={{
                                borderColor: ThemeColors.bg,
                                '--hover': ThemeColors.third,
                                '--active': Theme !== 'dark' ?
                                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                    :
                                    COMMON_COLORS.Gray,
                            }}
                            className={`HOVER_CLASS active:scale-95 border rounded-2xl  select-none font-semibold flex items-center justify-between ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>

                            <p className={`w-fit flex flex-col gap-0.5 font-semibold`}>
                                <span style={{
                                    color: ThemeColors.primaryText,
                                    fontSize: Sizes.Small,
                                    fontFamily: Weights.SemiBold
                                }}>{option}</span>
                                <span style={{
                                    fontSize: Sizes.ExtraSmall,
                                    fontFamily: Weights.Regular,
                                    color: ThemeColors.thirdText
                                }}>{detail} </span>

                            </p>
                            <p className='w-fit flex gap-0.5 items-center' style={{
                                fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`, fontFamily: Weights.Regular, color: ThemeColors.grayish,
                            }}>
                                <button onClick={(e) => {
                                    let val;
                                    let idx = values.findIndex(val => val === e.target.closest('p').children[1].textContent);
                                    if (idx - 1 < 0) val = values[values.length - 1];
                                    else if (idx - 1 === 0) val = values[0]
                                    else {
                                        val = values[idx - 1];
                                    }
                                    if (option === 'Font Size') {
                                        dispatch(setFontSize({ Size: val }))
                                        return;
                                    }
                                    else if (option === 'Layout') {
                                        dispatch(changeNotesViewStyle({ style: val }))
                                        return;
                                    }
                                    else if (option === 'Sort') {
                                        dispatch(changeSortNotesMethod({ method: val }))
                                        return;
                                    }
                                    else if (option === 'Theme') {
                                        Theme == 'light' ? dispatch(AddToAdvanceDarkMode({ App: 'Notes' })) :
                                            dispatch(RemoveFromAdvanceDarkMode({ App: 'Notes' }))
                                        return;
                                    }
                                }} className='rounded-full p-1'><ChevronLeft style={{ color: ThemeColors.primaryText }} size={Device !== 'Desktop' ? 20 : 15} strokeWidth={3} /></button>

                                <span
                                    onClick={(e) => {
                                        let val;
                                        let idx = values.findIndex(val => val === e.target.closest('p').children[1].textContent);
                                        if (idx === -1) return;
                                        if (idx + 1 >= values.length) val = values[0];
                                        else {
                                            val = values[idx + 1];
                                        }
                                        if (option === 'Font Size') {
                                            dispatch(setFontSize({ Size: val }))
                                            return;
                                        }
                                        else if (option === 'Layout') {
                                            dispatch(changeNotesViewStyle({ style: val }))
                                            return;
                                        }
                                        else if (option === 'Sort') {
                                            dispatch(changeSortNotesMethod({ method: val }))
                                            return;
                                        }
                                        else if (option === 'Theme') {
                                            Theme == 'light' ? dispatch(AddToAdvanceDarkMode({ App: 'Notes' })) :
                                                dispatch(RemoveFromAdvanceDarkMode({ App: 'Notes' }))
                                            return;
                                        }

                                    }}>{
                                        option === 'Font Size' ? SizeType
                                            : option === 'Layout' ? NotesViewStyle
                                                : option === 'Sort' ? NoteSortMethod : Theme
                                    }
                                </span>

                                <button onClick={(e) => {
                                    let val;
                                    let idx = values.findIndex(val => val === e.target.closest('p').children[1].textContent);
                                    if (idx === -1) return;
                                    if (idx + 1 >= values.length) val = values[0];
                                    else {
                                        val = values[idx + 1];
                                    }
                                    if (option === 'Font Size') {
                                        dispatch(setFontSize({ Size: val }))
                                        return;
                                    }
                                    else if (option === 'Layout') {
                                        dispatch(changeNotesViewStyle({ style: val }))
                                        return;
                                    }
                                    else if (option === 'Sort') {
                                        dispatch(changeSortNotesMethod({ method: val }))
                                        return;
                                    }
                                    else if (option === 'Theme') {
                                        Theme == 'light' ? dispatch(AddToAdvanceDarkMode({ App: 'Notes' })) :
                                            dispatch(RemoveFromAdvanceDarkMode({ App: 'Notes' }))
                                        return;
                                    }

                                }} className='rounded-full p-1'><ChevronRight style={{ color: ThemeColors.primaryText }} size={Device !== 'Desktop' ? 20 : 15} strokeWidth={3} /></button>
                            </p>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default StyleSettings