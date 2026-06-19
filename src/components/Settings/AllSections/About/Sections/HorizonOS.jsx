import React from 'react'
import { OS_NAME, OS_VERSION } from '../../../../../constants/Settings'

const HorizonOS = ({Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors}) => {
  return (
    <div style={{ backgroundColor: ThemeColors.header }} className={`active:scale-97 ease-out duration-500 shrink-0 w-full ${Device !== 'Desktop' ? 'h-60' : 'h-60'} flex flex-col items-center justify-center gap-2 rounded-2xl`}>
    
            <span style={{ color: ThemeColors.primaryText }} className={`duration-500 ease-out select-none cursor-default text-4xl md:text-4xl lg:text-5xl font-semibold `}>{OS_NAME}
            </span>
    
            <span style={{ color: ThemeColors.grayish }} className='select-none cursor-default '>{OS_VERSION} </span>
          </div>
  )
}

export default HorizonOS