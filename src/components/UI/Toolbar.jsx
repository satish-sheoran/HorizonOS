import { ArrowLeft } from 'lucide-react'
import React from 'react'
import {CSS_EASING} from '../../constants/Settings'
import { useSelector } from 'react-redux'

const Toolbar = ({ performAction, Theme,ThemeColors,AccentColors }) => {
    
const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <section style={{color : ThemeColors.primaryText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={` w-full px-[2.5%] py-(--padding-sm) flex items-center justify-between `}>

            <span style={{color : ThemeColors.primaryText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`active:scale-97`} onClick={performAction}>
                <ArrowLeft size={27} strokeWidth={2} className={`w-full h-full`} />
            </span>

        </section>
    )
}

export default Toolbar