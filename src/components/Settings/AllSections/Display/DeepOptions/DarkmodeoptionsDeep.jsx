import React from 'react'
import DarkModeEnabler from './Components/DarkModeEnabler'
import SepDarkModeForApps from './Components/SepDarkModeForApps'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'

const DEEP_OPTIONS = {
  DarkModeEnabler,
  SepDarkModeForApps
}

const DarkmodeoptionsDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors, DeepSubSection }) => {
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  return (
    <section style={{
      borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }} className={`deep-darkmode-option flex flex-col py-[2.5%] gap-2 select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto   px-[2.5%]'}`}>

      {
        DeepSubSection?.map(({ Section: DeepSubName, FileName }) => {
          const Component = DEEP_OPTIONS[FileName];

          if (!Component) return null;

          return <Component
            key={DeepSubName}
            Name={DeepSubName}
            Theme={Theme}
            ThemeColors={ThemeColors}
            AccentColors={AccentColors}
            Device={Device}
            fullScreen={fullScreen}
          />
        })
      }

    </section>
  )
}


export default DarkmodeoptionsDeep