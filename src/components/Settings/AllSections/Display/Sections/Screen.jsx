import React from 'react'
import ColourScheme from '../components/ColourScheme'
import RefreshRate from '../components/RefreshRate'

const ScreenComponent = {
    ColourScheme,
    RefreshRate
}

const Screen = ({ options, sectionName, Theme, fullScreen, Device,ThemeColors,AccentColors }) => {
    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span style={{color : ThemeColors.grayish}} className='text-sm font-bold select-none'>{sectionName}</span>

            <div style={{backgroundColor : ThemeColors.header}} className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>
                {/* DISPLAYING OPTIONS UNDER Screen SECTION :  Colour Scheme,Refresh Rate */}
                {
                    options?.map(({ option, value }, idx) => {
                        const Component = ScreenComponent[option];

                        if (!Component) return null;

                        return <Component
                            key={idx}
                            Theme={Theme}
                            value={value}
                            fullScreen={fullScreen}
                            Device={Device}
                            ThemeColors={ThemeColors} AccentColors={AccentColors}
                        />
                    })
                }

            </div>

        </section>
    )
}

export default Screen