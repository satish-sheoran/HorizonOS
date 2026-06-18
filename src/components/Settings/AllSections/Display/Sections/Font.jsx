import React from 'react'
import FontName from '../components/FontName'
import FontSetting from '../components/FontSetting'
import ToggleButton from '../../../../UI/ToggleButton'

const FontComponent = {
    FontName,
    FontSetting
}

const Font = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {
    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span style={{ color: ThemeColors.grayish }} className='text-sm font-bold select-none'>{Section}</span>

            <div style={{ backgroundColor: ThemeColors.header }} className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>

                {/* DISPLAYING OPTIONS UNDER FONT SECTION :  FONT,FONT SETTINGS */}
                {
                    Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
                        const Component = FontComponent[FileName];

                        if (!Component) return null;

                        if (Toggleable) {
                            return <ToggleButton
                                key={idx}
                                Theme={Theme}
                                action={Option}
                                performAction={action }
                                Device={Device}
                                isActionActive={''}
                                ThemeColors={ThemeColors}
                                AccentColors={AccentColors}
                            />
                        }
                        return <Component
                            key={idx}
                            Theme={Theme}
                            Option={Option}
                            fullScreen={fullScreen}
                            Device={Device}
                            ThemeColors={ThemeColors}
                            AccentColors={AccentColors}
                        />
                    })
                }
            </div>

        </section>)
}

export default Font