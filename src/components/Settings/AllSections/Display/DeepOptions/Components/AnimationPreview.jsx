import React from 'react'
import { CSS_EASING } from '../../../../../../constants/Settings'
import { useSelector } from 'react-redux'
import WindowPreview from '../../../../../UI/WindowPreview'

const AnimationPreview = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div className={`mt-2 flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                  fontSize : Sizes.Small,  fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, 
                }} className={` font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{
                   fontSize : Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText, 
                }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Experience your chosen animation style and speed (2.5s is used here).</span>
            </div>

            <div style={{
              borderColor: ThemeColors.third,  backgroundColor: ThemeColors.header, 
            }} className={`border flex items-center justify-between rounded-2xl  select-none ${Device !== 'Desktop' ? `px-3 py-4` : `p-2.5`}`} >
                <WindowPreview Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} Device={Device} Preview='Animation' />

                <div style={{
                    
                }} className={`${Device !== 'Desktop' ? 'max-w-1/2' : 'max-w-[40%]'} flex flex-col gap-2`}>
                    <span style={{
                      fontSize : Sizes.Regular,  fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, 
                    }} className={`font-semibold  text-center `}>Experience Motion Your Way</span>
                    <span style={{
                       fontSize : Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText, 
                    }} className={`text-center `}>Preview how animations feel across HorizonOS.</span>
                </div>
            </div>
        </div>
    )
}

export default AnimationPreview