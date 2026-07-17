import React from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../../../../constants/style'
import PickColor from './PickColor'
import AllColors from './AllColors'

const PickAccentColor = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  return (
    <div className={`flex flex-col gap-2`}>
      <div className='flex flex-col gap-0.5'>

        <span style={{
          fontSize : Sizes.Small ,fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, 
        }} className={` font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
        <span style={{
        fontSize : Sizes.ExtraSmall , fontFamily: Weights.Regular, color: ThemeColors.thirdText, 
        }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose an accent colour for button,highlights,and active elements.</span>

      </div>


      <div style={{
       borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, 
      }} className={`border flex flex-col gap-4 rounded-2xl  select-none ${Device !== 'Desktop' ? `px-3 py-4` : `p-2.5`}`} >

        {/* COLORS LOOP */}
        <AllColors
          Theme={Theme}
          Device={Device}
          fullScreen={fullScreen}
          ThemeColors={ThemeColors}
          AccentColors={AccentColors}
        />

        {/* pick your color */}
        <PickColor
          Theme={Theme}
          Device={Device}
          fullScreen={fullScreen}
          ThemeColors={ThemeColors}
          AccentColors={AccentColors}
        />
      </div>

    </div>
  )
}

export default PickAccentColor