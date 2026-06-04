import { ChevronRight } from 'lucide-react'
import React from 'react'

const RefreshRate = ({ theme ,Device}) => {
    return (
            <div className={`duration-500 ease-out border select-none  font-semibold rounded-2xl  flex items-center justify-between
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}

             ${theme !== 'dark' ? 'text-(--primary-dark-clr) border-(--color-lightDarkish-white) hover:bg-(--third-light-clr)  active:bg-(--primary-light-clr)' : 'text-(--primary-light-clr) border-(--bg-dark-app-body) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}`}>
                <span> Refresh rate</span>
                <span className={`text-(--grayish-dark-clr)`}>
                    60 Hz 
                </span>
            </div>
        
    )
}

export default RefreshRate