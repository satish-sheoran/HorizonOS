import React from 'react'
import { COMMON_COLORS } from '../../../../../constants/style'
import { OS_NAME } from '../../../../../constants/Settings'
import OSVersion from '../Components/OSVersion'
import Developer from '../Components/Developer'
import AboutHorizonOS from '../Components/AboutHorizonOS'
import FactoryReset from '../Components/FactoryReset'
import ToggleButton from '../../../../UI/ToggleButton'

const OSDetails_OPTIONS = {
    OSVersion,
    Developer,
    AboutHorizonOS,
    FactoryReset
}

const OsDetails = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {
    return (
        <div
            style={{ backgroundColor: ThemeColors.header }}
            className={`p-[2.5%] w-full flex flex-col rounded-2xl gap-2 overflow-hidden`}>
            {Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
                const Component = OSDetails_OPTIONS[FileName];

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

export default OsDetails