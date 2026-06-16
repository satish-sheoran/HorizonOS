import React from 'react'
import FontName from '../components/FontName'
import FontSetting from '../components/FontSetting'

const FontComponent = {
    FontName,
    FontSetting
}

const Font = ({ options, sectionName, Theme, Device, fullScreen ,ThemeColors,AccentColors}) => {
    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span style={{color : ThemeColors.grayish}} className='text-sm font-bold select-none'>{sectionName}</span>

            <div style={{backgroundColor : ThemeColors.header}} className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>

                {/* DISPLAYING OPTIONS UNDER FONT SECTION :  FONT,FONT SETTINGS */}
                {
                    options?.map(({ option, value }, idx) => {
                        const Component = FontComponent[option];

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

        </section>)
}

export default Font