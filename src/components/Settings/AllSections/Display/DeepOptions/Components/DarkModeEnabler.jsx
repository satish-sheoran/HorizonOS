import React, { useState } from 'react'
import { ACCENT_COLORS, COMMON_COLORS, DARK_THEME_COLORS, LIGHT_THEME_COLORS } from '../../../../../../constants/style'
import { ArrowRightLeft, ChevronRight } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import ToggleButton from '../../../../../UI/ToggleButton'
import WindowPreview from '../../../../../UI/WindowPreview'
import { setAdvanceDarkMode } from '../../../../../../redux/features/wallpaper'
import WindowControls from '../../../../../WindowControls'
import { CSS_EASING } from '../../../../../../constants/settings'


const DarkModeEnabler = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen
}) => {
    const dispatch = useDispatch()
    const [SwitchPreviewer, setSwitchPreviewer] = useState(false)
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    const AdvanceDarkMode = useSelector((store) => store.wallpaper.AdvanceDarkMode)
    const UpdateAdvanceDarkMode = () => dispatch(setAdvanceDarkMode());

    return (
        <div className={`mt-2 flex flex-col gap-2`}>
            <span style={{
                color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={` font-bold text-[0.8rem] ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>Preview </span>

            <div style={{
                backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`flex flex-col gap-2 rounded-2xl  select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
                <div style={{
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={`flex flex-col gap-0.5 rounded-2xl ${Device !== 'Desktop' ? `px-3 py-1` : `px-2.5 py-1`} `}>
                    <span style={{
                        color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` text-[0.6rem]`}>
                        Enable dark mode for the system.
                    </span>
                    <span style={{
                        color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` text-[0.6rem]`}>
                        You  can also customize it for individual apps.
                    </span>
                </div>
                <div className={`flex justify-between gap-1 items-center overflow-hidden`}>
                    <WindowPreview Theme={Theme} ThemeColors={!SwitchPreviewer ? LIGHT_THEME_COLORS : DARK_THEME_COLORS} AccentColors={AccentColors} Device={Device} Preview='ThemePreview' />

                    <div onClick={() => setSwitchPreviewer(old => !old)}
                        strokeWidth={2}
                        style={{
                            color: COMMON_COLORS.White, backgroundColor: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }} className={`Display-theme-preview  animation-shrink-grow   p-1 rounded-2xl ${SwitchPreviewer ? 'rotate-0' : 'rotate-180'}`}>
                        <ArrowRightLeft style={{
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }} size={Device != 'Desktop' ? 15 : 24} />
                    </div>
                    <WindowPreview Theme={Theme} ThemeColors={!SwitchPreviewer ? DARK_THEME_COLORS : LIGHT_THEME_COLORS} AccentColors={AccentColors} Device={Device} Preview='ThemePreview' />
                </div>

            </div>
        </div>
    )
}

export default DarkModeEnabler