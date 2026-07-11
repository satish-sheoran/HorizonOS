import React, { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
import { ACCENT_COLORS } from '../../constants/style'
import { Plus, Search } from 'lucide-react'
import CityCard from './Components/CityCard'

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

  //refs
  const InputRef = useRef(null)

  useLayoutEffect(() => {

    const el = document.querySelector('#DetailElement');
    const width = el.getBoundingClientRect().width;

    setDetailElWidth(Math.floor(width))

  }, [fullScreen])


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
        <div className={`flex justify-between items-center`}>
          <div id='DetailElement' className='flex flex-col gap-0.5'>
            <span style={{
              fontSize: `${(Sizes.Small.slice(0, -3)) * 1.3}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation]
            }} className={`select-none font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>{Name} </span>
            <span style={{
              fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation]
            }} className={`select-none ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
              {Description}
            </span>
          </div>
          <button
            style={{
              fontFamily: Weights.SemiBold,
              color: AccentColors.CODE,
              transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation]
            }}
            className='select-none font-semibold active:scale-95'>
            <span style={{ fontSize: Sizes.Regular }}>Edit</span>
          </button>
        </div>

        <div style={{ width: !fullScreen ? '100%' : `${DetailElWidth * 1.5}px` }}
          className={`${Device === 'Mobile' ? 'flex flex-col' : `grid ${fullScreen ? 'grid-cols-[6fr_4fr]' : 'grid-cols-[7fr_3fr]'}`}  gap-2`}
        >
          {/* searchArea */}
          <div
            style={{
              backgroundColor: ThemeColors.header, color: ThemeColors.primaryText,
              borderColor: isFocused ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE : ThemeColors.third,
              transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation],
            }}
            className={`border flex gap-2 py-2 rounded-2xl ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}  grow`}>

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
          </div>
          {/* Add city button */}
          <button
            onClick={() => {
              if (!InputRef.current.matches(':focus')) InputRef.current.focus() //checks if input is focused or not ,if not then focus it
            }}
            style={{
              borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
              fontSize: `${(Sizes.Small.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.SemiBold,
              color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
              backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
              transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`border select-none w-full flex gap-1 items-center justify-center cursor-pointer font-semibold rounded-2xl active:scale-98 ${Device === 'Mobile' ? 'p-3' : 'p-2'}  `}>
            <Plus strokeWidth={2} />
            <span>Add City</span>
          </button>
        </div>


        {/* cities */}
        <div style={{
          borderColor: ThemeColors.third,
          width: !fullScreen ? '100%' : `${DetailElWidth * 1.5}px`,
          backgroundColor: ThemeColors.header,
          transitionProperty: 'color, background-color, border-color, font-size',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={`border rounded-2xl overflow-hidden select-none`}>
          {
            [1, 2].map((val, idx) => {
              return <>
                <CityCard key={idx} />
                <hr
                  style={{
                    borderColor: ThemeColors.sec, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }}
                  className={` w-8/10 mx-auto`} />
              </>
            })}


        </div>


      </div>
    </section >
  )
}

export default WorldClock