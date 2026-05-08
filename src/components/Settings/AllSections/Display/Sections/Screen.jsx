import React from 'react'
import ColourScheme from '../components/ColourScheme'
import RefreshRate from '../components/RefreshRate'

const Screen = ({ theme, fullScreen, Device }) => {
    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span className='ml-[6%] md:ml-[4%] text-(--grayish-dark-clr) text-sm font-bold select-none'>Screen</span>

            <div className='w-full flex flex-col'>

            <ColourScheme theme={theme} />
            <RefreshRate theme={theme} />
            </div>

        </section>
    )
}

export default Screen