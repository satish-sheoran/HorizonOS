import React from 'react'
import ResetSettings from '../components/ResetSettings'
import DeveloperOptions from  '../components/DeveloperOptions'

const ADDITINAL_OPTIONS = {
  ResetSettings,
  DeveloperOptions
}

const AdditionalSection = ({ theme,Device,fullScreen,options,sectionName}) => {
  return (
    <div className={`flex flex-col w-full pt-2.5 gap-2`}>

      <span className='ml-[6%] md:ml-[4%] text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

      {/* DISPLAYING ALL OPTIONS OF ADDITIONAL SECTIONS*/}
      <div className='w-full flex flex-col'>
      {
        options?.map(({ option, value }, idx) => {
          const Component = ADDITINAL_OPTIONS[option];

          if (!Component) return null;

          return <Component
            key={idx}
            theme={theme}
            value={value}
            fullScreen={fullScreen}
            Device={Device}
          />
        })
      }
    </div>

    </div >
  )
}

export default AdditionalSection