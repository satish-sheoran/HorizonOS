import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAutoTheme } from '../../../../../redux/features/wallpaper'
import ThemeSelection from '../components/ThemeSelection'
import DarkOptions from '../components/DarkOptions'
import ToggleButton from '../../../../UI/ToggleButton'
import { CSS_EASING } from '../../../../../constants/Settings'

const ThemeComponent = {
    ThemeSelection,
    DarkOptions,
    AutomaticTheme: ToggleButton
}

const Theme = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

    const dispatch = useDispatch()
    const performAction = () => dispatch(setAutoTheme())
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const isAutoTheme = useSelector((store) => store.wallpaper.isAutoTheme)
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div className={`flex flex-col w-full gap-2`}>

            <span style={{
               fontSize : Sizes.Small, fontFamily: Weights.Regular, color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className='select-none'>{Section}</span>

            {/* DISPLAYING ALL OPTIONS THEME,DARK  MODE OPTIONS AND AUTOMATIC THEME */}

            <div style={{
               borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`border p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>
                {
                    Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
                        const Component = ThemeComponent[FileName];

                        if (!Component) return null;
                        if (Toggleable) {
                            return <ToggleButton
                                key={idx}
                                Theme={Theme}
                                action={Option}
                                performAction={action === 'AutomaticTheme' ? performAction : ''}
                                Device={Device}
                                isActionActive={isAutoTheme}
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


        </div>
    )
}

export default Theme