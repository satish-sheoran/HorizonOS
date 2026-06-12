import { TriangleAlert } from 'lucide-react'
import React from 'react'

const Warning = ({ Device, theme, fullScreen }) => {
    return (
        <div
            style={{ backdropFilter: 'blur(16px)'}}
            className={`Warning border border-(--color-dark-red) flex items-center gap-4 px-[2.5%] py-[1%] rounded-2xl bg-(--color-dark-red-light) backdrop-blur-lg
        `}
        >
            <div className={` h-full text-(--color-danger) `}>
                <TriangleAlert size={40} strokeWidth={2} />
            </div>

            <div className={`warning-msg flex flex-col gap-1`}>
                <span className={`font-bold text-lg text-(--color-danger)`}>Factory Reset</span>
                <span className={` text-[0.5rem] lg:text-[0.7rem] ${theme !=='dark'?'text-(--grayish-dark-clr)':'text-(--primary-light-clr)'}`}>This will restore HorizonOS to its original state. All your personal data,apps,settings, and customizations will be permanently deleted.</span>
            </div>
        </div>
    )
}

export default Warning