import React from 'react'
import FontName from '../components/FontName'
import FontSetting from '../components/FontSetting'
import ToggleButton from '../../../../UI/ToggleButton'
import { CSS_EASING } from '../../../../../constants/Settings'
import { useSelector } from 'react-redux'

const FontComponent = {
    FontName,
    FontSetting
}

const Font = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span style={{
              fontSize : Sizes.Small,  fontFamily: Weights.Regular, color: ThemeColors.grayish, 
            }} className='  select-none'>{Section}</span>

            <div style={{
              borderColor: ThemeColors.third,  backgroundColor: ThemeColors.header, 
            }} className={`border w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>

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

        </section>)
}

export default Font