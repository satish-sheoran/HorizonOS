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

const AppsArea = ({ options, sectionName, theme, fullScreen, Device }) => {


  return (
    <div className={`flex flex-col w-full pt-2.5 gap-2`}>

      <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

      {/* DISPLAYING ALL OPTIONS THEME,DARK  MODE OPTIONS AND AUTOMATIC THEME */}
      <div className='w-full flex flex-col'>
      {
        options?.map(({ option, value }, idx) => {
          const Component = ThemeComponent[option];

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

export default AppsArea