import React from 'react'

const FontName = ({ theme ,value,fullScreen,Device}) => {
    return (
            <div className={`duration-500 ease-out border select-none  font-semibold rounded-2xl  flex items-center justify-between 
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}

             ${theme !== 'dark' ? 'text-(--primary-dark-clr) border-(--color-lightDarkish-white) hover:bg-(--third-light-clr)  active:bg-(--primary-light-clr)' : 'text-(--primary-light-clr) border-(--bg-dark-app-body) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}`}>
                <span>{value}</span>
                <span className='text-(--grayish-dark-clr)'>Default</span>
            </div>
        )
}

export default FontName