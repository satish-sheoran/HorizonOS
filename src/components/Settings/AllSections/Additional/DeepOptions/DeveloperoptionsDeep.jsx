import React from 'react'
import { useSelector } from 'react-redux'
import DeveloperOptions from './components/DeveloperOptions'

const DEEP_OPTIONS = {
    DeveloperOptions,
}

const DeveloperoptionsDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors ,DeepSubSection}) => {
  
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);

  return (
    <section style={{
            borderColor: ThemeColors.third, 
        }} className={`deep-developerOption flex flex-col py-[2.5%] gap-2 select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  px-[2.5%]'}`}>
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

export default DeveloperoptionsDeep
