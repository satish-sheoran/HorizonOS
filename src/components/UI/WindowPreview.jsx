import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS, DARK_THEME_COLORS } from '../../constants/style'
import NormalPreviewBody from './NormalPreviewBody'
import AccentPreviewBody from './AccentPreviewBody'

const WindowPreview = ({ Theme,ThemeColors,AccentColors, Device, Preview }) => {
    return (
        <div style={{ borderColor: ThemeColors.thirdText }} className={`ease-out duration-500 ${Device !== 'Desktop' ? 'w-[45%]' : 'w-[45%]'} shrink-0 overflow-hidden rounded-2xl flex flex-col border`}>
            <div
                style={{
                    backgroundColor: ThemeColors.bg,
                    borderColor: ThemeColors.bg,

                }}
                className={`shrink-0 w-full flex items-center justify-between duration-500 ease-out  ${Device !== 'Desktop' ? `px-3 py-2` : `px-2.5 py-2.5`}`}>

                <div style={{ color: COMMON_COLORS.Black }} className="flex gap-1">

                    <button
                        style={{ backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE }}
                        className={`group window-control-btns rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-(--transition-medium)">
                            <img className="scale-70" src="/assets/icons/close.png" alt="X" />
                        </span>
                    </button>

                    <button

                        style={{ backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Lime').CODE }}
                        className={`group window-control-btns rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">
                            <img className="scale-70" src="/assets/icons/minimize.png" alt="-" />
                        </span>
                    </button>

                    <button
                        style={{ backgroundColor: COMMON_COLORS.Blue }}
                        className={`group window-control-btns rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
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
                        className={`rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">
                        </span>
                    </button>
                    <button

                        style={{ backgroundColor: DARK_THEME_COLORS.grayish }}
                        className={`rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] transition-all ease-in-out duration-(--transition-medium) flex-col-center`}>
                        <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">
                        </span>
                    </button>
                </div>
            </div>

            {/* BODY */}
            {Preview == 'ThemePreview' && <NormalPreviewBody ThemeColors={ThemeColors} Device={Device} />}
            {Preview == 'AccentPreview' && <AccentPreviewBody Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} Device={Device} />}
        </div>
    )
}

export default WindowPreview