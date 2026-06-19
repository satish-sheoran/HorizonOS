import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS, DARK_THEME_COLORS } from '../../constants/style'

const WindowPreview = ({ ThemeColors, Device }) => {
    return (
        <div style={{ borderColor: ThemeColors.thirdText }} className={`${Device !== 'Desktop' ? 'w-[45%]' : 'w-[45%]'} shrink-0 overflow-hidden rounded-2xl flex flex-col border`}>
            <div
                style={{
                    backgroundColor: ThemeColors.bg,
                    borderColor: ThemeColors.bg,

                }}
                className={`shrink-0 w-full flex items-center justify-between duration-500 ease-out  ${Device !== 'Desktop' ? `px-3 py-2` : `px-2.5 py-2.5`}`}>

                <div style={{ color: COMMON_COLORS.Black }} className="flex gap-1">

                    <button
                        style={{ backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE }}
                        className={`rounded-full ${Device !=='Desktop'?'size-2.5':'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-(--transition-medium)">
                            <img className="scale-70" src="/assets/icons/close.png" alt="X" />
                        </span>
                    </button>

                    <button

                        style={{ backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Lime').CODE }}
                        className={`rounded-full ${Device !=='Desktop'?'size-2.5':'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">
                            <img className="scale-70" src="/assets/icons/minimize.png" alt="-" />
                        </span>
                    </button>

                    <button
                        style={{ backgroundColor: COMMON_COLORS.Blue }}
                        className={`rounded-full ${Device !=='Desktop'?'size-2.5':'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="zoom opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">

                            <svg width="14" height="14" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5 L15 5 L15 11 Z" />
                                <path d="M11 15 L5 15 L5 9 Z" />
                            </svg>

                        </span>
                    </button>
                </div>

                <div
                    className={`flex gap-1 select-none transition-all duration-150 ease-out`}>
                    <button

                        style={{ backgroundColor: DARK_THEME_COLORS.grayish }}
                        className={`rounded-full ${Device !=='Desktop'?'size-2.5':'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">
                        </span>
                    </button>
                    <button

                        style={{ backgroundColor: DARK_THEME_COLORS.grayish }}
                        className={`rounded-full ${Device !=='Desktop'?'size-2.5':'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">
                        </span>
                    </button>
                </div>
            </div>

            <div style={{ backgroundColor: ThemeColors.header, borderColor: ThemeColors.bg }} className={` w-full flex ${Device !=='Desktop'?'h-20':'h-30'}  `}>
                <div style={{ backgroundColor: ThemeColors.bg, borderColor: ThemeColors.thirdText }} className={`w-4/10 h-full flex flex-col  gap-2 items-center justify-center border-t-[0.5px]`}>

                    <div className={`flex gap-1 items-center`}>
                        <div style={{ backgroundColor: ThemeColors.thirdText }} className='rounded-full p-1'></div>
                        <div style={{ backgroundColor: ThemeColors.thirdText }} className={`rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                    </div>
                    <div className={`flex gap-1 items-center`}>
                        <div style={{ backgroundColor: ThemeColors.thirdText }} className='rounded-full p-1'></div>
                        <div style={{ backgroundColor: ThemeColors.thirdText }} className={`rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                    </div>
                    <div className={`flex gap-1 items-center`}>
                        <div style={{ backgroundColor: ThemeColors.thirdText }} className='rounded-full p-1'></div>
                        <div style={{ backgroundColor: ThemeColors.thirdText }} className={`rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                    </div>
                </div>
                <div style={{ borderColor: ThemeColors.thirdText }} className={`flex items-center pl-5 w-6/10 h-full border-t-[0.5px]`}>
                    <div className={`flex flex-col w-full gap-1.5`}>

                        <div style={{ backgroundColor: ThemeColors.bg }} className={`rounded w-4/5 ${Device !=='Desktop'?'h-2':'h-3'} `}></div>
                        <div style={{ backgroundColor: ThemeColors.bg }} className={`rounded-sm w-2/5 ${Device !=='Desktop'?'h-2':'h-2.5'}`}></div>
                        <div style={{ backgroundColor: ThemeColors.bg }} className={`rounded-md w-3/5 ${Device !=='Desktop'?'h-2':'h-3'}`}></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowPreview