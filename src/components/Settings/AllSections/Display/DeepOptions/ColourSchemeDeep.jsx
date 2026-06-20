import React from 'react'
import PickAccentColor from './Components/PickAccentColor'
import AccentColorPreview from './Components/AccentColorPreview'

const DEEP_OPTIONS = {
  PickAccentColor,
  AccentColorPreview
}

const ColourSchemeDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors, DeepSubSection }) => {
  return (
    <section style={{
      borderColor: ThemeColors.third
    }} className={`deep-colorScheme-option flex flex-col py-[2.5%] gap-2 select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto   px-[2.5%]'}`}>

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

export default ColourSchemeDeep