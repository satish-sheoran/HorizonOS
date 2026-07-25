import React, { useState } from 'react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../constants/style'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import SettingDelete from './SettingDelete';
import gsap from 'gsap';

const DataNStorage = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch();
    const Device = useSelector(store => store.Device.currDevice)
    const { Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes, SizeType } = useSelector(store => store.wallpaper.FontSize) //font sizes

    const [deletionNType, setdeletionNType] = useState({ NotesDeleteopen: false, TasksDeleteopen: false }) //used to set what to delete and should show it or not


    return (
        <div className={`flex flex-col gap-3 select-none `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                }} className={` font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>Data & Storage </span>
                <span style={{
                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
                }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
                    Manage your tasks,notes and storage usage.
                </span>
            </div>
            {/* options */}
            <div style={{ borderColor: ThemeColors.third, backgroundColor: ThemeColors.header }} className={`rounded-2xl   border flex flex-col gap-2 ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
                {
                    [
                        { Type: 'Notes', option: 'Clear All Notes', detail: 'This will clear all notes', value: 'Clear Notes' },
                        { Type: 'Tasks', option: 'Clear All Tasks', detail: 'This will clear all tasks', value: 'Clear Tasks' }
                    ].map(({ option, detail, value, Type }, idx) => {
                        return <div key={idx}
                            style={{
                                borderColor: ThemeColors.bg,
                                color: ThemeColors.primaryText,
                                '--hover': ThemeColors.third,
                                '--active': Theme !== 'dark' ?
                                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                    :
                                    COMMON_COLORS.Gray,
                            }}
                            className={`HOVER_CLASS active:scale-97 border rounded-2xl  select-none font-semibold flex items-center justify-between ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>

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
                            <p onClick={(e) => e.stopPropagation()} className='w-fit flex gap-0.5 items-center' style={{
                                fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`, fontFamily: Weights.Regular, color: ThemeColors.grayish,
                            }}>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        Type === 'Notes' ?
                                            setdeletionNType({ ...deletionNType, NotesDeleteopen: true }) :
                                            setdeletionNType({ ...deletionNType, TasksDeleteopen: true })

                                    }}
                                    style={{
                                        color: COMMON_COLORS.White,
                                        fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`,
                                        fontFamily: Weights.SemiBold,
                                        backgroundColor: !deletionNType[`${Type}Deleteopen`] ? ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.CODE : '',
                                        '--hover': !deletionNType[`${Type}Deleteopen`] ? ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.Hover_Clr : '',
                                        '--active': !deletionNType[`${Type}Deleteopen`] ? ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.Hover_Clr : ''
                                    }} className='HOVER_CLASS p-2 rounded-2xl'>

                                    {Type === 'Notes' ?
                                        !deletionNType.NotesDeleteopen ?
                                            value : <SettingDelete deletionNType={deletionNType} setdeletionNType={setdeletionNType} Type={Type} Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
                                        :
                                        !deletionNType.TasksDeleteopen ?
                                            value : <SettingDelete deletionNType={deletionNType} setdeletionNType={setdeletionNType} Type={Type} Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
                                    }

                                </button>
                            </p>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default DataNStorage