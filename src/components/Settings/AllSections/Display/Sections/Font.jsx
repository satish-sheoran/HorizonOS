import React from 'react'
import FontName from '../components/FontName'
import FontSetting from '../components/FontSetting'

const FontComponent = {
    FontName,
    FontSetting
}

const Font = ({ options, sectionName, theme, Device, fullScreen }) => {
    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span className='ml-[6%] md:ml-[4%] text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

            <div className='w-full flex flex-col'>

                {/* DISPLAYING OPTIONS UNDER FONT SECTION :  FONT,FONT SETTINGS */}
                {
                    options?.map(({ option, value }, idx) => {
                        const Component = FontComponent[option];

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

        </section>)
}

export default Font