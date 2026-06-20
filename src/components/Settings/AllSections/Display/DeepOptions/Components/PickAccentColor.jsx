import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../../../../constants/style'
import PickColor from './PickColor'
import AllColors from './AllColors'

const PickAccentColor = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {
  return (
    <div className={`flex flex-col gap-2`}>
      <div className='flex flex-col gap-0.5'>
        <span style={{ color: ThemeColors.primaryText }} className={`ease-out duration-500 text-[0.8rem] font-bold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
        <span style={{ color: ThemeColors.thirdText }} className={`ease-out duration-500 text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose an accent colour for button,highlights,and active elements.</span>
      </div>

      <div style={{ backgroundColor: ThemeColors.header }} className={`flex flex-col gap-4 rounded-2xl duration-500 ease-out select-none ${Device !== 'Desktop' ? `px-3 py-4` : `p-2.5`}`} >

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