import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style'

const DetailedToggleButton = ({ id, Device, ThemeColors, AccentColors, Logo, Title, Detail, Theme }) => {
    return (
        <div key={id}
            style={{
                borderColor: ThemeColors.bg,

                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray
            }}
            className={`HOVER_CLASS flex justify-between items-center border ease-out duration-500 active:scale-97 rounded-2xl ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>

            <div className={`flex items-end gap-2`}>
                <div style={{ backgroundColor: ThemeColors.thirdText, color: COMMON_COLORS.White }} className={`w-9 h-9 flex items-center justify-center overflow-hidden rounded-xl`}>
                    <img className={`object-cover object-center  ${id == 'settings' || id == 'clock' ? 'w-7 h-7' : 'w-9 h-9'}`} src={Logo} alt={id} />
                </div>
                <p className={`flex flex-col `}>
                    <span style={{ color: ThemeColors.primaryText }} className={`font-bold text-[0.8rem]`}>{Title}</span>
                    <span style={{ color: ThemeColors.thirdText }} className={`text-[0.55rem]`}>{Detail}</span>
                </p>
            </div>

            <button
                style={{
                    backgroundColor: ThemeColors.bg
                }}
                className={`outline-none cursor-pointer relative  w-14 h-7 p-1.5  rounded-full transition-all duration-500 ease-out`}>

                <div style={{ backgroundColor: COMMON_COLORS.White }} className={`theme-toggle-circle w-5 h-5 absolute top-1  rounded-full transition-all duration-300 ease-out
                        translate-x-0
                    `}></div>

            </button>
        </div>
    )
}

export default DetailedToggleButton

// BUTTON BG : backgroundColor: 'Ram' ? Theme !== 'dark' ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE : COMMON_COLORS.Blue : ThemeColors.bg

//  ${'Ram'? 'translate-x-6' : 'translate-x-0'  }