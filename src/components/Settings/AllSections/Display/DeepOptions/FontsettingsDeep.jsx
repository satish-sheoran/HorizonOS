import React from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'
import FontFamily from './Components/FontFamily'

const DEEP_OPTIONS = {
  FontFamily
}

const FontsettingsDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors, DeepSubSection }) => {
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  return (
    <div style={{
      transitionProperty: 'color, background-color, border-color',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }} className={`flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 px-[2.5%]'}`}>


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
    </div>
  )
}

export default FontsettingsDeep