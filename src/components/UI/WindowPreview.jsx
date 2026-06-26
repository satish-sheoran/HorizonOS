import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS, DARK_THEME_COLORS } from '../../constants/style'
import { CSS_EASING } from '../../constants/Settings'
import NormalPreviewBody from './NormalPreviewBody'
import AnimPreviewBody from './AnimPreviewBody'
import AccentPreviewBody from './AccentPreviewBody'
import { useSelector } from 'react-redux'

const WindowPreview = ({ Theme, ThemeColors, AccentColors, Device, Preview}) => {

    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div style={{
            borderColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`h-fit ${Device !== 'Desktop' ? `w-[45%]`: `w-[45%]`} shrink-0 overflow-hidden rounded-2xl flex flex-col border`}>
            <div
                style={{
                    backgroundColor: ThemeColors.bg,
                    borderColor: ThemeColors.bg,
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}
                className={`shrink-0 w-full flex items-center justify-between   ${Device !== 'Desktop' ? `px-3 py-2` : `px-2.5 py-2.5`}`}>

                <div style={{
                    color: COMMON_COLORS.Black, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className="flex gap-1">

                    <button
                        style={{
                            backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`group window-control-btns rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05] flex-col-center`}>
                        <span style={{
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }} className="opacity-0 group-hover:opacity-100 ">
                            <img className="scale-70" src="/assets/icons/close.png" alt="X" />
                        </span>
                    </button>

                    <button

                        style={{
                            backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Lime').CODE, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`group window-control-btns rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05]  flex-col-center`}>
                        <span style={{
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }} className="opacity-0  group-hover:opacity-100 ">
                            <img className="scale-70" src="/assets/icons/minimize.png" alt="-" />
                        </span>
                    </button>

                    <button
                        style={{
                            backgroundColor: COMMON_COLORS.Blue, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`group window-control-btns rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05]  flex-col-center`}>
                        <span style={{
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }} className="zoom opacity-0  group-hover:opacity-100 ">

                            <svg width="14" height="14" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5 L15 5 L15 11 Z" />
                                <path d="M11 15 L5 15 L5 9 Z" />
                            </svg>

                        </span>
                    </button>
                </div>

                <div
                    className={`flex gap-1 select-none`}>
                    <button

                        style={{
                            backgroundColor: DARK_THEME_COLORS.grayish, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05]  flex-col-center`}>
                        <span style={{
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }} className="opacity-0 group-hover:opacity-100 ">
                        </span>
                    </button>
                    <button

                        style={{
                            backgroundColor: DARK_THEME_COLORS.grayish, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`rounded-full ${Device !== 'Desktop' ? 'size-2.5' : 'size-3.5'}  hover:scale-[1.15] active:scale-[1.05]  flex-col-center`}>
                        <span style={{
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }} className="opacity-0  group-hover:opacity-100 ">
                        </span>
                    </button>
                </div>
            </div>

            {/* BODY */}
            {Preview == 'ThemePreview' && <NormalPreviewBody ThemeColors={ThemeColors} Device={Device} />}
            {Preview == 'AccentPreview' && <AccentPreviewBody Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} Device={Device} />}
            {Preview == 'Animation' && <AnimPreviewBody Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} Device={Device} />}
        </div>
    )
}

export default WindowPreview