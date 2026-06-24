import React from 'react'
import {CSS_EASING} from '../../../../../../constants/settings'
import { useSelector } from 'react-redux'

const AnimationPreview = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {
   const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
   const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
   
   
    return (
        <div className={`mt-2 flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{ color: ThemeColors.primaryText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} className={` text-[0.8rem] font-bold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{ color: ThemeColors.thirdText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} className={` text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Experience your chosen animation stylr and speed.</span>
            </div>

            <div style={{ backgroundColor: ThemeColors.header,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} className={`flex flex-col gap-2 rounded-2xl select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`} >
                {Name} will be added here
            </div>
        </div>
    )
}

export default AnimationPreview