import React from 'react'

const DarkmodeoptionsDeep = ({Section,Device,fullScreen,Theme,ThemeColors,AccentColors}) => {
  return (
    <div className={`flex flex-col border border-blue-400 gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 px-[2.5%]'}`}>
      Dark mode options
      </div>
  )
}


export default DarkmodeoptionsDeep