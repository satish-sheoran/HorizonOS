import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
// Title refers to App name
const DetailedToggleButton = ({ isActionActive, performAction, Device, ThemeColors, AccentColors, Logo, Title, Detail, Theme }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div
            onClick={performAction}
            style={{
                borderColor: ThemeColors.bg,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray,
                
            }}
            className={`HOVER_CLASS flex justify-between items-center border  active:scale-97 rounded-2xl ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>

            <div className={`flex items-end gap-2`}>
                <div style={{
                    backgroundColor: ThemeColors.thirdText, color: COMMON_COLORS.White, 
                }} className={` w-9 h-9 flex items-center justify-center overflow-hidden rounded-xl`}>
                    <img style={{
                        
                    }} className={` object-cover object-center  ${Title == 'Settings' || Title == 'Clock' ? 'w-7 h-7' : 'w-9 h-9'}`} src={Logo} alt={Title} />
                </div>
                <p className={`flex flex-col `}>
                    <span style={{
                        fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, 
                    }} className={` font-semibold`}>{Title}</span>
                    <span style={{
                        fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText, 
                    }} >{Detail}</span>
                </p>
            </div>

            <button
                style={{
                    backgroundColor: isActionActive ? Theme !== 'dark' ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE : COMMON_COLORS.Blue : ThemeColors.bg, 
                }}
                className={`outline-none cursor-pointer relative  w-14 h-7 p-1.5  rounded-full `}>

                <div style={{
                    backgroundColor: COMMON_COLORS.White,
                    transition: `transform ${Speed} ${CSS_EASING[Animation]}`,
                    transform: `${isActionActive ? 'translateX(1.5rem)' : 'translateX(0)'}`
                }} className={`theme-toggle-circle w-5 h-5 absolute top-1  rounded-full `}></div>

            </button>
        </div>
    )
}

export default DetailedToggleButton
