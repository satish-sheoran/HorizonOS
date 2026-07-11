import React from 'react'
import WindowPreview from '../../../../../UI/WindowPreview'
import { CSS_EASING } from '../../../../../../constants/Settings'
import { useSelector } from 'react-redux'

const AccentColorPreview = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


  return (
    <div className={`mt-2 flex flex-col gap-2`}>
      <span style={{
       fontSize : Sizes.Small, fontFamily : Weights.SemiBold ,color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className={`font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>

      <div style={{
       borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className={`border flex items-center justify-between rounded-2xl  select-none ${Device !== 'Desktop' ? `px-3 py-4` : `p-2.5`}`} >

        <WindowPreview Theme={Theme} ThemeColors={ThemeColors} Device={Device} AccentColors={AccentColors} Preview='AccentPreview' />

        <div style={{
          transitionProperty: 'color, background-color, border-color, font-size',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={`${Device !== 'Desktop' ? 'max-w-1/2' : 'max-w-[40%]'} flex flex-col gap-2`}>
          <span style={{
           fontSize:Sizes.Regular, fontFamily : Weights.SemiBold ,color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
          }} className={`font-semibold  text-center `}>Personalize Your Experience</span>
          <span style={{
           fontSize : Sizes.ExtraSmall, fontFamily : Weights.Regular ,color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color, font-size',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
          }} className={`text-center `}>Choose a color that reflects your style and preview changes here.</span>
        </div>

      </div>
    </div>
  )
}

export default AccentColorPreview