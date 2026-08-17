import gsap from 'gsap'
import React, { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../constants/style'
import { Clock, Dot, EllipsisVertical, Minus, Plus, Search, SearchAlert, SlidersHorizontal, Trash2 } from 'lucide-react'


const MyWorldClocks = ({ setshowAddClockPage,startDeletingWorldClocks, setstartDeletingWorldClocks, AddedClocks, setAddedClocks }) => {

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


  //refs
  const WorldClockRef = useRef({})
  const deleteSymbols = useRef({})
  const deleteBoxes = useRef({})

  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // working on it
  // useGSAP(() => {
  //   if (!sortRef.current) return;

  //   gsap.fromTo(sortRef.current, {
  //     translateY: openSortSetting ? 0 : 1,
  //   }, {
  //     translateY: openSortSetting ? 1 : 0,
  //     duration: 0.2,
  //     ease: 'sine.out'
  //   })

  // }, [openSortSetting])

  return (
    <>
      {/* edit and Sort area */}
      <div className={`flex items-center justify-between w-full gap-2 mb-1`}>
        <p
          onClick={() => {
            if (!startDeletingWorldClocks) {
              const timeLine = gsap.timeline()
              timeLine.to(Object.values(WorldClockRef.current), {
                paddingLeft: '12%',
                duration: 0.2,
                ease: Animation ?? 'sine.inOut'
              }).to(Object.values(deleteSymbols.current), {
                scale: 1,
                opacity: 1,
                duration: 0.1,
                ease: 'sine.inOut'
              })
            } else {
              const timeLine = gsap.timeline()
              timeLine.to(Object.values(deleteSymbols.current), {
                scale: 0,
                opacity: 0,
                duration: 0.1,
                ease: 'sine.inOut'
              }).to(Object.values(WorldClockRef.current), {
                paddingLeft: '2.5%',
                duration: 0.2,
                ease: Animation ?? 'sine.inOut'
              })


              const tl2 = gsap.timeline()
              tl2.to(Object.values(deleteBoxes.current), {
                scale: 0,
                opacity: 0,
                duration: 0.1,
                ease: 'sine.inOut'
              }).to(Object.values(WorldClockRef.current), {
                paddingRight: '2.5%',
                duration: 0.2,
                ease: Animation ?? 'sine.inOut'
              })

            }
            setstartDeletingWorldClocks(old => !old)
          }}
          style={{
            color: ThemeColors.primaryText,
            backgroundColor: ThemeColors.header,
            borderColor: ThemeColors.third,
            fontSize: `${(Sizes.Small.slice(0, -3)) * 1.2}rem`,
            fontFamily: Weights.SemiBold
          }}
          className={`${AddedClocks.length > 0 ? '' : 'opacity-0'} border flex items-center justify-center rounded-2xl px-3 py-1`}>
          {startDeletingWorldClocks ? 'Cancel' : 'Edit'}
        </p>
        {/* sort button */}
        <p
                        onClick={() => setshowAddClockPage(true)}
                        style={{
                            color: ThemeColors.primaryText,
                            backgroundColor: ThemeColors.header,
                            borderColor: ThemeColors.third
                        }}
                        className={`border active:scale-95 rounded-full flex items-center justify-center w-10 h-10`}><Plus size={22} strokeWidth={2.5} /></p>
      </div>

      {/* added cities */}

      {AddedClocks.length > 0 ?
        AddedClocks?.map(({ city, countryCode, country,gmtOffset, timeZone }, idx) => {
          const time = new Intl.DateTimeFormat("en-US", {
            timeZone: timeZone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).format(now);
          return <section key={city} className={`relative select-none flex flex-col gap-2`}>
            <div
              ref={(el) => {
                if (el) {
                  WorldClockRef.current[city] = el
                } else {
                  delete WorldClockRef.current[city];
                }
              }}
              style={{
                borderColor: ThemeColors.third,
                backgroundColor: ThemeColors.header
              }}
              className={`relative border rounded-2xl overflow-hidden flex gap-4 items-center justify-between ${Device !== 'Desktop' ? `px-3 py-4` : `px-2.5 py-3.5`}`}>
              {/* - symbol */}
              <p
                onClick={() => {
                  const el = WorldClockRef.current[city]
                  const deleteBox = deleteBoxes.current[city]
                  if (!el || !deleteBox) return;

                  const timeLine = gsap.timeline()
                  timeLine.to(el, {
                    paddingRight: '17%',
                    duration: 0.2,
                    ease: Animation ?? 'sine.inOut'
                  }).to(deleteBox, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.1,
                    ease: 'sine.inOut'
                  })

                  const tl2 = gsap.timeline()
                  tl2.to(deleteSymbols.current[city], {
                    scale: 0,
                    opacity: 0,
                    duration: 0.1,
                    ease: 'sine.inOut'
                  }).to(WorldClockRef.current[city], {
                    paddingLeft: '2.5%',
                    duration: 0.2,
                    ease: Animation ?? 'sine.inOut'
                  })

                }}
                ref={(el) => {
                  if (el) {
                    deleteSymbols.current[city] = el
                  } else {
                    delete deleteSymbols.current[city];
                  }
                }}
                style={{
                  color: COMMON_COLORS.White,
                  backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr
                }} className={`absolute left-2 opacity-0 p-0.5 rounded-full active:scale-95`}>
                <Minus size={17} strokeWidth={2.5} />
              </p>
              <div className={`flex flex-col gap-0.5`}>
                <p style={{
                  color: ThemeColors.thirdText,
                  fontFamily: Weights.SemiBold,
                  fontSize: startDeletingWorldClocks ? `${(Sizes.ExtraSmall.slice(0, -3)) * 0.9}rem` : `${(Sizes.ExtraSmall.slice(0, -3)) * 1}rem`
                }} className={`flex gap-2`}>
                  <span>Today</span>
                  <span>{gmtOffset}</span>
                </p>
                <p style={{
                  color: ThemeColors.primaryText,
                  fontFamily: Weights.Bold,
                  fontSize: startDeletingWorldClocks ? `${(Sizes.ExtraLarge.slice(0, -3)) * 0.7}rem` : `${(Sizes.ExtraLarge.slice(0,-3))*0.8}rem`
                }}>{city}</p>
              </div>
              <div className={`flex gap-0.5 items-baseline`}>
                <span style={{
                  color: ThemeColors.primaryText,
                  fontFamily: Weights.SemiBold,
                  fontSize: startDeletingWorldClocks ? `${(Sizes.ExtraLarge.slice(0, -3)) * 0.9}rem` : `${(Sizes.ExtraLarge.slice(0,-3))*1}rem`
                }}>{time > 12 ? time - 12 : time}</span>
                
              </div>


            </div>
            <p
              ref={(el) => {
                if (el) {
                  deleteBoxes.current[city] = el
                } else {
                  delete deleteBoxes.current[city];
                }
              }}
              onClick={() => {
                delete deleteBoxes.current[city];
                delete WorldClockRef.current[city];
                delete deleteSymbols.current[city];
                WorldClockRef?.current[city]?.closest('section')?.remove()

                let old = [...AddedClocks]
                old.splice(idx, 1)
                setAddedClocks(old)
                if (EnableDebugLogs) console.log(`Timer Deleted`)

              }}
              style={{
                color: COMMON_COLORS.White,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr
              }}
              className={`absolute right-1.5 opacity-1 w-fit h-fit p-2.5 flex items-center justify-center rounded-full active:scale-95`}>
              <Trash2 size={25} strokeWidth={2.5} />
            </p>
          </section>
        })
        :
        <div className={`w-full h-full shrink-0 flex flex-col items-center justify-center gap-1`}>
          <p style={{
            fontFamily: Weights.SemiBold,
            color: ThemeColors.grayish,
            fontSize: `${(Sizes.Regular.slice(0, -3)) * 1.2}rem`
          }}>No World Clocks</p>
          <p style={{
            fontFamily: Weights.Regular,
            color: ThemeColors.grayish,
            fontSize: Sizes.Small
          }}>
            Tap <span style={{
              fontFamily: Weights.SemiBold,
            }}>+ </span>
            to add a clock.
          </p>
        </div>
      }
    </>
  )
}

export default MyWorldClocks