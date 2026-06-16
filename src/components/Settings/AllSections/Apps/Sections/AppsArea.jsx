import React from 'react'
import AppLock from '../components/AppLock'
import ManageApps from '../components/ManageApps'
import SystemApps from '../components/SystemApps'
import UninstallApps from '../components/UninstallApps'

const ThemeComponent = {
  AppLock,
  ManageApps,
  SystemApps,
  UninstallApps
}

const AppsArea = ({ options, sectionName, Theme, fullScreen, Device,ThemeColors,AccentColors }) => {


  return (
    <div className={`flex flex-col w-full  gap-2`}>

      <span style={{color : ThemeColors.grayish}} className='text-sm font-bold select-none'>{sectionName}</span>

      <div style={{backgroundColor : ThemeColors.header}} className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>
      {/* DISPLAYING ALL OPTIONS THEME,DARK  MODE OPTIONS AND AUTOMATIC THEME */}
      {
        options?.map(({ option, value }, idx) => {
          const Component = ThemeComponent[option];

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

export default AppsArea