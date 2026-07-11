import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../constants/Settings'
import { COMMON_COLORS } from '../../../constants/style'

const CityCard = () => {

    const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const Wallpaper = useSelector(store => store.wallpaper.src) //font sizes
    const DeviceTheme = useSelector(store => store.wallpaper.theme.Settings)
    const Device = useSelector((store) => store.Device.currDevice);
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Theme = useSelector((store) => store.wallpaper.theme.Clock);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div
            style={{
                backgroundColor: ThemeColors.header,
                borderColor: DeviceTheme !== 'dark' ? ThemeColors.third : ThemeColors.sec,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`HOVER_CLASS flex justify-between items-center w-full ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
            {/* img and location */}
            <div className={`flex items-center gap-3`}>
                <img className={`rounded-full w-10 h-10  object-cover object-center`} src="/HorizonOS.svg" alt="" />
                <div className={`flex flex-col gap-0.5`}>
                    <span style={{
                        color: ThemeColors.primaryText, fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.95}rem`, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}
                        className={`select-none`}
                    >New York</span>
                    <span style={{
                        color: ThemeColors.thirdText, fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`, fontFamily: Weights.Regular, transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`select-none`}>USA</span>
                </div>
            </div>
            {/* Time */}
            <div className='flex flex-col gap-0.5'>
                <p style={{
                    color: ThemeColors.primaryText, fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.95}rem`, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={`select-none`}>10:30 AM</p>
                <p style={{
                    color: ThemeColors.thirdText, fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`, fontFamily: Weights.Regular, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={`select-none`}>Today , - 4:30</p>
            </div>
        </div>
    )
}

export default CityCard