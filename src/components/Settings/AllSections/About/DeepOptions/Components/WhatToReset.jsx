import { Ticket, TriangleAlert, TriangleAlertIcon } from 'lucide-react'
import React from 'react'
import * as Icons from "lucide-react";
import { useSelector } from 'react-redux'

import { SETTINGS_FACTORY_RESET_OPTIONS, CSS_EASING } from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style';

const WhatToReset = ({ Device, Theme, fullScreen, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div
            style={{
              borderColor: ThemeColors.third,  backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`border Warning flex flex-col justify-center gap-3 rounded-2xl p-[2.5%]`}
        >
            {/* Title : What will be reset */}
            <div
                style={{
                  fontSize : Sizes.Regular,  fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}
                className={`flex flex-col font-semibold`}>
                <p>What will be reset?</p>
                <p style={{
                   fontSize : Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}>All personal data and customizations will be deleted, including :</p>
            </div>

            {/* Options ,OR select what to delete */}
            <div className={` flex flex-col rounded-2xl gap-2`}>

                {SETTINGS_FACTORY_RESET_OPTIONS?.map(({ icon, option, description }, index) => {
                    const Icon = Icons[icon]
                    return <div
                        style={{
                            borderColor: ThemeColors.bg,
                            '--hover': ThemeColors.third, transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        key={index} className={`HOVER_CLASS  rounded-2xl border flex gap-3 items-center ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
           `}>

                        {/* ICON */}
                        <span
                            style={{
                                backdropFilter: 'blur(16px)',
                                color: COMMON_COLORS.Red,
                                backgroundColor: COMMON_COLORS.LightDarkRed,
                                borderColor: COMMON_COLORS.DarkRed, transitionProperty: 'color, background-color, border-color, font-size',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}
                            className='border  rounded-full p-1.5  backdrop-blur-lg'>
                            {/* {Icon && <Icon className='shrink-0' size={20} />} */}
                            {Icon && <Icon className='shrink-0' size={25} strokeWidth={2} />}
                        </span>

                        {/* option and description */}
                        <div className={`flex flex-col`}>

                            <span
                                style={{
                                   fontSize : Sizes.Small, fontFamily : Weights.SemiBold ,color: ThemeColors.secText, transitionProperty: 'color, background-color, border-color, font-size',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }}
                                className={`font-semibold `}>{option}</span>

                            <span style={{
                               fontSize : Sizes.ExtraSmall, fontFamily :Weights.Regular ,color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color, font-size',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}>{description}</span>

                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default WhatToReset