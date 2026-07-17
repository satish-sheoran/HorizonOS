import React from 'react'
import FontFamily from './Components/FontFamily'
import FontSizes from './Components/FontSizes'

const DEEP_OPTIONS = {
  FontFamily,
  FontSizes
}

const FontsettingsDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors, DeepSubSection }) => {

  return (
    <div style={{
      
    }} className={`flex flex-col py-[2.5%] gap-2 ${Device === 'Mobile' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto px-[2.5%]'}`}>

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