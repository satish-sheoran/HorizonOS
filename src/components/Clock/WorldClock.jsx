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
  const [ApiData, setApiData] = useState('');
  const [isLoading, setisLoading] = useState(false)
  const debounceInput = useDebounce(inputVal, 400)
  //refs
  const InputRef = useRef(null)

  useLayoutEffect(() => {

    const el = document.querySelector('#DetailElement');
    const width = el.getBoundingClientRect().width;

    setDetailElWidth(Math.floor(width))

  }, [fullScreen])

  useEffect(() => {
    if (!show) return;

    if (!InputRef.current.matches(':focus') && inputVal === '') InputRef.current.focus();  //checks if input is focused or not ,if not then focus it
  }, [show])

  //animation
  useEffect(() => {
    const el = document.querySelector('.ParentCl')
    if (!el) return;
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

  useEffect(() => { GetCities(debounceInput,setisLoading) }, [debounceInput])

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

        <div style={{ width: !fullScreen ? '100%' : `${DetailElWidth * 2}px` }}
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
              placeholder="Search City..."
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
                  AllElems.forEach((state) => {
                    Flip.from(state, {
                      ease: 'ease.out',
                      duration: 0.3,
                    })
                  })
                })
              }
              setShow(true)
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
            <span>{!show?'Add City':'Add Random City'}</span>
          </button>
        </div>

        {/* Result serch cities */}
        <div style={{
          borderColor: ThemeColors.third,
          // Avoiding using 100% bcz it causes GSAP Flip to 
          // Briefly stretch the elem on mobilr before animating
          width: !fullScreen ? '' : `${DetailElWidth * 2}px`,
          backgroundColor: ThemeColors.header,
          transitionProperty: 'color, background-color, border-color, font-size',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={`Cities-Div border rounded-2xl overflow-hidden select-none`}>

          {isLoading ? <div
            className='w-full flex items-center justify-center min-h-25'
          >
            <Loader />
          </div>
            :
            <div
              style={{
                backgroundColor: ThemeColors.header,
                borderColor: DeviceTheme !== 'dark' ? ThemeColors.third : ThemeColors.sec,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                  Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                  :
                  COMMON_COLORS.Gray, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
              }}
              className={`HOVER_CLASS flex justify-between items-center w-full ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
              {/* img and location */}
              <div className={`flex items-center gap-3`}>
                <img className={`rounded-full w-10 h-10  object-cover object-center`} src="/HorizonOS.svg" alt="" />
                <div className={`flex flex-col gap-0.5`}>
                  <span style={{
                    color: ThemeColors.primaryText, fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.95}rem`, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }}
                    className={`select-none`}
                  >New York</span>
                  <p style={{
                    color: ThemeColors.thirdText, fontSize: `${(Sizes.Small.slice(0, -3)) * 0.75}rem`, fontFamily: Weights.Regular, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }} className={`select-none flex gap-1`}>
                    <span>United Kingdom</span>
                    {Device != 'Mobile' && !fullScreen &&
                      <>• <span>Europe</span> </>}
                  </p>
                </div>
              </div>
              {/* Time */}
              <div className={`flex ${!fullScreen?'gap-3':'gap-5'}`}>
                <div className='flex flex-col gap-0.5'>
                  <p style={{
                    color: ThemeColors.primaryText, fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.85}rem`, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }} className={`select-none`}>10:30 AM</p>
                  <p style={{
                    color: ThemeColors.thirdText, fontSize: `${(Sizes.Small.slice(0, -3)) * 0.85}rem`, fontFamily: Weights.Regular, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }} className={`select-none`}>GMT +1</p>
                </div>
                <button style={{
                  fontSize: Sizes.Small,
                  fontFamily: Weights.SemiBold,
                  borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE,
                  color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE
                }}
                  className={`border h-fit  select-none w-fit py-2 px-4 cursor-pointer font-semibold rounded-xl active:scale-98`}>Add</button>
              </div>
            </div>
          }
        </div>

        {/* cities */}
        <div style={{
          borderColor: ThemeColors.third,
          // Avoiding using 100% bcz it causes GSAP Flip to 
          // Briefly stretch the elem on mobilr before animating
          width: !fullScreen ? '' : `${DetailElWidth * 2}px`,
          backgroundColor: ThemeColors.header,
          transitionProperty: 'color, background-color, border-color, font-size',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={`Cities-Div border rounded-2xl overflow-hidden select-none`}>

          {
            // just temporary data for showcase only
            [1, 2].map((val, idx) => {
              return <CityCard key={idx} />
            })}


        </div>


      </div>
    </section >
  )
}

export default WorldClock