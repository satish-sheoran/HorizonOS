import { ChevronRight } from 'lucide-react'
import React from 'react'
import { COMMON_COLORS } from '../../../../../constants/style'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'

const RefreshRate = ({ Option, fullScreen, Device, Theme, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed ,RefreshRate : Refreshrate} = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div
            style={{
               fontSize : Sizes.Small, fontFamily : Weights.SemiBold ,color: ThemeColors.primaryText,
                borderColor: ThemeColors.bg,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray, 
            }}
            className={`HOVER_CLASS active:scale-95  border select-none  font-semibold rounded-2xl  flex items-center justify-between ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
            `}>
            <span> {Option}</span>
            <span style={{
              fontSize : Sizes.Small, fontFamily : Weights.Regular, color: ThemeColors.grayish, 
            }}>
                {Refreshrate}
            </span>
        </div>

    )
}

export default RefreshRate