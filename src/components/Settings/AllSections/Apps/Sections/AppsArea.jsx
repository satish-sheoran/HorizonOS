import React from 'react'
import AppLock from '../components/AppLock'
import ManageApps from '../components/ManageApps'
import SystemApps from '../components/SystemApps'
import UninstallApps from '../components/UninstallApps'
import ToggleButton from '../../../../UI/ToggleButton'
import { useSelector } from 'react-redux'
import {CSS_EASING} from '../../../../../constants/Settings'
const ThemeComponent = {
  AppLock,
  ManageApps,
  SystemApps,
  UninstallApps
}

const AppsArea = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  return (
    <div className={`flex flex-col w-full  gap-2`}>

      <span style={{ color: ThemeColors.grayish ,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className='text-sm font-bold select-none'>{Section}</span>

      <div style={{ backgroundColor: ThemeColors.header ,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>
        {/* DISPLAYING ALL OPTIONS THEME,DARK  MODE OPTIONS AND AUTOMATIC THEME */}
        {
          Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
            const Component = ThemeComponent[FileName];

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

export default AppsArea