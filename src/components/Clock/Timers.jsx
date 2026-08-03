import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
import * as Icons from 'lucide-react'
import { ACCENT_COLORS } from '../../constants/style'
import MyTimers from './Components/MyTimers'
import AddTimer from './Components/AddTimer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Timers = ({ icon, Name, Description }) => {

  let Icon = Icons[icon]

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


  // states
  const [AllTimers, setAllTimers] = useState([]) //used to store all timers started/paused and which page to show
  const [openAddTimer, setopenAddTimer] = useState(false)

  const hasTimers = AllTimers.length > 0;

  //refs
  const addTimerRef = useRef(null)

  useEffect(() => {
    if (!hasTimers) {
      setopenAddTimer(true);
    }
  }, [hasTimers])

  useGSAP(() => {

    if (!addTimerRef.current) return;

    gsap.to(addTimerRef.current, {
      y: openAddTimer ? 0 : "100%",
      duration: 0.45,
      ease: Animation ?? "back.out"
    });

  }, [openAddTimer]);


  return (
    <section id='TimerParent' className={`select-none  w-full h-full flex flex-col pb-[12vh] gap-2`}>

      <div id='timer-overflow-area' className='flex flex-col grow min-h-0 overflow-y-auto overflow-x-hidden'>
        {/* Title and desc */}
        <div className={`my-2 flex items-center gap-1 ${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} `}>
          <p style={{
            color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
            backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
          }} className={`flex items-center justify-center rounded-lg p-2`}>
            {Icon && <Icon size={18} strokeWidth={2.5} />}
          </p>
          <div className='grow flex flex-col gap-0.5'>
            <span style={{
              fontSize: `${(Sizes.Small.slice(0, -3)) * 1.3}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
            }} className={` font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>{Name} </span>
            <span style={{
              fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
            }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
              {Description}
            </span>
          </div>
        </div>


        {/* body */}
        <div className='relative  mt-4 flex flex-col gap-3 w-full h-full overflow-hidden '>


          <MyTimers
            ThemeColors={ThemeColors}
            Theme={Theme}
            AccentColors={AccentColors}
            AllTimers={AllTimers}
            setAllTimers={setAllTimers}
            openAddTimer={openAddTimer}
            setopenAddTimer={setopenAddTimer}
          />

          <AddTimer
            ThemeColors={ThemeColors}
            Theme={Theme}
            AccentColors={AccentColors}
            AllTimers={AllTimers}
            setAllTimers={setAllTimers}
            setopenAddTimer={setopenAddTimer}
            addTimerRef={addTimerRef}
            openAddTimer={openAddTimer}
          />


        </div>
      </div>
    </section>
  )
}

export default Timers