import React from 'react'
import { OS_NAME, CSS_EASING } from '../../../../../constants/Settings'
import { useSelector } from 'react-redux'
import { VERSION_HISTORY } from '../../../../../constants/versionHistory'

const HorizonOS = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


  return (
    <div style={{
      borderColor: ThemeColors.third,
      backgroundColor: ThemeColors.header, 
    }} className={`border active:scale-97  shrink-0 w-full h-60 flex flex-col items-center justify-center  rounded-2xl`}>

      <p style={{
        fontSize: `${(Sizes.ExtraLarge.slice(0, -3)) * 1.7}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, 
      }} className={` select-none cursor-default  font-semibold `}>{OS_NAME}
      </p>

      <span style={{
        fontSize: Sizes.Small, fontFamily: Weights.Regular, color: ThemeColors.grayish, 
      }} className='select-none cursor-default '>{`${VERSION_HISTORY[0]?.version} HRZN ${VERSION_HISTORY[0]?.codename}`} </span>
    </div>
  )
}

export default HorizonOS