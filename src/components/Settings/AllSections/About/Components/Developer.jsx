import React from 'react'
import { COMMON_COLORS } from '../../../../../constants/style';

const Developer = ({ Theme, Option, fullScreen, Device, ThemeColors, AccentColors }) => {
    
    return (
        <div
           
            style={{
                borderColor: ThemeColors.bg,
                color: ThemeColors.primaryText,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray
            }}
            className={`HOVER_CLASS active:scale-97 border rounded-2xl duration-500 ease-out select-none font-semibold flex items-center justify-between 
                                           ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
                                           `}>

            <span>{Option}</span>
            <span style={{ color: COMMON_COLORS.Blue }}>
                Satish Sheoran
            </span>

        </div>
    )
}

export default Developer