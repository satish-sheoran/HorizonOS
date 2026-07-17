import React from 'react'
import { COMMON_COLORS } from '../../../../../constants/style'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'

const FontName = ({ Option, fullScreen, Device, Theme, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div
            style={{
              fontSize : Sizes.Small,  fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                borderColor: ThemeColors.bg,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray, 
            }}
            className={`active:scale-97  border select-none  font-semibold rounded-2xl  flex items-center justify-between 
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
            <span>{Option}</span>
            <span style={{
                fontSize : Sizes.Small ,fonFamily: Weights.Regular, color: ThemeColors.grayish, 
            }} >{FontName}</span>
        </div>
    )
}

export default FontName