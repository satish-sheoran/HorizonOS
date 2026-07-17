import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import { PROJECT_DETAILS, CSS_EASING } from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { useSelector } from 'react-redux'

const Details = ({ Device, Theme, fullScreen, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div
            style={{
               borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, 
            }}
            className={`border about flex flex-col gap-4 p-[2.5%]  rounded-2xl `}>

            <div
                style={{
                    color: ThemeColors.primaryText, 
                }}
                className={`flex gap-2  text-lg `}>
                <Monitor style={{
                    color: AccentColors.CODE, 
                }} strokeWidth={2.5} />
                <span style={{fontSize : Sizes.Regular ,fontFamily : Weights.SemiBold}} className='font-semibold'>About HorizonOS</span>
            </div>
            <div style={{
                color: ThemeColors.secText, 
            }} className={`font-[450] text-sm flex flex-col gap-4`}>
                <>
                    {PROJECT_DETAILS?.[Device]?.map((para, index) => {
                        return <span key={index} style={{fontSize : Sizes.Small ,fontFamily : Weights.Regular}}>{para}</span>
                    })}
                </>
            </div>
        </div>)
}

export default Details