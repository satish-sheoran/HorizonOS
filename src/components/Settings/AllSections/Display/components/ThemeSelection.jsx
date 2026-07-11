import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'

import { changeTheme } from '../../../../../redux/features/wallpaper'
import { THEMES } from '../../../../../constants'
import { COMMON_COLORS } from '../../../../../constants/style'

const ThemeSelection = ({ Option, fullScreen, Device, Theme: theme, ThemeColors, AccentColors }) => {

    const dispatch = useDispatch()
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div className='w-full  mb-1.5'>

            <div style={{
                transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`setting-theme-div grid grid-cols-2 md:flex  ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'max-w-100' : 'max-w-125'}`}>

                {THEMES.map(({ Theme }, idx) => {

                    return <div
                        key={idx}
                        style={{
                            color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`overflow-hidden flex flex-col p-2 gap-2.5 md:py-3 md:pl-3`}>

                        <img
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                            onDragStart={(e) => e.preventDefault()}
                            onClick={() => dispatch(changeTheme({ theme: Theme }))}
                            src={`/assets/theme-imgs/${Theme}-theme.webp`}
                            style={{
                                outlineColor: COMMON_COLORS.Blue, transitionProperty: 'color, background-color, border-color, font-size',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}
                            className={`select-none object-cover object-center rounded-xl ${theme === Theme ? 'outline-4' : ''} 
                            aspect-square  ${fullScreen ? 'md:max-w-40 max-h-40' : 'md:max-w-40 md:max-h-40'}
                            `} alt={`${Theme} theme`} />

                        <span style={{fontSize : Sizes.Small, fontFamily: Weights.Regular }} className={`mx-auto  first-letter:uppercase select-none`}>{Theme} mode</span>

                    </div>
                })}

            </div>
        </div>

    )
}

export default ThemeSelection