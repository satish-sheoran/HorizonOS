import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToggleButton from '../../../../UI/ToggleButton'
import WallpaperBehaviour from '../components/WallpaperBehaviour'
import { CSS_EASING } from '../../../../../constants/Settings'
import { setTimeFormat } from '../../../../../redux/features/DeviceSet'

const DEVICE_OPTIONS = {
  DateNTime: ToggleButton,
  WallpaperBehaviour
}

// Additional Settings Behave as Grand Parent for the Options of This Sub Section (Device)
// Section : Additional , Device (basically SubSection Name)


const DeviceSection = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

  const dispatch = useDispatch();
  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const is12HRFormat = useSelector((store) => store.Device.isTime12HourFormat)
  const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
 
  const TimeFormat = () => {
    dispatch(setTimeFormat())
    if (EnableDebugLogs) {
      if (is12HRFormat) {
        console.log('12Hr format Disabled')
      } else {
        console.log('12Hr format Enabled')
      }
    }
  }


  return (
    <div className={`flex flex-col w-full  gap-2`}>

      <span style={{
        fontSize: Sizes.Small, fontFamily: Weights.Regular, color: ThemeColors.grayish,
      }} className='select-none'>{Section}</span>

      {/* DISPLAYING ALL OPTIONS  OF ADDITIONAL SECTIONS */}
      <div style={{
        borderColor: ThemeColors.third, backgroundColor: ThemeColors.header,
      }} className={`border w-full p-[2.5%] flex flex-col rounded-2xl  gap-2 `}>
        {
          Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
            const Component = DEVICE_OPTIONS[FileName];

            if (!Component) return null;
            if (Toggleable) {
              return <ToggleButton
                key={idx}
                Theme={Theme}
                action={Option}
                performAction={action === 'TimeFormat' ? TimeFormat : ''}
                Device={Device}
                isActionActive={is12HRFormat}
                ThemeColors={ThemeColors}
                AccentColors={AccentColors}
              />
            }
            return <Component
              key={idx}
              Theme={Theme}
              Option={Option}
              fullScreen={fullScreen}
              Device={Device}
              ThemeColors={ThemeColors}
              AccentColors={AccentColors}
            />
          })
        }
      </div>

    </div >
  )
}

export default DeviceSection

