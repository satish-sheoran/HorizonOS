
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
          fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={` text-[0.8rem] font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
        <span style={{
          fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className={` text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>View, Organize, and manage installed applications.</span>
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
        className={`mb-2 border flex gap-2 py-1.5 rounded-2xl ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>

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
            color: ThemeColors.primaryText, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
          }}
          className={`w-full  font-semibold outline-none focus:ring-0 focus:border-0 focus:outline-none ${Device !== 'Desktop' ? 'text-[1rem]' : 'text-[0.85rem]'}`}
        />
      </div>


      {
        filteredApps.length > 0 ?
          <div className={`mb-2 min-h-[10vh] grid gap-3 ${Device !== 'Desktop' ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {
              filteredApps.map(({ name: App, icon, size, version }) => {
                return <div key={App}
                  style={{
                    backgroundColor: ThemeColors.header, borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                  }}
                  className={`border w-full rounded-2xl px-2 py-3 flex justify-between gap-1 items-center overflow-hidden`}>

                  <img
                    style={{
                      borderColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }}
                    className={`${(App !== 'Settings' && App !== 'Clock') ? 'border' : ''} rounded-2xl w-12 h-12 object-cover object-center `} src={icon}
                    alt={App}
                  />

                  <div className={`flex flex-col gap-0.5`}>
                    <span style={{
                      color: ThemeColors.primaryText, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`text-[0.82rem] font-semibold`}>{App}</span>
                    <span style={{
                      color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`text-[0.55rem] `}>{size}</span>
                    <span style={{
                      color: ThemeColors.thirdText, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                      transitionDuration: Speed,
                      transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`text-[0.55rem] `}>{version}</span>
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
              color: ThemeColors.secText,
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
              <span style={{ color: ThemeColors.secText, fontFamily: Weights.SemiBold }} className={`text-[0.65rem] font-semibold`}>Total Apps</span>
              <div className={`flex gap-1 items-baseline h-fit`}>

                <span style={{ color: ThemeColors.primaryText, fontFamily: Weights.SemiBold }} className={`text-[1.5rem] font-semibold`}>{ALL_APPS.length}</span>
                <span style={{ color: ThemeColors.secText, fontFamily: Weights.SemiBold }} className={`text-[0.65rem] font-semibold`}>apps</span>

              </div>
            </div>
          </div>

          <div style={{ color: ThemeColors.third }} className='h-full border-r'></div>

          <div className={`flex gap-5`}>
            <div className={`flex flex-col`}>
              <span style={{ color: ThemeColors.secText, fontFamily: Weights.SemiBold }} className={`text-[0.65rem] font-semibold`}>Storage Used</span>

              <div style={{ color: ThemeColors.primaryText, fontFamily: Weights.SemiBold }} className={`flex gap-1 items-baseline`}>
                <span className={`text-[1.5rem] font-semibold`}>{TotalStorage}</span><span className={`text-[0.65rem] font-semibold`}>
                  {TotalStorage >= 1024 ? 'GB' : 'MB'}
                </span>
              </div>
              <span style={{ color: ThemeColors.secText, fontFamily: Weights.SemiBold }} className={`text-[0.65rem] font-semibold`}>of 8.00 GB</span>

            </div>
            <div style={{borderColor : ThemeColors.third}} className={`relative  border rounded-full aspect-square flex items-center justify-center`}>
              <div
                style={{
                  background: `conic-gradient(
                  ${ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE} ${Math.floor(TotalStorage / Number(OS_Storage.slice(0, -2)))}%
                 ,  ${ThemeColors.bg} ${Math.floor(TotalStorage / Number(OS_Storage.slice(0, -2)))}% )`
                }}
                className={`absolute inset-0 rounded-full`}></div>

              <div style={{ backgroundColor: ThemeColors.header ,borderColor : ThemeColors.third}} className={`border absolute inset-2 rounded-full `}></div>

              <div className=' absolute inset-0 flex items-center justify-center text-[0.8rem] font-semibold'>{Math.floor(TotalStorage / Number(OS_Storage.slice(0, -2)))}%</div>

            </div>
          </div>

        </div>

      </div>



    </section>
  )
}

export default ManageappsDeep