import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style'
import CityCard from './Components/CityCard'
import WorldClockTitleAndDesc from './Components/WorldClockTitleAndDesc'
import { GetCities } from '../../API/GetCities'
import { Flip } from 'gsap/Flip'
import Loader from '../Loader'
import MyWorldClocks from './Components/MyWorldClocks'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { X } from 'lucide-react'
import { WORLD_CITIES } from '../../constants/Clock'
import { toast } from 'react-toastify'

const WorldClock = ({ icon, Name, Description }) => {

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
  const ExperimentalFeatures = useSelector(store => store.Settings.ExperimentalFeatures)
  const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)


  //states
  const [startDeletingWorldClocks, setstartDeletingWorldClocks] = useState(false)
  const [AddedClocks, setAddedClocks] = useState([])
  const [showAddClockPage, setshowAddClockPage] = useState(false)

  //refs
  const addWorldClockRef = useRef(null)

  useGSAP(() => {
    if (!addWorldClockRef.current) return;

    gsap.fromTo(addWorldClockRef.current, {
      yPercent: showAddClockPage ? 100 : 0
    }, {
      yPercent: showAddClockPage ? 0 : 100,
      duration: 0.2,
      ease: 'sine.out'
    })

  }, [showAddClockPage])

  return (
    <section
      className={`pb-[12vh] relative select-none w-full h-full flex flex-col  gap-2 ${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} `}>

      <div id='worldClock-overflow-area' className=' grow min-h-0 overflow-y-auto flex flex-col overflow-x-hidden'>
        {/* Title and desc */}
        <WorldClockTitleAndDesc icon={icon} Name={Name} Description={Description} />


        {/* body */}
        <div className='relative mt-4 flex flex-col gap-2 h-full'>

          {/* map img */}
          {/* <div></div> */}

          <MyWorldClocks
            startDeletingWorldClocks={startDeletingWorldClocks}
            setstartDeletingWorldClocks={setstartDeletingWorldClocks}
            AddedClocks={AddedClocks}
            setAddedClocks={setAddedClocks}
            setshowAddClockPage={setshowAddClockPage}
          />
        </div >

      </div >

      {/* add new world clock */}
      <section id='addNewWorldClock-overflow' ref={addWorldClockRef} className={`absolute inset-0 top-0 left-0 overflow-hidden px-2 pt-2`}>
        <div style={{ backgroundColor: ThemeColors.header, borderColor: ThemeColors.third }} className={`relative pb-[12vh] w-full h-full flex rounded-t-2xl border-t border-l border-r flex-col gap-1 overflow-y-auto `}>
          <div
            style={{ borderColor: ThemeColors.third }}
            className={`${Device !== 'Desktop' ? `px-3 py-2` : `px-2.5 py-1.5`} border-b sticky top-0 left-0 w-full flex items-center gap-2 backdrop-blur-2xl backdrop-saturate-150
          ${Theme !== 'dark' ?
                'bg-white/6 border-white/[0.14] '
                :
                'bg-black/4 border-black/8'
              }`}>
            <p
              onClick={() => setshowAddClockPage(false)}
              style={{
                color: ThemeColors.primaryText,
                backgroundColor: ThemeColors.header,
                borderColor: ThemeColors.third,
                '--hover': ThemeColors.bg,
                '--active': ThemeColors.bg,
              }} className={`cursor-pointer HOVER_CLASS border active:scale-95 rounded-full p-1 flex items-center justify-between`}>
              <X size={Device !== 'Desktop' ? 18 : 20} strokeWidth={2.5} />
            </p>

            <p style={{
              color: ThemeColors.primaryText,
              fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.75}rem`,
              fontFamily: Weights.SemiBold
            }} className={`grow text-center`}>Choose a city</p>
          </div>

          <div className={`flex flex-col ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
            {WORLD_CITIES.map(({ city, countryCode, country, gmtOffset, timeZone }, idx) => {

              let isAlreadyAdded = AddedClocks.find(({ city: cityName }) => city === cityName);
              let CurrCharCode = idx !== 0 ? city.charCodeAt(0):2
              let LastCharCode = idx !== 0 ? WORLD_CITIES[idx - 1].city.charCodeAt(0) : 1

              return  <div key={city} className={` flex flex-col`}>
                <p 
                style={{color : AccentColors.CODE}}
                className={`${Device !== 'Desktop' ? `px-3` : `px-2.5`} ${CurrCharCode - LastCharCode === 1 ?
                  Device !== 'Desktop' ? `mt-4` : `mt-3.5`
                  : ''}`}>
                  {CurrCharCode - LastCharCode === 1 ? city[0] : ''}
                </p>
              {!isAlreadyAdded &&<div 
                onClick={() => {
                  setAddedClocks(old => [...old, { city, countryCode, country, gmtOffset, timeZone }])
                  setshowAddClockPage(false)
                }}
                className={`cursor-pointer HOVER_CLASS flex flex-col gap-2 border-b ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}
                style={{
                  borderColor: ThemeColors.third,
                  '--hover': ThemeColors.bg,
                  '--active': ThemeColors.bg,
                  color: ThemeColors.primaryText,
                  fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.75}rem`,
                  fontFamily: Weights.SemiBold
                }}
              >
                <span>
                  {city},{country}
                </span>
              </div>
            }
              </div>
            })}
          </div>
        </div>
      </section>

    </section >
  )
}

export default WorldClock