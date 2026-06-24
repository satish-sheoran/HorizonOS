import { Trash } from 'lucide-react'
import React from 'react'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { CSS_EASING } from '../../../../../../constants/Settings'
import { useSelector} from 'react-redux'


const ResetComp = ({ Device, Theme, fullScreen ,ThemeColors,AccentColors}) => {
    const {Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
        const {Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    return (
        <div style={{ backgroundColor : ThemeColors.header,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`Warning flex justify-between items-center  rounded-2xl p-[2.5%]`}>

            <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`flex ${Device !=='Desktop'?'gap-2':'gap-5'} items-center`}>
                
                <span style={{color : COMMON_COLORS.Red,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}}>
                <Trash strokeWidth={2} />
            </span>

            <div className={`flex flex-col `}>
                <span style={{color : ThemeColors.primaryText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`${Device !='Desktop'?'text-[1rem]':'text-[1.2rem]'} font-semibold`}>Reset HorizonOS</span>
                <span style={{color : ThemeColors.grayish,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} className={`${Device !='Desktop'?'text-[0.57rem]':'text-[0.9rem]'}`}>Restore your device to its factory default state.</span>
            </div>
            </div>

            <button style={{backgroundColor : COMMON_COLORS.Red, color : COMMON_COLORS.White,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} className={` active:scale-97  cursor-pointer rounded-xl font-semibold px-2 py-1.5`}>Reset Now</button>

        </div>
    )
}

export default ResetComp