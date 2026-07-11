import React from 'react'
import { OS_NAME, OS_VERSION, CSS_EASING } from '../../../../../constants/Settings'
import { useSelector } from 'react-redux'

const HorizonOS = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


  return (
    <div style={{
      borderColor: ThemeColors.third,
      backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }} className={`border active:scale-97  shrink-0 w-full h-60 flex flex-col items-center justify-center  rounded-2xl`}>

      <p style={{
        fontSize: `${(Sizes.ExtraLarge.slice(0, -3)) * 1.7}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className={` select-none cursor-default  font-semibold `}>{OS_NAME}
      </p>

      <span style={{
        fontSize: Sizes.Small, fontFamily: Weights.Regular, color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color, font-size',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className='select-none cursor-default '>{OS_VERSION} </span>
    </div>
  )
}

export default HorizonOS