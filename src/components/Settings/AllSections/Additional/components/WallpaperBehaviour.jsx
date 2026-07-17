import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setActivePanel } from '../../../../../redux/features/SettingsSlice'
import { COMMON_COLORS } from '../../../../../constants/style'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'

const WallpaperBehaviour = ({ Option, fullScreen, Device, Theme, ThemeColors, AccentColors }) => {

    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div
            onClick={() => {
                dispatch(setActivePanel({ panel: Option }))
            }
            }
            style={{
              fontSize : Sizes.Small,  fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                borderColor: ThemeColors.bg,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray, 
            }}
            className={`HOVER_CLASS active:scale-97  border select-none  font-semibold rounded-2xl  flex items-center justify-between $
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
            <span>{Option}</span>
            <ChevronRight />
        </div>
    )
}

export default WallpaperBehaviour