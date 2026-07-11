import React from 'react'
import { COMMON_COLORS } from '../../../../../constants/style'
import { CSS_EASING } from '../../../../../constants/Settings'
import ToggleButton from '../../../../UI/ToggleButton'
import OSName from '../Components/OSName'
import Storage from '../Components/Storage'
import { useSelector } from 'react-redux'

const NameNStorage_OPTIONS = {
    OSName,
    Storage,
}

const NameNStorage = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {
   
   
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    
    
    return (
        <div style={{
            borderColor: ThemeColors.third,
            backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`border p-[2.5%] w-full rounded-2xl flex flex-col  gap-2 overflow-hidden`}>
            {Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
                const Component = NameNStorage_OPTIONS[FileName];

                if (!Component) return null;
                if (Toggleable) {
                    return <ToggleButton
                        key={idx}
                        Theme={Theme}
                        action={Option}
                        performAction={action}
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
    )
}

export default NameNStorage