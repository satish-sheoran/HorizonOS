import React from 'react'
import { useSelector } from 'react-redux'
import {CSS_EASING} from '../../constants/Settings'

const Timer = ({ClockAllTabsHeight,ClockAllTabsWidth}) => {

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
    <section 
    style={{ 
      paddingBottom: `${Math.floor(ClockAllTabsHeight)}px`,
      transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
     }} 
      className={`border w-full h-full grow px-[2.5%] pt-[2.5%] overflow-y-auto overflow-x-hidden flex flex-col gap-2`}>
Timer
    </section>
  )
}

export default Timer