import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux';
import { CSS_EASING } from '../../constants/Settings';
import { showCaseOptions } from '../../constants/Clock';
import { ACCENT_COLORS, COMMON_COLORS, DARK_THEME_COLORS } from '../../constants/style';
import { ArrowBigLeft, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react'
import { Wallpapers } from '../../constants';
import { useState } from 'react';

const ClockTab = ({ ClockAllTabsWidth, ClockAllTabsHeight }) => {

  const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const Wallpaper = useSelector(store => store.wallpaper.src) //font sizes
  const DeviceTheme = useSelector(store => store.wallpaper.theme.Settings)
  const Device = useSelector((store) => store.Device.currDevice);
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const Theme = useSelector((store) => store.wallpaper.theme.Clock);
  const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
  const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  const [WallpaperTheme, setWallpaperTheme] = useState('')

  function RotateHands() {
    let date = new Date();

    let hourHand = document.querySelector('.hourHand')
    let minHand = document.querySelector('.minHand')
    let secHand = document.querySelector('.secHand')

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hourHand.style.transform = `rotate(${30 * hr + min / 2}deg)`
    minHand.style.transform = `rotate(${6 * min}deg)`
    secHand.style.transform = `rotate(${6 * sec}deg)`

  }

  setInterval(RotateHands, 1000)

  useLayoutEffect(() => {
    const theme = Wallpapers[Device === 'Tablet' ? 'desktop' : Device.toLowerCase()]?.find(({ url }) => url === Wallpaper)?.theme
    if (theme) setWallpaperTheme(theme)

  }, [Wallpaper])


  return (
    <section style={{
      paddingBottom: `${Math.floor(ClockAllTabsHeight)}px`, transitionProperty: 'color, background-color, border-color',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }}
      className={`overflow-cloclTab w-full h-full grow px-[2.5%] pt-[2.5%] overflow-y-auto overflow-x-hidden flex flex-col gap-2`}>


      <div className={`mt-2 flex flex-col gap-2`}>

        {/* body */}
        <div style={{
          transitionProperty: 'color, background-color, border-color',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={` ${(Device === 'Mobile' || (Device === 'Tablet' && !fullScreen)) ? 'flex flex-col' : 'grid grid-cols-2 '} gap-5 rounded-2xl items-center select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>

          {/* clock */}
          <div style={{
            backgroundColor: ThemeColors.header, borderColor: DeviceTheme !== 'dark' ? ThemeColors.third : ThemeColors.sec, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
          }} className={`${(Device === 'Mobile' || (Device === 'Tablet' && !fullScreen)) ? '' : 'h-full'} border flex items-center justify-center py-5 rounded-2xl w-full `}>
            <div
              style={{
                backgroundImage: `url(${Wallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'auto',
                backgroundRepeat: 'no-repeat',
                borderColor: ThemeColors.sec,
                boxShadow: DeviceTheme !== 'dark' ? '0 1px 12px rgba(0,0,0,0.15), 0 0 5px rgba(0,0,0,0.5)' : '0 1px 12px rgba(255,255,255,0.15) , 0 0 5px rgba(255,255,255,0.5)',
                transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]

              }}
              className={`shrink-0 relative border-2 ${Device !== 'Desktop' ? 'w-55 h-55' : 'w-40 h-40'} rounded-full flex items-center justify-center`}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val, idx) => {
                return <p id={idx}
                  style={{
                    transform: `rotate(${30 * val}deg)`,
                    textAlign: 'center',
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }}
                  className={` absolute inset-1`}>
                  <span style={{
                    color: WallpaperTheme === 'dark' ? COMMON_COLORS.White : COMMON_COLORS.Black,
                    fontFamily: Weights.Bold,
                    fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.9}rem`,
                    display: 'inline-block',
                    transform: `rotate(${-30 * val}deg)`,
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }} className={``}>{val}</span>
                </p>
              })}

              <p style={{
                backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
              }} className={`absolute ${Device !== 'Desktop' ? 'p-2' : 'p-1.5'} rounded-full z-2`}></p>
              <div className='hourHand absolute flex justify-center items-end'>
                <p style={{
                  borderColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                  transitionDuration: Speed,
                  transitionTimingFunction: CSS_EASING[Animation]
                }}
                  className={`absolute border rounded-full ${Device !== 'Desktop' ? 'h-10' : 'h-7.5'} w-0.5 bg-transparent`}></p>
              </div>

              <div className='minHand absolute flex justify-center items-end'>
                <p style={{
                  borderColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                  transitionDuration: Speed,
                  transitionTimingFunction: CSS_EASING[Animation]
                }}
                  className={`border bg-transparent absolute rounded-full w-1 ${Device !== 'Desktop' ? 'h-13.75' : 'h-11.25'} `}></p>
              </div>


              <div className='secHand absolute flex justify-center items-end'>
                <p className={`absolute rounded-full  w-0.5 ${Device !== 'Desktop' ? 'h-19.25' : 'h-13.5'}  bg-red-400`}>
                </p>
              </div>

            </div>
          </div>

          {/* options */}
          <div className={` ${(Device === 'Mobile' || (Device === 'Tablet' && !fullScreen)) ? 'flex flex-col'
            :
            `grid h-full ${(Device === 'Tablet' || !fullScreen) ? 'grid-cols-2' : 'grid-cols-4'}`
            } 
             gap-2 w-full `}>

            {
              showCaseOptions.map(({ name, active, extra, clr, icon }, idx) => {
                const ICON = Icons[icon]
                return <button
                  key={idx}
                  style={{
                    backgroundColor: ThemeColors.header,
                    borderColor: DeviceTheme !== 'dark' ? ThemeColors.third : ThemeColors.sec,
                    color: ThemeColors.primaryText,
                    '--hover': ThemeColors.third,
                    '--active': Theme !== 'dark' ?
                      Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                      :
                      COMMON_COLORS.Gray, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }}
                  className={`w-full HOVER_CLASS border active:scale-95 rounded-2xl  flex gap-2 justify-between items-center 
              ${Device !== 'Desktop' ? `p-3` : `p-2.5`} ${(Device === 'Mobile' || (Device === 'Tablet' && !fullScreen)) ? '' : 'h-full'}`}>

                  <div className={`w-full ${(Device === 'Mobile' || (Device === 'Tablet' && !fullScreen)) ? '' : 'flex-col items-center'} flex gap-3`}>
                    <div style={{
                      backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === clr).Bg_Clr, color: ACCENT_COLORS.find(({ COLOR }) => COLOR === clr).COLOR, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`p-2 w-fit rounded-full  flex items-center justify-center`}>
                      {ICON && <ICON strokeWidth={2} />}
                    </div>
                    <div className={`flex flex-col gap-0.5 text-left`}>
                      <span style={{
                        fontSize: `${(Sizes.Small.slice(0, -3)) * 1.1}rem`, fontFamily: Weights.Bold, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                      }}>{name}</span>
                      <span style={{
                        fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.Regular, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                      }}>{active} {extra}</span>
                    </div>
                  </div>

                  {!fullScreen && Device !== 'Desktop' && <div style={{
                    color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }}>
                    <ChevronRight />
                  </div>}

                </button>
              })
            }

          </div>
        </div>

      </div>
    </section >
  )
}

export default ClockTab

