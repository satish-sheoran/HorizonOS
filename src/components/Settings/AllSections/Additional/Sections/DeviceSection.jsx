import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ToogleButton from '../../../../UI/ToggleButton'
import WallpaperBehaviour from '../components/WallpaperBehaviour'

import { setTimeFormat } from '../../../../../redux/features/DeviceSet'

const DEVICE_OPTIONS = {
  DateNTime: ToogleButton,
  WallpaperBehaviour
}

const DeviceSection = ({ Theme, Device, fullScreen, options, sectionName,ThemeColors,AccentColors }) => {

  const dispatch = useDispatch();
  const is12HRFormat = useSelector((store) => store.Device.isTime12HourFormat)
  const TimeFormat = () => dispatch(setTimeFormat())


  return (
    <div className={`flex flex-col w-full  gap-2`}>

      <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

      {/* DISPLAYING ALL OPTIONS  OF ADDITIONAL SECTIONS */}
      <div className={`w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
        {
          options?.map(({ option, value }, idx) => {
            const Component = DEVICE_OPTIONS[option];

            if (!Component) return null;
            if (option === 'DateNTime') {
              return <ToogleButton
                key={idx}
                Theme={Theme}
                action={value}
                performAction={TimeFormat}
                Device={Device}
                isActionActive={is12HRFormat}
                ThemeColors={ThemeColors} AccentColors={AccentColors}
              />
            }
            return <Component
              key={idx}
              Theme={Theme}
              value={value}
              fullScreen={fullScreen}
              Device={Device}
              ThemeColors={ThemeColors} AccentColors={AccentColors}
            />
          })
        }
      </div>

    </div >
  )
}

export default DeviceSection

