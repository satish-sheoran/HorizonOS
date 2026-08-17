import React from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
import * as Icons from 'lucide-react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style'
import { Flip } from 'gsap/Flip'
import gsap from 'gsap'
import { useRef } from 'react'
import MyAlarms from './Components/MyAlarms'

const Alarms = ({ icon, Name, Description }) => {

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


  //refs 
  const AlarmMsgRef = useRef(null)

  return (
    <section
      className={`select-none w-full h-full flex flex-col pb-[12vh] gap-2 ${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} `}>

      <div id='stopwatch-overflow-area' className=' grow min-h-0 overflow-y-auto overflow-x-hidden'>

        {/* Title and desc */}

        <div className={`my-2 flex items-center gap-1`}>
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
        {ExperimentalFeatures && <div className='relative mt-4 flex flex-col gap-3 h-full'>

          {/* add,edit options */}
          <div className={`${fullScreen ? 'px-[1.5%] pt-[1%]' : 'px-[2.5%] pt-[1.5%]'} w-full flex items-center justify-between`}>
            <p
              style={{
                color: ThemeColors.primaryText,
                backgroundColor: ThemeColors.header,
                borderColor: ThemeColors.third
              }}
              className={`${true ? '' : 'opacity-0'} border flex items-center justify-center rounded-2xl px-3 py-1`}>
              {!true ? 'Cancel' : 'Edit'}
            </p>
            <p
              style={{
                color: ThemeColors.primaryText,
                backgroundColor: ThemeColors.header,
                borderColor: ThemeColors.third
              }}
              className={`border active:scale-95 rounded-full flex items-center justify-center w-10 h-10`}><Icons.Plus size={22} strokeWidth={2.5} /></p>
          </div>
          {/* alarms */}
          <MyAlarms />

          {/* default msg  */}
          <div ref={AlarmMsgRef}
            style={{
              borderColor: ThemeColors.third,
              backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').Bg_Clr,
              '--hover': ThemeColors.third,
              '--active': Theme !== 'dark' ?
                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                :
                COMMON_COLORS.Gray,
            }}
            className={`HOVER_CLASS active:scale-95 flex items-center justify-between border rounded-2xl overflow-hidden ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'}`}>
            <div className={`flex items-center gap-2 max-w-[85%]`}>
              <p
                style={{
                  backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
                  color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                  borderColor: ThemeColors.third
                }}
                className={`shrink-0 border flex items-center justify-center p-1.5 rounded-full overflow-hidden`}>
                <Icons.Moon size={18} strokeWidth={2.5} />
              </p>
              <div className={`flex flex-col gap-0.5`}>
                <span
                  style={{
                    fontSize: Sizes.Small,
                    fontFamily: Weights.SemiBold,
                    color: ThemeColors.primaryText
                  }}>
                  Sleep better with a consistent routine.
                </span>
                <span
                  style={{
                    fontSize: Sizes.ExtraSmall,
                    fontFamily: Weights.Regular,
                    color: ThemeColors.thirdText,
                  }}>
                  Try to keep the same wake up time every day.
                </span>
              </div>
            </div>
            <p
              onClick={() => {
                const tl = gsap.timeline()
                tl.to(AlarmMsgRef.current, {
                  xPercent: 105,
                  duration: 0.35,
                  ease: 'sine.out'
                }).set(AlarmMsgRef.current, {
                  display: 'none',
                  opacity: 0
                })
              }}
              style={{
                color: ThemeColors.primaryText,
              }}
              className={`shrink-0 flex items-center justify-center p-1.5 rounded-full overflow-hidden`}>
              <Icons.X size={18} strokeWidth={2.5} />
            </p>
          </div>

        </div>
        }
      </div>
    </section>
  )
}

export default Alarms