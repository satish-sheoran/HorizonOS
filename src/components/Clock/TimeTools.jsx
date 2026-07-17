import React from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'

const TimeTools = ({ ClockAllTabsHeight, ClockAllTabsWidth, Name, Description }) => {

  const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const Wallpaper = useSelector(store => store.wallpaper.src) //font sizes
  const DeviceTheme = useSelector(store => store.wallpaper.theme.Settings)
  const Device = useSelector((store) => store.Device.currDevice);
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const Theme = useSelector((store) => store.wallpaper.theme.Clock);
  const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
  const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  return (
    <section style={{
      paddingBottom: `${Math.floor(ClockAllTabsHeight) * 1.1}px`,
      
    }}
      className={`overflow-cloclTab w-full h-full grow px-[2.5%] pt-[1.5%] overflow-y-auto overflow-x-hidden flex flex-col gap-2`}>


      <div className={`mt-2 flex flex-col gap-2`}>
        {/* Title and desc */}
        <div className='flex flex-col gap-0.5'>
          <span style={{
            fontSize: `${(Sizes.Small.slice(0, -3)) * 1.3}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, 
          }} className={` font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>{Name} </span>
          <span style={{
            fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.Regular, color: ThemeColors.thirdText, 
          }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
            {Description}
          </span>
        </div>

        {/* body */}
        <div style={{
          
        }} className={` ${(Device === 'Mobile' || (Device === 'Tablet' && !fullScreen)) ? 'flex flex-col' : 'grid grid-cols-2 '} gap-5 rounded-2xl items-center select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
        </div>

      </div>
    </section>
  )
}

export default TimeTools