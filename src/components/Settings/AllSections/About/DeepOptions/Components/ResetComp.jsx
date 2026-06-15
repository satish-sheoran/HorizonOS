import { Trash } from 'lucide-react'
import React from 'react'

const ResetComp = ({ Device, Theme, fullScreen ,ThemeColors,AccentColors}) => {
    return (
        <div className={`Warning flex justify-between items-center  rounded-2xl p-[2.5%] ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}
        `}>

            <div className={`flex ${Device !=='Desktop'?'gap-2':'gap-5'} items-center`}>
                
                <span className={`text-(--color-danger)`}>
                <Trash strokeWidth={2} />
            </span>

            <div className={`flex flex-col `}>
                <span className={`${Device !='Desktop'?'text-[1rem]':'text-[1.2rem]'} ${Theme !=='dark'?'text-(--primary-dark-clr)':'text-(--primary-light-clr)'} font-semibold`}>Reset HorizonOS</span>
                <span className={`${Device !='Desktop'?'text-[0.57rem]':'text-[0.9rem]'} text-(--grayish-dark-clr)`}>Restore your device to its factory default state.</span>
            </div>
            </div>

            <button className={`ease-out duration-500 bg-(--color-danger)  active:scale-97  cursor-pointer rounded-xl text-(--primary-light-clr) font-semibold px-2 py-1.5`}>Reset Now</button>

        </div>
    )
}

export default ResetComp