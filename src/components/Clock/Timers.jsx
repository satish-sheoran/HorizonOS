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
  const ExperimentalFeatures = useSelector(store => store.Settings.ExperimentalFeatures)

  // states
  const [AllTimers, setAllTimers] = useState([]) //used to store all timers started/paused and which page to show
  const [openAddTimer, setopenAddTimer] = useState(false)
  const [RemainingTimeArray, setRemainingTimeArray] = useState([])

  const hasTimers = AllTimers.length > 0;

  //refs
  const addTimerRef = useRef(null)
  const TimersRemainingTimeRef = useRef([])
  const UpdateRemainingTimeInterval = useRef(null);
  const updateAllTimerInterval = useRef(null)

  // fn to update remaining time
  const updateRemainingTime = () => {

    for (const timer of TimersRemainingTimeRef.current) {

      if (timer.paused) continue;
      const now = performance.now();
      const elapsed = now - timer.startTime;

      timer.remainingTime = Math.max(0, timer.duration - elapsed);
      if (timer.remainingTime <= 0) {
        timer.remainingTime = 0
        timer.paused = true;
        setAllTimers((timers) => {
          return timers.map((currtimer) => {
            if (currtimer.id === timer.id) return { ...currtimer, paused: true }
            else {
              return { ...currtimer }
            }
          })
        })
      }

    }
  }

  //fn to update timers for displaying
  const updateAllTimers = () => {
    setRemainingTimeArray(
      TimersRemainingTimeRef.current.map(timer => ({
        ...timer
      }))
    );
  }

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
    <section id='TimerParent' className={`relative select-none  w-full h-full flex flex-col pb-[12vh] gap-2`}>

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
        <div className='mt-4 flex flex-col gap-3 w-full h-full overflow-hidden '>


          {ExperimentalFeatures && <MyTimers
            ThemeColors={ThemeColors}
            Theme={Theme}
            AccentColors={AccentColors}
            AllTimers={AllTimers}
            setAllTimers={setAllTimers}
            TimersRemainingTimeRef={TimersRemainingTimeRef} // it will store remaining time
            openAddTimer={openAddTimer}
            setopenAddTimer={setopenAddTimer}
            RemainingTimeArray={RemainingTimeArray}
            setRemainingTimeArray={setRemainingTimeArray}
          />}

          {ExperimentalFeatures && <AddTimer
            ThemeColors={ThemeColors}
            Theme={Theme}
            AccentColors={AccentColors}
            AllTimers={AllTimers}
            setAllTimers={setAllTimers}
            TimersRemainingTimeRef={TimersRemainingTimeRef} // it will store remaining time
            setopenAddTimer={setopenAddTimer}
            addTimerRef={addTimerRef}
            openAddTimer={openAddTimer}
            setRemainingTimeArray={setRemainingTimeArray}

            UpdateRemainingTimeInterval={UpdateRemainingTimeInterval}
            updateAllTimerInterval={updateAllTimerInterval}
            updateRemainingTime={updateRemainingTime}
            updateAllTimers={updateAllTimers}
          />}

          {!ExperimentalFeatures && <div style={{color : ThemeColors.thirdText,fontFamily : Weights.SemiBold,fontSize : Sizes.Small}} className={`flex items-center justify-center w-full h-full overflow-hidden`}>
            Enable Experimental Feature to View!
            </div>}
        </div>
      </div>
    </section>
  )
}

export default Timers