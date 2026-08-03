import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style'
import { Plus, Search } from 'lucide-react'
import CityCard from './Components/CityCard'
import WorldClockTitleAndDesc from './Components/WorldClockTitleAndDesc'
import { useDebounce } from '../../utils/UseDebounce'
import { GetCities } from '../../API/GetCities'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import Loader from '../Loader'
import { useGSAP } from '@gsap/react'

const WorldClock = ({ icon,Name, Description }) => {

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
    <section
      className={`select-none w-full h-full flex flex-col pb-[12vh] gap-2 ${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} `}>

      <div id='worldClock-overflow-area' className=' grow min-h-0 overflow-y-auto overflow-x-hidden'>
        {/* Title and desc */}
        <WorldClockTitleAndDesc icon={icon} Name={Name} Description={Description} />


        {/* body */}
        <div className='mt-4 flex flex-col gap-3 w-full'>
        </div>


      </div>
    </section >
  )
}

export default WorldClock