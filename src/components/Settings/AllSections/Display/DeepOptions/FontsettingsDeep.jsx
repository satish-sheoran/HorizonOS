import React from 'react'

const FontsettingsDeep = ({Section,Device,fullScreen}) => {
  return (
    <div className={`flex flex-col border border-blue-400 gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 px-[2.5%]'}`}>
      FontsettingsDeep
      </div>
  )
}

export default FontsettingsDeep