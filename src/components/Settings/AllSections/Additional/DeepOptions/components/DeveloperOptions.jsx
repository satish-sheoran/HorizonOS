import * as Icons from 'lucide-react'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { ACCENT_COLORS, COMMON_COLORS } from '../../../../../../constants/style';
import { CSS_EASING } from '../../../../../../constants/Settings';
import { toast } from 'react-toastify';

const DeveloperOptions = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  //refs
  const DevOptionsParentRef = useRef({})


  return (
    <div className={`flex flex-col gap-4`}>
      <div className='flex flex-col gap-0.5'>
        <span style={{
          fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
        }} className={`font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
        <span style={{
          fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
        }} className={`${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Advanced settings for development, debugging and testing.</span>
      </div>

      {/* msg */}
      <div
        style={{
          borderColor: ThemeColors.third,
          backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').Bg_Clr
        }}
        className={`flex items-center justify-between border rounded-2xl overflow-hidden ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'}`}>
        <div className={`flex items-center gap-2 max-w-[85%]`}>
          <p
            style={{
              backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
              color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
              borderColor: ThemeColors.third
            }}
            className={`shrink-0 border flex items-center justify-center p-1.5 rounded-full overflow-hidden`}>
            <Icons.CodeXml size={18} strokeWidth={2.5} />
          </p>
          <div className={`flex flex-col gap-0.5`}>
            <span
              style={{
                fontSize: Sizes.Small,
                fontFamily: Weights.SemiBold,
                color: ThemeColors.primaryText
              }}>
              Use developer options for debugging and testing
            </span>
            <span
              style={{
                fontSize: Sizes.ExtraSmall,
                fontFamily: Weights.Regular,
                color: ThemeColors.thirdText,
              }}>
              These settings are for development only.
            </span>
          </div>
        </div>
        <p
          onClick={() => toast.info('Adding soon...')}
          style={{
            color: ThemeColors.primaryText,
          }}
          className={`shrink-0 flex items-center justify-center p-1.5 rounded-full overflow-hidden`}>
          <Icons.X size={18} strokeWidth={2.5} />
        </p>
      </div>

      {/* sections of different options */}
      {
        [
          {
            Section: 'Interface',
            options: [
              { isTrue: false, icon: 'ChartLine', iconColor: 'Green', option: 'Show FPS Counter', desc: 'Display frames per second in the top-left corner.' },
              { isTrue: true, icon: 'Gauge', iconColor: 'Red', option: 'Show Performance Monitor', desc: 'View CPU, memory and render performance.' },
              { isTrue: false, icon: 'SquareDashed', iconColor: 'Purple', option: 'Disable Animations', desc: 'Disable all system animations and transitions.' },
            ]
          },
          {
            Section: 'Logging & Debug',
            options: [
              { isTrue: true, icon: 'SquareChevronRight', iconColor: 'Blue', option: 'Enable Debug Logs', desc: 'Logs important system events to console.' },
              { isTrue: false, icon: 'FileDown', iconColor: 'Green', option: 'Export System State', desc: 'Download current state as JSON.' },
              { isTrue: true, icon: 'Store', iconColor: 'Purple', option: 'Redux DevTools ', desc: 'Inspect and debug Redux store.' },
            ]
          },
          {
            Section: 'Experiments',
            options: [
              { isTrue: true, icon: 'FlaskConical', iconColor: 'Orange', option: 'Enable Experimental Features', desc: 'Turn on features that are in development.' }
            ]
          }
        ].map(({ Section, options }, idx) => {
          return <div
            key={idx}
            ref={(el) => {
              if (el) {
                DevOptionsParentRef.current[Section] = el
              } else {
                delete DevOptionsParentRef.current[Section]
              }
            }}
            style={{
              backgroundColor: ThemeColors.header,
              borderColor: ThemeColors.third
            }}
            className={`flex flex-col gap-2 border rounded-2xl overflow-hidden ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'}`}>
            <span style={{
              fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.8}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
            }} className={`font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Section}</span>

            {options.map(({ icon, option, desc, iconColor, isTrue }, idx) => {
              const ICON = Icons[icon]
              return ICON && <div key={idx}
                style={{
                  borderColor: ThemeColors.third
                }}
                className={`flex border items-center justify-between rounded-2xl ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'} overflow-hidden`}
              >
                <div
                  className={`flex gap-1.5 items-center max-w-[83%]`}
                >
                  <p
                    style={{
                      color: ACCENT_COLORS?.find(({ COLOR }) => COLOR === iconColor)?.CODE ?? ThemeColors.primaryText,
                      // backgroundColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === iconColor)?.Bg_Clr ?? ThemeColors.header,
                      borderColor: ThemeColors.third
                    }}
                    className={`shrink-0  flex items-center justify-center p-1.5 rounded-lg overflow-hidden`}>
                    <ICON size={22} strokeWidth={2.5} />
                  </p>
                  <p className={`flex flex-col gap-0.5`}>
                    <span style={{
                      fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText
                    }}>{option}</span>
                    <span style={{
                      fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText
                    }}>{desc}</span>
                  </p>
                </div>
                <button
                  style={{
                    backgroundColor: isTrue ? Theme !== 'dark' ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE : COMMON_COLORS.Blue : ThemeColors.bg,
                  }}
                  className={`outline-none cursor-pointer relative  w-14 h-7 p-1.5  rounded-full `}>

                  <div style={{
                    backgroundColor: COMMON_COLORS.White,
                    transition: `transform 0.3s ${CSS_EASING[Animation]}`,
                    transform: `${isTrue ? 'translateX(1.5rem)' : 'translateX(0)'}`
                  }} className={`w-5 h-5 absolute top-1  rounded-full `}></div>

                </button>
              </div>
            })
            }
          </div>
        })
      }

      {/* reset btns */}
      <div
        style={{
          backdropFilter: 'blur(16px)',
          borderColor: COMMON_COLORS.DarkRed,
          backgroundColor: COMMON_COLORS.LightDarkRed
        }}
        className={`border flex gap-2 items-center justify-center rounded-2xl overflow-hidden ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'}`}>
        <p className={`flex gap-2 items-center ${Device !== 'Mobile' ? 'w-fit py-1.5 px-2.5' : 'py-2.5 grow max-w-1/2'}`}>

          <Icons.TriangleAlert
            style={{ color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE, }}
            strokeWidh={2.5}
          />
          <span style={{
            color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,
            fontFamily: Weights.SemiBold,
            fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 0.95}rem`,
          }}>Changes may affect system performance and stability.</span>
        </p>
        <p
          onClick={() => toast.info('Feature Coming soon...')}
          style={{
            backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,
            color: COMMON_COLORS.White,
            fontFamily: Weights.SemiBold,
            fontSize: Sizes.Small,
            borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr
          }}
          className={`active:scale-95 flex items-center justify-center gap-2 border rounded-2xl ${Device !== 'Mobile' ? 'w-fit py-1.5 px-2.5' : 'py-2.5 grow max-w-1/2'}`}>
          <Icons.RotateCw size={16} strokeWidh={2.5} />
          <span>Restore settings</span>
        </p>
      </div>


    </div>
  )
}

export default DeveloperOptions