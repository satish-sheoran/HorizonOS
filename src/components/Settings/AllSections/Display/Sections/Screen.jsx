import React from 'react'
import ColourScheme from '../components/ColourScheme'
import RefreshRate from '../components/RefreshRate'

const ScreenComponent = {
    ColourScheme,
    RefreshRate
}

const Screen = ({ options, sectionName, theme, fullScreen, Device }) => {
    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

            <div className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 ${theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
                {/* DISPLAYING OPTIONS UNDER Screen SECTION :  Colour Scheme,Refresh Rate */}
                {
                    options?.map(({ option, value }, idx) => {
                        const Component = ScreenComponent[option];

                        if (!Component) return null;

                        return <Component
                            key={idx}
                            theme={theme}
                            value={value}
                            fullScreen={fullScreen}
                            Device={Device}
                        />
                    })
                }

            </div>

        </section>
    )
}

export default Screen