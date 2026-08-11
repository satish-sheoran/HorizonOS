import * as Icons from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ACCENT_COLORS, COMMON_COLORS } from '../../../../../../constants/style';
import { CSS_EASING } from '../../../../../../constants/Settings';
import { toast } from 'react-toastify';
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';
import DevOpsSectionAndOptions from './DevOpsSectionAndOptions';
import DeletePopUp from '../../../../DeletePopUp';
import { RestoreDefaultDevOpsSettings } from '../../../../../../redux/features/SettingsSlice';
import { setAnimationTypeNSpeed } from '../../../../../../redux/features/wallpaper';

const DeveloperOptions = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

  const dispatch = useDispatch()
  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  // states
  const [openDeletePopUp, setopenDeletePopUp] = useState(false)

  //refs
  const DevOptionsParentRef = useRef({})
  const DevMsgRef = useRef(null)

  const UseRestoreDevOpsSettings = () => {
    dispatch(RestoreDefaultDevOpsSettings())
    dispatch(setAnimationTypeNSpeed({Animation : 'Normal'}))
  }

  return (
    <div className={`flex flex-col gap-4 overflow-x-hidden`}>
      <div className='flex flex-col gap-0.5'>
        <span style={{
          fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
        }} className={`font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
        <span style={{
          fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
        }} className={`${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Advanced settings for development, debugging and testing.</span>
      </div>

      {/* msg */}
      <div ref={DevMsgRef}
        style={{
          borderColor: ThemeColors.third,
          backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').Bg_Clr,
          '--hover': ThemeColors.third,
          '--active': Theme !== 'dark' ?
            Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
            :
            COMMON_COLORS.Gray,
        }}
        className={`HOVER_CLASS active:scale-97 flex items-center justify-between border rounded-2xl overflow-hidden ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'}`}>
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
          onClick={() => {
            const states = Flip.getState(Object.values(DevOptionsParentRef.current));
            const tl = gsap.timeline()
            tl.to(DevMsgRef.current, {
              xPercent: 105,
              duration: 0.35,
              ease: 'sine.out'
            }).to(DevMsgRef.current, {
              height: 0,
              padding: 0,
              opacity: 0,
              duration: 0.15,
              ease: 'sine.out'
            }).set(DevMsgRef.current, {
              display: 'none'
            }).add(() => {
              Flip.from(states, {
                ease: 'sine.out',
                duration: 0.5,
              })
            })



          }}
          style={{
            color: ThemeColors.primaryText,
          }}
          className={`shrink-0 flex items-center justify-center p-1.5 rounded-full overflow-hidden`}>
          <Icons.X size={18} strokeWidth={2.5} />
        </p>
      </div>

      {/* sections of different options */}
      <DevOpsSectionAndOptions
        Theme={Theme}
        ThemeColors={ThemeColors}
        AccentColors={AccentColors}
        DevOptionsParentRef={DevOptionsParentRef}
        Device={Device}
      />

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
            strokeWidth={2.5}
          />
          <span style={{
            color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,
            fontFamily: Weights.SemiBold,
            fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 0.95}rem`,
          }}>Changes may affect system performance and stability.</span>
        </p>
        <p
          onClick={() => setopenDeletePopUp(true)}
          style={{
            backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,
            color: COMMON_COLORS.White,
            fontFamily: Weights.SemiBold,
            fontSize: Sizes.Small,
            borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr
          }}
          className={`active:scale-95 flex items-center justify-center gap-2 border rounded-2xl ${Device !== 'Mobile' ? 'w-fit py-1.5 px-2.5' : 'py-2.5 grow max-w-1/2'}`}>
          <Icons.RotateCw size={16} strokeWidth={2.5} />
          <span>Restore settings</span>
        </p>
      </div>

      {openDeletePopUp === true && 
      <DeletePopUp
        DeleteTitle='Restore Default Settings?'
        DeleteDesc="Your other preferences won't be affected."
        openDeletePopUp={openDeletePopUp}
        setopenDeletePopUp={setopenDeletePopUp}
        Theme={Theme}
        AccentColors={AccentColors}
        ThemeColors={ThemeColors}
        performAction={UseRestoreDevOpsSettings}
      />
      }
    </div>
  )
}

export default DeveloperOptions