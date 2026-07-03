import React from 'react'
import { CSS_EASING } from '../../../../../../constants/Settings'
import { useSelector } from 'react-redux'
import WindowPreview from '../../../../../UI/WindowPreview'

const AnimationPreview = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div className={`mt-2 flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={` text-[0.8rem] font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{
                    fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={` text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Experience your chosen animation style and speed (2.5s is used here).</span>
            </div>

            <div style={{
                backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`flex items-center justify-between rounded-2xl  select-none ${Device !== 'Desktop' ? `px-3 py-4` : `p-2.5`}`} >
                <WindowPreview Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} Device={Device} Preview='Animation' />

                <div style={{
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={`${Device !== 'Desktop' ? 'max-w-1/2' : 'max-w-[40%]'} flex flex-col gap-2`}>
                    <span style={{
                        fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`font-semibold text-[1.05rem] text-center `}>Experience Motion Your Way</span>
                    <span style={{
                        fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`text-center text-[0.65rem]`}>Preview how animations feel across HorizonOS.</span>
                </div>
            </div>
        </div>
    )
}

export default AnimationPreview