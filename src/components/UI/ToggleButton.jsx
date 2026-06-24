import { ChevronRight } from 'lucide-react'
import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style'
import {CSS_EASING} from '../../constants/Settings'
import { useSelector } from 'react-redux'

const ToggleButton = ({ Device, Theme, action, performAction, isActionActive, ThemeColors, AccentColors }) => {

    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div
            onClick={performAction}
            style={{
                color: ThemeColors.primaryText,
                borderColor: ThemeColors.bg,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray
,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]
            }}
            className={`HOVER_CLASS active:scale-97 border  select-none font-semibold  rounded-2xl flex items-center justify-between 
                ${Device !== 'Desktop' ? `px-3 py-2.5` : `px-2.5 py-2`}
                `}>

            <span>{action}</span>
            <button
                style={{
                    backgroundColor: isActionActive ? Theme !== 'dark' ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE : COMMON_COLORS.Blue
                        :
                        ThemeColors.bg,
                        transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]
                }}
                className={`outline-none cursor-pointer relative  w-14 h-7 p-1.5  rounded-full `}>

                <div style={{backgroundColor : COMMON_COLORS.White,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`theme-toggle-circle w-5 h-5 absolute top-1  rounded-full 
                    ${isActionActive
                        ? 'translate-x-6'
                        : 'translate-x-0'
                    }`}></div>

            </button>
        </div>


    )
}

export default ToggleButton