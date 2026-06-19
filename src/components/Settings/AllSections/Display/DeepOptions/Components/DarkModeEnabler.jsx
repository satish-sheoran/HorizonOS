import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS, DARK_THEME_COLORS, LIGHT_THEME_COLORS } from '../../../../../../constants/style'
import { ArrowUpDown, ChevronRight } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import ToggleButton from '../../../../../UI/ToggleButton'
import WindowPreview from '../../../../../UI/WindowPreview'
import { setAdvanceDarkMode } from '../../../../../../redux/features/wallpaper'
import WindowControls from '../../../../../WindowControls'



const DarkModeEnabler = ({ Name, Options, Theme, ThemeColors, AccentColors, Device, fullScreen
}) => {
    const dispatch = useDispatch()
    const AdvanceDarkMode = useSelector((store) => store.wallpaper.AdvanceDarkMode)
    const UpdateAdvanceDarkMode = () => dispatch(setAdvanceDarkMode());

    return (
        <div className={`mt-2 flex flex-col gap-2`}>
            <span style={{ color: ThemeColors.primaryText }} className={`ease-out duration-500 font-bold text-[0.8rem] ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>Preview </span>
            <div style={{ backgroundColor: ThemeColors.header }} className={`flex flex-col gap-2 rounded-2xl duration-500 ease-out select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
                <div className={`flex flex-col gap-0.5 rounded-2xl ${Device !== 'Desktop' ? `px-3 py-1` : `px-2.5 py-1`} `}>
                    <span style={{ color: ThemeColors.thirdText }} className={`ease-out duration-500 text-[0.6rem]`}>
                        Enable dark mode for the system.
                    </span>
                    <span style={{ color: ThemeColors.thirdText }} className={`ease-out duration-500 text-[0.6rem]`}>
                        You  can also customize it for individual apps.
                    </span>
                </div>

                <div className={`flex justify-between items-center overflow-hidden`}>
                    <WindowPreview ThemeColors={LIGHT_THEME_COLORS} Device={Device} />

                    <span strokeWidth={2} style={{ color: ThemeColors.primaryText }} className={`ease-out duration-500 w-full rotate-90`}>
                        <ArrowUpDown />
                    </span>
                    <WindowPreview ThemeColors={DARK_THEME_COLORS} Device={Device} />
                </div>

            </div>
        </div>
    )
}

export default DarkModeEnabler