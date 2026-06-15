
import React from 'react'

const ApplockDeep = ({Section,Device,fullScreen,Theme,ThemeColors,AccentColors}) => {
  return (
    <div className={`flex flex-col border border-blue-400 gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 px-[2.5%]'}`}>
      app lock
      </div>
  )
}

export default ApplockDeep