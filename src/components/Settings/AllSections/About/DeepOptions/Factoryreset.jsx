import React, { useState, useEffect, useRef } from 'react'
import Warning from './Components/Warning'
import WhatToReset from './Components/WhatToReset'
import LearnToBackup from './Components/LearnToBackup'
import ResetComp from './Components/ResetComp'
import { useDispatch, useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../constants/style'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { startingFactoryReset } from '../../../../../redux/features/DeviceSet'

const Factoryreset = ({ Name, Section, Theme, Device, fullScreen, ThemeColors, AccentColors }) => {

  const dispatch = useDispatch()

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  const ResetRef = useRef(null)

  //useState
  const [openResetOverlay, setopenResetOverlay] = useState(false) //to open/close factory reset pop up

  useGSAP(() => {
    if (!ResetRef.current) return;

    gsap.fromTo(ResetRef.current, {
      scale: openResetOverlay ? 0 : 1,
    }, {
      scale: openResetOverlay ? 1 : 0,
      duration: 0.65,
      force3D: true, //to make animation a bit smooth as it deals with scales (forcw3D)
      ease: Animation ?? 'expo.out'
    })

  }, [openResetOverlay])

  return (
    <div style={{
      borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color, font-size',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }} className={` deep-factory-reset py-[2.5%]  select-none ${Device === 'Mobile' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-full h-full overflow-y-auto   px-[2.5%]'}`}>

      <div className={`flex flex-col gap-2`}>
        {/* Warning message */}

        <Warning Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        <WhatToReset Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        <LearnToBackup Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        <ResetComp Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} setopenResetOverlay={setopenResetOverlay} />
      </div>





      <div className={`${openResetOverlay ? 'block' : 'hidden'}  absolute top-0 left-0 inset-0 flex flex-col`}>

        {/* overlay */}
        <div
          onClick={() => setopenResetOverlay(false)}
          className='grow backdrop-blur-[0.5px] bg-[rgba(0,0,0,0.35)]'></div>


        <div
          ref={ResetRef}
          style={{
            backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color, font-size',
            borderColor: COMMON_COLORS.Red,
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
          }}
          className={`border ${Device === 'Mobile' ? 'w-[calc(100%-30px)] px-4' : 'w-75 px-3'} h-auto absolute rounded-2xl py-3.5  gap-2.5 bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center`}>

          <span style={{
            fontSize: Sizes.Regular,
            color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
            transitionDuration: Speed,
            fontFamily: Weights.SemiBold,
            transitionTimingFunction: CSS_EASING[Animation]
          }} className={`font-semibold `}>Factory Reset</span>

          <span style={{
            fontSize: Sizes.Small,
            color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color, font-size',
            fontFamily: Weights.Regular,
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
          }}>Confirm Factory reset?</span>

          <div className={`w-full flex items-center gap-2`}>

            <button
              onClick={() => setopenResetOverlay(false)}
              style={{
                color: COMMON_COLORS.White, fontSize: Sizes.Small,
                fontFamily: Weights.Bold,
                backgroundColor: Theme !== 'dark' ? COMMON_COLORS.LightWhite : ThemeColors.grayish,
                '--hover': Theme !== 'dark' ? COMMON_COLORS.grayishDark : COMMON_COLORS.LightWhite,
                '--active': Theme !== 'dark' ? COMMON_COLORS.grayishDark : COMMON_COLORS.LightWhite,
                transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
              }}
              className={`${Device !== 'Desktop' ? 'py-3.5' : 'py-2.5'} HOVER_CLASS w-[calc(50%-2px)]   font-bold select-none  active:scale-96 rounded-lg 
                         `}>Cancel</button>

            <button
              onClick={() => {
                dispatch(startingFactoryReset({ Start: true }))
                setopenResetOverlay(false)
              }}
              style={{
                fontFamily: Weights.Bold,
                fontSize: Sizes.Small,
                backgroundColor: COMMON_COLORS.Red,
                color: COMMON_COLORS.White,
                '--hover': COMMON_COLORS.LightRed,
                '--active': COMMON_COLORS.LightRed
                , transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
              }}
              className={`HOVER_CLASS grow ${Device !== 'Desktop' ? 'py-3.5' : 'py-2.5'}   font-bold rounded-lg select-none   active:scale-96`}>Reset Now</button>
          </div>


        </div>
      </div >








    </div>
  )
}

export default Factoryreset
