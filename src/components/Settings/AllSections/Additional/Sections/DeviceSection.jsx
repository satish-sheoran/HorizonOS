import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ToogleButton from '../../../../UI/ToggleButton'
import WallpaperBehaviour from '../components/WallpaperBehaviour'

import { setTimeFormat } from '../../../../../redux/features/DeviceSet'

const DEVICE_OPTIONS = {
  DateNTime: ToogleButton,
  WallpaperBehaviour
}

const DeviceSection = ({ theme, Device, fullScreen, options, sectionName }) => {

  const dispatch = useDispatch();
  const is12HRFormat = useSelector((store) => store.Device.isTime12HourFormat)
  const TimeFormat = () => dispatch(setTimeFormat())


  return (
    <div className={`flex flex-col w-full pt-2.5 gap-2`}>

      <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>

      {/* DISPLAYING ALL OPTIONS  OF ADDITIONAL SECTIONS */}
      <div className='w-full flex flex-col'>
        {
          options?.map(({ option, value }, idx) => {
            const Component = DEVICE_OPTIONS[option];

            if (!Component) return null;
            if (option === 'DateNTime') {
              return <ToogleButton
                key={idx}
                theme={theme}
                action={value}
                performAction={TimeFormat}
                Device={Device}
                isActionActive={is12HRFormat}
              />
            }
            return <Component
              key={idx}
              theme={theme}
              value={value}
              fullScreen={fullScreen}
              Device={Device}
            />
          })
        }
      </div>

    </div >
  )
}

export default DeviceSection

