import React from 'react'
import { ALL_APPS } from '../../../../../../constants'
import { COMMON_COLORS, ACCENT_COLORS } from '../../../../../../constants/style'
import DetailedToggleButton from '../../../../../UI/DetailedToggleButton'

const SepDarkModeForApps = ({ Name, Options, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {
  return (
    <div className={`flex flex-col gap-2 `}>
      <div className='mt-2 flex flex-col gap-0.5'>
        <span style={{ color: ThemeColors.thirdText }} className={`text-[0.8rem] font-bold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Dark mode for apps</span>
        <span style={{ color: ThemeColors.thirdText }} className={`text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose which apps should use dark mode.</span>
      </div>

      <div style={{ backgroundColor: ThemeColors.header }} className={`flex flex-col gap-2 rounded-2xl duration-500 ease-out select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`} >

        {ALL_APPS.map(({ id, name, icon, desc, canOpen, }) => {
          return canOpen && <DetailedToggleButton
            id={id}
            Device={Device}
            ThemeColors={ThemeColors}
            AccentColors={AccentColors}
            Logo={icon}
            Title={name}
            Detail={desc}
            Theme={Theme}
          />
        })}

      </div>
    </div>
  )
}

export default SepDarkModeForApps