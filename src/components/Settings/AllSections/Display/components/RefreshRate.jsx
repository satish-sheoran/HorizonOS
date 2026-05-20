import { ChevronRight } from 'lucide-react'
import React from 'react'

const RefreshRate = ({ theme }) => {
    return (
        <div
            className={`select-none   font-semibold `}>

            <div className={`rounded-xl px-2 py-4 md:py-3 flex items-center justify-between ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--third-light-clr) active:bg-(--third-light-clr)' : 'text-(--primary-light-clr) hover:bg-(--color-gray) active:bg-(--color-gray)'}`}>
                <span> Refresh rate</span>
                <span className={`text-(--grayish-dark-clr)`}>
                    60 Hz 
                </span>
            </div>
        </div>
    )
}

export default RefreshRate