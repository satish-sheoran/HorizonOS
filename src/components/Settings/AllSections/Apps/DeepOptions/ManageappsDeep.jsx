
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'
import { EllipsisVertical, Search, SearchAlert, Ticket } from 'lucide-react';
import { ACCENT_COLORS } from '../../../../../constants/style';
import { ALL_APPS, OS_Storage } from '../../../../../constants';
import { toast } from 'react-toastify';
import { useDebounce } from '../../../../../utils/UseDebounce';

const ManageappsDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors }) => {

  // redux variables
  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
  const { TotalStorage, AppTotalStorage } = useSelector(store => store.Settings)

  //useStates
  const [isFocused, setisFocused] = useState(false) // to check if input is focused or blurred
  const [inputVal, setInputVal] = useState('') // used to access input value

  // variables
  const debouncedVal = useDebounce(inputVal, 300)
  const filteredApps = ALL_APPS.filter(({ name: AppName }) => AppName.toLowerCase().startsWith(debouncedVal.toLowerCase()))


  return (
    <section style={{
      fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }} className={`flex flex-col py-[2.5%] gap-2 select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto   px-[2.5%]'}`}>

      <div className=' mb-2 flex flex-col gap-0.5'>
        <span style={{
          fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={` font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
        <span style={{
          fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={`${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>View, Organize, and manage installed applications.</span>
      </div>

      {/* searchArea */}
      <div
        style={{
          backgroundColor: ThemeColors.header, color: ThemeColors.primaryText,
          borderColor: isFocused ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE : ThemeColors.third,
          transitionProperty: 'color, background-color, border-color',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation],
        }}
        className={`mb-2 border flex gap-2 py-2 rounded-2xl ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>

        <Search />
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
          spellCheck={false}
          placeholder="Search apps..."
          onFocus={() => setisFocused(true)}
          onBlur={() => setisFocused(false)}
          style={{
            fontSize: Device !== 'Desktop' ? `${(Sizes.Small.slice(0, -3)) * 1.2}rem` : `${(Sizes.Small.slice(0, -3))*1.1}rem`
            , color: ThemeColors.primaryText, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
          }}
        className={`w-full  font-semibold outline-none focus:ring-0 focus:border-0 focus:outline-none`}
        />
      </div>


      {
        filteredApps.length > 0 ?
          <div className={`mb-2 min-h-[10vh] grid gap-3 ${Device !== 'Desktop' ? 'grid-cols-2' : 'grid-cols-4'}`}>
            {
              filteredApps.map(({ name: App, icon, size, version }) => {
                return <div key={App}
                  style={{
                    backgroundColor: ThemeColors.header, borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }}
                  className={`border w-full rounded-2xl px-2 ${Device !=='Desktop'?'py-3':'py-2'} flex justify-between gap-0.5 items-center overflow-hidden`}>

                  <img
                    style={{
                      borderColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation],
                      transition : `width ${Speed} ${CSS_EASING[Animation]} , height ${Speed} ${CSS_EASING[Animation]}`
                    }}
                    className={`${(App !== 'Settings' && App !== 'Clock') ? 'border' : ''} rounded-2xl ${fullScreen?'w-10 h-10':'w-11.5 h-11.5'} object-cover object-center `} src={icon}
                    alt={App}
                  />

                  <div className={`flex flex-col gap-0.5`}>
                    <span style={{
                     fontSize :!fullScreen? Sizes.Small : `${(Sizes.Small.slice(0,-3))*0.8}rem`, color: ThemeColors.primaryText, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` font-semibold`}>{App}</span>
                    <span style={{
                     fontSize : !fullScreen ?Sizes.ExtraSmall :`${(Sizes.ExtraSmall.slice(0,-3))*0.8}rem`, color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }} >{size}</span>
                    <span style={{
                     fontSize :!fullScreen? Sizes.ExtraSmall:`${(Sizes.ExtraSmall.slice(0,-3))*0.8}rem` , color: ThemeColors.thirdText, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }} >{version}</span>
                  </div>

                  <button
                    onClick={() => toast.info('Coming Soon...')}
                    style={{
                      color: ThemeColors.secText, backgroundColor: ThemeColors.header, borderColor: ThemeColors.third, boxShadow: '0 1px 8px rgba(0,0,0,0.15)', transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }}
                    className={`border p-1 rounded-full active:scale-95 cursor-pointer `}>
                    <EllipsisVertical size={16} />
                  </button>

                </div>
              })
            }
          </div>
          :
          <div
            style={{
             fontSize : Sizes.Small, color: ThemeColors.secText,
              fontFamily: Weights.SemiBold,
              transitionProperty: 'color, background-color, border-color',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`mb-2 w-full h-[10vh] font-semibold flex items-center justify-center`}>
            No Such App Found!
          </div>
      }

      <div style={{
        backgroundColor: ThemeColors.header, color: ThemeColors.primaryText,
        borderColor: isFocused ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE : ThemeColors.third,
        transitionProperty: 'color, background-color, border-color',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation],
      }}
        className={`border flex flex-col gap-2 justify-center  rounded-2xl ${Device !== 'Desktop' ? 'px-3 py-3.5' : 'w-1/2 px-2.5 py-3.5'}`}>

        <div className={`flex ${Device !== 'Desktop' ? 'justify-between' : 'justify-center gap-5'}`}>

          <div className={`flex gap-3`}>
            <img className={`w-12 h-12 object-cover object-center`} src='/public/HorizonOS-Photoroom.png' alt="" />
            <div className={`flex flex-col gap-1`}>
              <span style={{fontSize :!fullScreen? `${(Sizes.Small.slice(0,-3))*0.85}rem` : `${(Sizes.Small.slice(0,-3))*0.7}rem`, color: ThemeColors.secText, fontFamily: Weights.SemiBold }} className={` font-semibold`}>Total Apps</span>
              <div className={`flex gap-1 items-baseline h-fit`}>

                <span style={{fontSize : `${(Sizes.Large.slice(0,-3))*1.2}rem`, color: ThemeColors.primaryText, fontFamily: Weights.SemiBold }} className={` font-semibold`}>{ALL_APPS.length}</span>
                <span style={{ fontSize : !fullScreen ?Sizes.ExtraSmall :`${(Sizes.ExtraSmall.slice(0,-3))*0.95}rem` ,color: ThemeColors.secText, fontFamily: Weights.SemiBold }} className={` font-semibold`}>apps</span>

              </div>
            </div>
          </div>

          <div style={{ color: ThemeColors.third }} className='h-full border-r'></div>

          <div className={`flex gap-5`}>
            <div className={`flex flex-col`}>
              <span style={{fontSize :!fullScreen? `${(Sizes.Small.slice(0,-3))*0.85}rem` : `${(Sizes.Small.slice(0,-3))*0.7}rem`, color: ThemeColors.secText, fontFamily: Weights.SemiBold }} className={`font-semibold`}>Storage Used</span>

              <div style={{ color: ThemeColors.primaryText, fontFamily: Weights.SemiBold }} className={`flex gap-1 items-baseline`}>
                <span style={{fontSize : Sizes.Large}} className={`font-semibold`}>{TotalStorage}</span>
                <span style={{fontSize : !fullScreen ?Sizes.ExtraSmall :`${(Sizes.ExtraSmall.slice(0,-3))*0.95}rem` }} className={`font-semibold`}>
                  {TotalStorage >= 1024 ? 'GB' : 'MB'}
                </span>
              </div>
              <span style={{fontSize :!fullScreen? `${(Sizes.Small.slice(0,-3))*0.85}rem` : `${(Sizes.Small.slice(0,-3))*0.7}rem`, color: ThemeColors.secText, fontFamily: Weights.SemiBold }} className={`font-semibold`}>of 8.00 GB</span>

            </div>

            {/* <div style={{ borderColor: ThemeColors.third }} className={`relative  border rounded-full aspect-square flex items-center justify-center`}>
              <div
                style={{
                  background: `conic-gradient(
                  ${ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE} ${Math.floor(TotalStorage / Number(OS_Storage.slice(0, -2)))}%
                 ,  ${ThemeColors.bg} ${Math.floor(TotalStorage / Number(OS_Storage.slice(0, -2)))}% )`
                }}
                className={`absolute inset-0 rounded-full`}></div>

              <div style={{ backgroundColor: ThemeColors.header, borderColor: ThemeColors.third }} className={`border absolute inset-2 rounded-full `}></div>

              <div style={{fontSize : Sizes.Small}} className=' absolute inset-0 flex items-center justify-center font-semibold'>{Math.floor(TotalStorage / Number(OS_Storage.slice(0, -2)))}%</div>

            </div> */}
          </div>

        </div>

      </div>



    </section>
  )
}

export default ManageappsDeep