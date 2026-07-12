import React, { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
import { ACCENT_COLORS } from '../../constants/style'
import { Plus, Search } from 'lucide-react'
import CityCard from './Components/CityCard'
import WorldClockTitleAndDesc from './Components/WorldClockTitleAndDesc'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

const WorldClock = ({ ClockAllTabsHeight, ClockAllTabsWidth, Name, Description }) => {

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

  //useStates
  const [DetailElWidth, setDetailElWidth] = useState(0) //to calculate width of selected element
  const [inputVal, setInputVal] = useState('') //to get input val
  const [isFocused, setisFocused] = useState(false) //to check if input is focused
  const [show, setShow] = useState(false)
  //refs
  const InputRef = useRef(null)

  useLayoutEffect(() => {

    const el = document.querySelector('#DetailElement');
    const width = el.getBoundingClientRect().width;

    setDetailElWidth(Math.floor(width))

  }, [fullScreen])

  //animation
  useLayoutEffect(() => {
    const el = document.querySelector('.ParentCl')

    Device === 'Mobile' ?
      gsap.fromTo(el, {
        scaleY: 0,
        transformOrigin: 'top center'
      }, {
        scaleY: 1,
        transformOrigin: 'top center',
        duration: 0.3,
        ease: 'ease.out',
      })
      :
      gsap.fromTo(el, {
        scaleX: 0,
        transformOrigin: 'left center'
      }, {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 0.3,
        ease: 'ease.out',
      })
  }, [show, Device])

  return (
    <section style={{
      paddingBottom: `${Math.floor(ClockAllTabsHeight) * 1.1}px`,
      backgroundImage: `url(${'/public/world.svg'})`,
      transitionProperty: 'color, background-color, border-color, font-size',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }}
      className={`bg-cover bg-center overflow-cloclTab w-full h-full grow px-[2.5%] pt-[1.5%] overflow-y-auto overflow-x-hidden flex flex-col gap-2`}>


      <div className={`mt-2 flex flex-col gap-2`}>
        {/* Title and desc */}
        <WorldClockTitleAndDesc Name={Name} Description={Description} />

        <div style={{ width: !fullScreen ? '100%' : `${DetailElWidth * 1.5}px` }}
          className={`${Device === 'Mobile' ? 'flex flex-col' : `grid ${fullScreen ? show ? 'grid-cols-[6fr_4fr]' : 'grid-cols-1' : show ? 'grid-cols-[7fr_3fr]' : 'grid-cols-1'}`}  gap-2`}
        >
          {/* searchArea */}
          {show && <div
            style={{
              backgroundColor: ThemeColors.header, color: ThemeColors.primaryText,
              borderColor: isFocused ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE : ThemeColors.third,
              transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation],
            }}
            className={`ParentCl border flex gap-2 py-2 rounded-2xl ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}  grow`}>

            <Search strokeWidth={2} />
            <input
              ref={InputRef}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              type="text"
              spellCheck={false}
              placeholder="Search apps..."
              onFocus={() => setisFocused(true)}
              onBlur={() => setisFocused(false)}
              style={{
                fontSize: Device !== 'Desktop' ? `${(Sizes.Small.slice(0, -3)) * 1.2}rem` : `${(Sizes.Small.slice(0, -3)) * 1.1}rem`
                , color: ThemeColors.primaryText, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
              }}
              className={`w-full  font-semibold outline-none focus:ring-0 focus:border-0 focus:outline-none`}
            />
          </div>}

          {/* Add city button */}
          <button
            onClick={() => {
              const AllElems = []
              const AddBtn = document.querySelector('.AddBtn')
              const CitiesDiv = document.querySelector('.Cities-Div')
              AllElems.push(Flip.getState(AddBtn))  //finidng their postion before shift
              AllElems.push(Flip.getState(CitiesDiv)) //finidng their postion before shift


              // shifting postion with a smooth animation
              {
                !show && requestAnimationFrame(() => {
                  AllElems.map((state) => {
                    Flip.from(state, {
                      ease: 'ease.out',
                      duration: 0.3,
                    })
                  })
                })
              }
              setShow(true)

              if (!InputRef.current.matches(':focus') && inputVal === '') InputRef.current.focus();  //checks if input is focused or not ,if not then focus it

            }}
            style={{
              borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
              fontSize: Device !== 'Desktop' ? `${(Sizes.Small.slice(0, -3))}rem` : `${(Sizes.Small.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.SemiBold,
              color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
              backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
              transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`AddBtn border select-none w-full flex gap-1 items-center justify-center cursor-pointer font-semibold rounded-2xl active:scale-98 ${Device === 'Mobile' ? 'p-3' : 'p-2'}  `}>
            <Plus strokeWidth={2} />
            <span>Add City</span>
          </button>
        </div>


        {/* cities */}
        <div style={{
          borderColor: ThemeColors.third,
          // Avoiding using 100% bcz it causes GSAP Flip to 
          // Briefly stretch the elem on mobilr before animating
          width: !fullScreen ? '' : `${DetailElWidth * 1.5}px`,
          backgroundColor: ThemeColors.header,
          transitionProperty: 'color, background-color, border-color, font-size',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={`Cities-Div border rounded-2xl overflow-hidden select-none`}>
          {
            // just temporary data for showcase only
            [1, 2].map((val, idx) => {
              return <>
                <CityCard key={idx} />
                <hr
                  style={{
                    borderColor: ThemeColors.sec, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }}
                  className={`w-8/10 mx-auto`} />
              </>
            })}


        </div>


      </div>
    </section >
  )
}

export default WorldClock