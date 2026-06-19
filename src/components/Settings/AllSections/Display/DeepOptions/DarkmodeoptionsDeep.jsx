import React from 'react'
import DarkModeEnabler from './Components/DarkModeEnabler'
import SepDarkModeForApps from './Components/SepDarkModeForApps'

const DEEP_OPTIONS = {
  DarkModeEnabler,
  SepDarkModeForApps
}

const DarkmodeoptionsDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors, DeepSubSection }) => {
  return (
    <section style={{
            borderColor: ThemeColors.third
        }} className={`flex flex-col py-[2.5%] gap-2 select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto   px-[2.5%]'}`}>

      {
        DeepSubSection?.map(({ Section: DeepSubName, FileName, Options: DeepSubSecOptions }) => {
          const Component = DEEP_OPTIONS[FileName];

          if (!Component) return null;

          return <Component
            Name={DeepSubName}
            Options={DeepSubSecOptions}
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