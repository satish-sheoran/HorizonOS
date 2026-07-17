import { useSelector } from 'react-redux'
import React from 'react'

const ApplockDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors }) => {

  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);

  return (
    <div style={{
      fontFamily: Weights.SemiBold, 
    }} className={`font-semibold flex flex-col border border-blue-400 gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 px-[2.5%]'}`}>
      {Name}
    </div>
  )
}

export default ApplockDeep