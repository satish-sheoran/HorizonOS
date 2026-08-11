import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style'
import { Clock, Dot, EllipsisVertical, Plus, Search, SearchAlert, SlidersHorizontal } from 'lucide-react'
import CityCard from './Components/CityCard'
import WorldClockTitleAndDesc from './Components/WorldClockTitleAndDesc'
import { GetCities } from '../../API/GetCities'
import { Flip } from 'gsap/Flip'
import Loader from '../Loader'
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
  //states
  const [inputSearch, setInputSearch] = useState('')
  const [IsFocused, setisFocused] = useState('')

  return (
    <section
      className={`select-none w-full h-full flex flex-col pb-[12vh] gap-2 ${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} `}>

      <div id='worldClock-overflow-area' className=' grow min-h-0 overflow-y-auto flex flex-col overflow-x-hidden'>
        {/* Title and desc */}
        <WorldClockTitleAndDesc icon={icon} Name={Name} Description={Description} />


        {/* body */}
        <div className='relative mt-4 flex flex-col gap-3 h-full'>

          {/* map img */}
          {/* <div></div> */}


          {/* search area */}
          <div className={`flex items-center w-full gap-2`}>
            <div
              style={{
                backgroundColor: ThemeColors.header,
                borderColor: IsFocused ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE : ThemeColors.third,
                fontSize: Device !== 'Desktop' ? Sizes.Small : `${(Sizes.Small.slice(0, -3)) * 1.1}rem`,
                color: ThemeColors.primaryText,
                fontFamily: Weights.SemiBold,
              }}
              className={`flex items-center gap-1 border grow overflow-hidden rounded-2xl py-2.5 ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
              <Search style={{ color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').Hover_Clr }} strokeWidth={2.5} />
              <input
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                type="text"
                spellCheck={false}
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                placeholder="Search cities..."
                maxLength={60}
                className={`grow font-semibold outline-none focus:ring-0  focus:outline-none`}
              />
            </div>
            <p
              onClick={() => toast.info('Adding soon...')}
              style={{
                backgroundColor: ThemeColors.header,
                borderColor: ThemeColors.third,
                color: ThemeColors.thirdText
              }}
              className={`h-full flex items-center justify-center py-1.5 px-2.5 rounded-2xl border active:scale-95`}>
              <SlidersHorizontal strokeWidth={2.5} size={22} />
            </p>
          </div>

          {/* added cities */}
          {ExperimentalFeatures && <section className={`select-none flex flex-col gap-2`}>
            <div
              style={{
                borderColor: ThemeColors.third,
                backgroundColor: ThemeColors.header
              }}
              className={`border rounded-2xl overflow-hidden flex gap-4 items-center justify-between ${Device !== 'Desktop' ? `px-3 py-4` : `px-2.5 py-3.5`}`}>

              <div className={`flex items-center gap-0.5`}>
                <span style={{ color: ThemeColors.primaryText }}><Clock size={35} strokeWidth={2.5} /></span>
                <div className={`flex items-start gap-0`}>
                  <Dot style={{
                    color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE
                  }} size={30} strokeWidth={2.5} />

                  <div className={`flex flex-col`}>
                    <div className={`flex gap-2`}>

                      <span style={{
                        color: ThemeColors.primaryText,
                        fontFamily: Weights.Bold,
                        fontSize: Sizes.Small
                      }}>New Delhi</span>

                      <p style={{
                        color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                        backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
                        fontFamily: Weights.SemiBold,
                        fontSize: Sizes.ExtraSmall
                      }} className={`px-1 py-0.5 flex items-center justify-center rounded-lg`}>Local</p>
                    </div>
                    <span style={{
                      color: ThemeColors.thirdText,
                      fontFamily: Weights.Regular,
                      fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 0.95}rem`
                    }}>India</span>
                    <span style={{
                      color: ThemeColors.thirdText,
                      fontFamily: Weights.SemiBold,
                      fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 0.95}rem`
                    }}>Wed, 7 Aug</span>
                  </div>
                </div>

              </div>

              <div className={`flex items-center gap-1`}>
                <div className={`flex flex-col items-end`}>
                  <div className={`flex items-end gap-1`}>
                    <span style={{
                      color: ThemeColors.primaryText,
                      fontFamily: Weights.SemiBold,
                      fontSize: Sizes.ExtraLarge
                    }}>09 : 41</span>
                    <p style={{
                      color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                      fontFamily: Weights.SemiBold,
                      fontSize: Sizes.Small
                    }} className={`mb-1`}>AM</p>

                  </div>

                  <span style={{
                    color: ThemeColors.thirdText,
                    fontFamily: Weights.SemiBold,
                    fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 0.95}rem`
                  }}>UTC +5:30</span>
                </div>
                <p onClick={() => toast.info('Adding Soon...')} className={`flex items-center justify-center rounded-full p-0.5`}>
                  <EllipsisVertical style={{color : ThemeColors.primaryText}} size={20} strokeWidth={2.5} />
                </p>

              </div>
            </div>
          </section>}

        </div>


      </div>
    </section >
  )
}

export default WorldClock