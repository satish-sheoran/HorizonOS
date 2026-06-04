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

            <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

            <div className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 ${theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>

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