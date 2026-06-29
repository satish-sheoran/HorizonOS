import React from 'react'
import { OS_NAME, OS_VERSION, CSS_EASING } from '../../../../../constants/Settings'
import { useSelector } from 'react-redux'

const HorizonOS = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


  return (
    <div style={{
      backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }} className={`active:scale-97  shrink-0 w-full ${Device !== 'Desktop' ? 'h-60' : 'h-60'} flex flex-col items-center justify-center gap-2 rounded-2xl`}>

      <span style={{
       fontFamily : Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className={` select-none cursor-default text-4xl md:text-4xl lg:text-5xl font-semibold `}>{OS_NAME}
      </span>

      <span style={{
      fontFamily : Weights.Regular , color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className='select-none cursor-default '>{OS_VERSION} </span>
    </div>
  )
}

export default HorizonOS