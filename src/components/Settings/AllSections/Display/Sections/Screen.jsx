import React from 'react'
import ColourScheme from '../components/ColourScheme'
import RefreshRate from '../components/RefreshRate'
import Animation from '../components/Animation'
import ToggleButton from '../../../../UI/ToggleButton'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'

const ScreenComponent = {
    ColourScheme,
    RefreshRate,
    Animation
}

const Screen = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <section className={`w-full flex flex-col gap-2`}>

            <span style={{
                fontSize: Sizes.Small, fontFamily: Weights.Regular, color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className='select-none'>{Section}</span>

            <div style={{
            borderColor: ThemeColors.third ,   backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`border w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>
                {/* DISPLAYING OPTIONS UNDER Screen SECTION :  Colour Scheme,Refresh Rate */}
                {
                    Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
                        const Component = ScreenComponent[FileName];

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

        </section>
    )
}

export default Screen