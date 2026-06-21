import React from 'react'
import WindowPreview from '../../../../../UI/WindowPreview'
const AccentColorPreview = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {
  return (
    <div className={`mt-2 flex flex-col gap-2`}>
      <span style={{ color: ThemeColors.primaryText }} className={`ease-out duration-500 text-[0.8rem] font-bold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>

      <div style={{ backgroundColor: ThemeColors.header }} className={`flex items-center justify-between rounded-2xl duration-500 ease-out select-none ${Device !== 'Desktop' ? `px-3 py-4` : `p-2.5`}`} >

        <WindowPreview Theme={Theme} ThemeColors={ThemeColors} Device={Device} AccentColors={AccentColors} Preview='AccentPreview' />
        
        <div className={`${Device !=='Desktop'?'max-w-1/2':'max-w-[40%]'} flex flex-col gap-2`}>
          <span style={{ color: ThemeColors.primaryText }} className={`font-bold text-[1.05rem] text-center `}>Personalize Your Experience</span>
          <span style={{ color: ThemeColors.thirdText }} className={`text-center text-[0.65rem]`}>Choose a color that reflects your style and preview changes here.</span>
        </div>

      </div>
    </div>
  )
}

export default AccentColorPreview