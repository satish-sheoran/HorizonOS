import { Trash } from 'lucide-react'
import React from 'react'
import { COMMON_COLORS } from '../../../../../../constants/style'

const ResetComp = ({ Device, Theme, fullScreen ,ThemeColors,AccentColors}) => {
    return (
        <div style={{ backgroundColor : ThemeColors.header}} className={`Warning flex justify-between items-center  rounded-2xl p-[2.5%]`}>

            <div className={`flex ${Device !=='Desktop'?'gap-2':'gap-5'} items-center`}>
                
                <span style={{color : COMMON_COLORS.Red}}>
                <Trash strokeWidth={2} />
            </span>

            <div className={`flex flex-col `}>
                <span style={{color : ThemeColors.primaryText}} className={`${Device !='Desktop'?'text-[1rem]':'text-[1.2rem]'} font-semibold`}>Reset HorizonOS</span>
                <span style={{color : ThemeColors.grayish }} className={`${Device !='Desktop'?'text-[0.57rem]':'text-[0.9rem]'}`}>Restore your device to its factory default state.</span>
            </div>
            </div>

            <button style={{backgroundColor : COMMON_COLORS.Red, color : COMMON_COLORS.White }} className={`ease-out duration-500 active:scale-97  cursor-pointer rounded-xl font-semibold px-2 py-1.5`}>Reset Now</button>

        </div>
    )
}

export default ResetComp