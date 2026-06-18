import React from 'react'
import { COMMON_COLORS } from '../../../../../constants/style'

const FontName = ({ Option,fullScreen,Device,Theme,ThemeColors,AccentColors}) => {
    return (
            <div 
            style={{
        color : ThemeColors.primaryText,
        borderColor: ThemeColors.bg,
              '--hover': ThemeColors.third,
              '--active': Theme !== 'dark' ?
                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                :
                COMMON_COLORS.Gray
      }}
            className={`active:scale-97 duration-500 ease-out border select-none  font-semibold rounded-2xl  flex items-center justify-between 
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
                <span>{Option}</span>
                <span style={{color : ThemeColors.grayish}} className='text-(--grayish-dark-clr)'>Default</span>
            </div>
        )
}

export default FontName