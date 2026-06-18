import React from 'react'
import ResetSettings from '../components/ResetSettings'
import DeveloperOptions from '../components/DeveloperOptions'
import ToggleButton from '../../../../UI/ToggleButton'
const ADDITINAL_OPTIONS = {
  ResetSettings,
  DeveloperOptions
}

const AdditionalSection = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {
  return (
    <div className={`flex flex-col w-full  gap-2`}>

      <span style={{ color: ThemeColors.grayish }} className=' text-sm font-bold select-none'>{Section}</span>

      {/* DISPLAYING ALL OPTIONS OF ADDITIONAL SECTIONS*/}
      <div style={{ backgroundColor: ThemeColors.header }} className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2`}>
        {
          Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
            const Component = ADDITINAL_OPTIONS[FileName];

            if (!Component) return null;
            if (Toggleable) {
              return <ToggleButton
                key={idx}
                Theme={Theme}
                action={Option}
                performAction={action}
                Device={Device}
                isActionActive={''}
                ThemeColors={ThemeColors}
                AccentColors={AccentColors}
              />
            }
            return <Component
              key={idx}
              Theme={Theme}
              Option={Option}
              fullScreen={fullScreen}
              Device={Device}
              ThemeColors={ThemeColors}
              AccentColors={AccentColors}
            />
          })
        }
      </div>

    </div >
  )
}

export default AdditionalSection