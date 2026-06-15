import { Ticket, TriangleAlert, TriangleAlertIcon } from 'lucide-react'
import React from 'react'
import * as Icons from "lucide-react";

import { SETTINGS_FACTORY_RESET_OPTIONS } from '../../../../../../constants/Settings'

const WhatToReset = ({ Device, Theme, fullScreen ,ThemeColors,AccentColors}) => {
    return (
        <div
            className={`Warning flex flex-col justify-center gap-3 rounded-2xl p-[2.5%] ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}
        `}
        >
            {/* Title : What will be reset */}
            <div className={`flex flex-col font-bold ${Theme !== 'dark' ? `text-(--primary-dark-clr)` : 'text-(--primary-light-clr)'}`}>
                <p>What will be reset?</p>
                <p className={`text-[0.6rem] text-(--grayish-dark-clr)`}>All personal data and customizations will be deleted, including :</p>
            </div>

            {/* Options ,OR select what to delete */}
            <div className={` flex flex-col rounded-2xl gap-2`}>

                {SETTINGS_FACTORY_RESET_OPTIONS?.map(({ icon, option, description }, index) => {
                    const Icon = Icons[icon]
                    return <div key={index} className={`ease-out duration-500 rounded-2xl border flex gap-3 items-center ${Theme !== 'dark' ? `border-(--color-lightDarkish-white)  hover:bg-(--third-light-clr)`
                        :
                        `border-(--bg-dark-app-body)  hover:bg-(--third-dark-clr)`}
           ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
           `}>

                        {/* ICON */}
                        <span 
                        style={{ backdropFilter: 'blur(16px)'}}
                        className='border border-(--color-dark-red) rounded-full p-1.5  text-(--color-danger) bg-(--color-dark-red-light) backdrop-blur-lg'>
                            {/* {Icon && <Icon className='shrink-0' size={20} />} */}
                            {Icon && <Icon className='shrink-0' size={25} strokeWidth={2} /> }
                        </span>

                        {/* option and description */}
                        <div className={`flex flex-col`}>

                            <span className={`${Device !== 'Desktop' ? 'text-[1rem]' : 'text-[0.89rem'} font-semibold ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--sec-light-clr)'}`}>{option}</span>

                            <span className={`text-[0.6rem] text-(--grayish-dark-clr)`}>{description}</span>

                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default WhatToReset