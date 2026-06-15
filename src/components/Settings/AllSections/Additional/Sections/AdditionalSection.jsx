import React from 'react'
import ResetSettings from '../components/ResetSettings'
import DeveloperOptions from  '../components/DeveloperOptions'

const ADDITINAL_OPTIONS = {
  ResetSettings,
  DeveloperOptions
}

const AdditionalSection = ({ Theme,Device,fullScreen,options,sectionName,ThemeColors,AccentColors}) => {
  return (
    <div className={`flex flex-col w-full  gap-2`}>

      <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

      {/* DISPLAYING ALL OPTIONS OF ADDITIONAL SECTIONS*/}
      <div className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
      {
        options?.map(({ option, value }, idx) => {
          const Component = ADDITINAL_OPTIONS[option];

          if (!Component) return null;

          return <Component
            key={idx}
            Theme={Theme}
            value={value}
            fullScreen={fullScreen}
            Device={Device}
            ThemeColors={ThemeColors} AccentColors={AccentColors}
          />
        })
      }
    </div>

    </div >
  )
}

export default AdditionalSection