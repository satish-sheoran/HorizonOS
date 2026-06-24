import React from 'react'
import { COMMON_COLORS } from '../../../../../constants/style'
import { useSelector } from 'react-redux'
import {CSS_EASING} from '../../../../../constants/settings'

const FontName = ({ Option,fullScreen,Device,Theme,ThemeColors,AccentColors}) => {
    
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    
    return (
            <div 
            style={{
        color : ThemeColors.primaryText,
        borderColor: ThemeColors.bg,
              '--hover': ThemeColors.third,
              '--active': Theme !== 'dark' ?
                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                :
                COMMON_COLORS.Gray,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]
      }}
            className={`active:scale-97  border select-none  font-semibold rounded-2xl  flex items-center justify-between 
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
                <span>{Option}</span>
                <span style={{color : ThemeColors.grayish,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className=''>Default</span>
            </div>
        )
}

export default FontName