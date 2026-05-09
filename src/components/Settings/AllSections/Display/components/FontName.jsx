import React from 'react'

const FontName = ({ theme ,value,fullScreen,Device}) => {
    return (
        <div            
            className={`px-[3%] md:px-[2%] select-none font-semibold`}>

            <div className={`rounded-xl px-2 py-4 md:py-3 flex items-center justify-between ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--third-light-clr) active:bg-(--third-light-clr)' : 'text-(--primary-light-clr) hover:bg-(--color-gray) active:bg-(--color-gray)'}`}>
                <span>{value}</span>
                <span className='text-(--grayish-dark-clr)'>Default</span>
            </div>
        </div>)
}

export default FontName