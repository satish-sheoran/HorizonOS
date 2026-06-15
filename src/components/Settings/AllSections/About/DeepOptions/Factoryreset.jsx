import React from 'react'
import Warning from './Components/Warning'
import WhatToReset from './Components/WhatToReset'
import LearnToBackup from './Components/LearnToBackup'
import ResetComp from './Components/ResetComp'

const Factoryreset = ({ Section, Theme, Device, fullScreen,ThemeColors,AccentColors }) => {
  return (
    <div className={`deep-factory-reset py-[2.5%]  select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto   px-[2.5%]'}`}>

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
