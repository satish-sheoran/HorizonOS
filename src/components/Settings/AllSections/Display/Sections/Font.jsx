import React from 'react'
import FontName from '../components/FontName'
import FontSetting from '../components/FontSetting'

const Font = ({ theme, Device, fullScreen }) => {
    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span className='ml-[6%] md:ml-[4%] text-(--grayish-dark-clr) text-sm font-bold select-none'>Font</span>

            <div className='w-full flex flex-col'>
                <FontName  theme={theme} />
                <FontSetting theme={theme}  />
                
            </div>

        </section>)
}

export default Font