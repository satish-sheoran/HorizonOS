import React from 'react'
import Warning from './Components/Warning'
import WhatToReset from './Components/WhatToReset'
import LearnToBackup from './Components/LearnToBackup'
import ResetComp from './Components/ResetComp'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'


const Factoryreset = ({ Name, Section, Theme, Device, fullScreen, ThemeColors, AccentColors }) => {


  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


  return (
    <div style={{
      borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color, font-size',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }} className={`deep-factory-reset py-[2.5%]  select-none ${Device === 'Mobile' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-full h-full overflow-y-auto   px-[2.5%]'}`}>

      <div className={` flex flex-col gap-2`}>
        {/* Warning message */}

        <Warning Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        <WhatToReset Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        <LearnToBackup Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        <ResetComp Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />
      </div>
    </div>
  )
}

export default Factoryreset
