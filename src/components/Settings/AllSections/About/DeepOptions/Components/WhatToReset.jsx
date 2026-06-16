import { Ticket, TriangleAlert, TriangleAlertIcon } from 'lucide-react'
import React from 'react'
import * as Icons from "lucide-react";

import { SETTINGS_FACTORY_RESET_OPTIONS } from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style';

const WhatToReset = ({ Device, Theme, fullScreen, ThemeColors, AccentColors }) => {
    return (
        <div
            style={{ backgroundColor: ThemeColors.header }}
            className={`Warning flex flex-col justify-center gap-3 rounded-2xl p-[2.5%]`}
        >
            {/* Title : What will be reset */}
            <div
                style={{ color: ThemeColors.primaryText }}
                className={`flex flex-col font-bold`}>
                <p>What will be reset?</p>
                <p style={{ color: ThemeColors.grayish }} className={`text-[0.6rem] `}>All personal data and customizations will be deleted, including :</p>
            </div>

            {/* Options ,OR select what to delete */}
            <div className={` flex flex-col rounded-2xl gap-2`}>

                {SETTINGS_FACTORY_RESET_OPTIONS?.map(({ icon, option, description }, index) => {
                    const Icon = Icons[icon]
                    return <div
                        style={{
                            borderColor: ThemeColors.bg,
                            '--hover': ThemeColors.third
                        }}
                        key={index} className={`HOVER_CLASS ease-out duration-500 rounded-2xl border flex gap-3 items-center ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
           `}>

                        {/* ICON */}
                        <span
                            style={{
                                backdropFilter: 'blur(16px)',
                                color: COMMON_COLORS.Red,
                                backgroundColor: COMMON_COLORS.LightDarkRed,
                                borderColor : COMMON_COLORS.DarkRed
                            }}
                            className='border  rounded-full p-1.5  backdrop-blur-lg'>
                            {/* {Icon && <Icon className='shrink-0' size={20} />} */}
                            {Icon && <Icon className='shrink-0' size={25} strokeWidth={2} />}
                        </span>

                        {/* option and description */}
                        <div className={`flex flex-col`}>

                            <span  
                            style={{color : ThemeColors.secText}}
                            className={`${Device !== 'Desktop' ? 'text-[1rem]' : 'text-[0.89rem'} font-semibold `}>{option}</span>

                            <span style={{color : ThemeColors.grayish}} className={`text-[0.6rem]`}>{description}</span>

                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default WhatToReset