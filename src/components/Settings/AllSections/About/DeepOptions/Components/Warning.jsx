import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { COMMON_COLORS } from '../../../../../../constants/style'

const Warning = ({ Device, Theme, fullScreen ,ThemeColors,AccentColors}) => {
    return (
        <div
            style={{ backdropFilter: 'blur(16px)',
                borderColor : COMMON_COLORS.DarkRed ,
                backgroundColor : COMMON_COLORS.LightDarkRed
            }}
            className={`Warning border  flex items-center gap-4 px-[2.5%] py-[1%] rounded-2xl backdrop-blur-lg
        `}
        >
            <div style={{ color : COMMON_COLORS.Red}} className={` h-full `}>
                <TriangleAlert size={40} strokeWidth={2} />
            </div>

            <div className={`warning-msg flex flex-col gap-1`}>
                <span style={{ color : COMMON_COLORS.Red}} className={`font-bold text-lg `}>Factory Reset</span>
                <span style={{ color : ThemeColors.secText }} className={` text-[0.5rem] lg:text-[0.7rem] `}>This will restore HorizonOS to its original state. All your personal data,apps,settings, and customizations will be permanently deleted.</span>
            </div>
        </div>
    )
}

export default Warning