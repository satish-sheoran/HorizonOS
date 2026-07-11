import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { CSS_EASING } from '../../../../../../constants/Settings'
import { useSelector } from 'react-redux'

const Warning = ({ Device, Theme, fullScreen, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    return (
        <div
            style={{
                backdropFilter: 'blur(16px)',
                borderColor: COMMON_COLORS.DarkRed,
                backgroundColor: COMMON_COLORS.LightDarkRed, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`Warning border  flex items-center gap-4 px-[2.5%] py-[1%] rounded-2xl backdrop-blur-lg
        `}
        >
            <div style={{
                color: COMMON_COLORS.Red, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={` h-full `}>
                <TriangleAlert size={40} strokeWidth={2} />
            </div>

            <div className={`warning-msg flex flex-col gap-1`}>
                <span style={{
                  fontSize : Sizes.Regular,  fontFamily: Weights.SemiBold, color: COMMON_COLORS.Red, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={`font-semibold `}>Factory Reset</span>
                <span style={{
                  fontSize : Sizes.ExtraSmall ,  fontFamily : Weights.Regular ,color: ThemeColors.secText, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} >This will restore HorizonOS to its original state. All your personal data,apps,settings, and customizations will be permanently deleted.</span>
            </div>
        </div>
    )
}

export default Warning