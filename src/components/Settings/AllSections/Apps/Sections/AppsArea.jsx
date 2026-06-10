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
    <div className={`flex flex-col w-full  gap-2`}>

      <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

      <div className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 ${theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
      {/* DISPLAYING ALL OPTIONS THEME,DARK  MODE OPTIONS AND AUTOMATIC THEME */}
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