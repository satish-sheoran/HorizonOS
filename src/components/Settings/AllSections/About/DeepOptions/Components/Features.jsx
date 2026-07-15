import React from 'react'
import * as Icons from "lucide-react";
import { ClockFading, Expand, Layers, Star, MonitorSmartphone, LineSquiggle, MousePointer2 } from 'lucide-react'
import { SETTINGS_FEATURES, CSS_EASING } from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style';
import { useSelector } from 'react-redux'

const Features = ({ Device, Theme, fullScreen, ThemeColors, AccentColors }) => {

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


  return (
    <div style={{
      borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
      transitionDuration: Speed,
      transitionTimingFunction: CSS_EASING[Animation]
    }} className={`border features flex flex-col gap-4 p-[2.5%] rounded-2xl`}>
      <div style={{
        color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className={`flex gap-2  text-lg`}>
        <Star style={{
          color: AccentColors.CODE, transitionProperty: 'color, background-color, border-color, font-size',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} strokeWidth={2.5} />
        <span style={{
          fontSize: Sizes.Regular, fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color, font-size',
          transitionDuration: Speed,
          transitionTimingFunction: CSS_EASING[Animation]
        }} className='font-semibold'>Features</span>
      </div>


      <div style={{
        transitionProperty: 'color, background-color, border-color, font-size',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className={`grid ${Device !== 'Desktop' ? 'grid-cols-2' : 'grid-cols-3'} gap-3`}>


        {/* All features  */}
        {SETTINGS_FEATURES.map(({ Feat_Title, Feat_Desc, icon }, index) => {
          const Icon = Icons[icon]

          return <div key={index}
            style={{
              borderColor: ThemeColors.bg,
              color: Theme !== 'dark' ? ThemeColors.primaryText : ThemeColors.secText,
              '--hover': ThemeColors.third,
              '--active': Theme !== 'dark' ?
                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                :
                COMMON_COLORS.Gray, transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation]

            }}
            className={`HOVER_CLASS  hover:scale-105 active:scale-105 overflow-hidden border text-sm rounded-2xl flex gap-3 justify-center items-center 
            ${Device !== 'Desktop' ? `py-2` : `py-1.5 `}
              `}>
            <div style={{
              backgroundColor: AccentColors.Bg_Clr, color: AccentColors.CODE, transitionProperty: 'color, background-color, border-color, font-size',
              transitionDuration: Speed,
              transitionTimingFunction: CSS_EASING[Animation]
            }} className={`rounded-full p-2`}>
              {Icon && <Icon strokeWidth={2} className='shrink-0' />}

            </div>
            <div className='w-[60%]  flex flex-col gap-0.5 items-start '>
              <span style={{ fontSize: Sizes.Small, fontFamily: Weights.SemiBold }} className='font-semibold'>{Feat_Title.split(' ').map((word,idx) => {
                return <div key={idx}>
                  <span>{word}</span>
                  <br />
                </div>
              })}</span>
              <span style={{
                fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
              }} > {Feat_Desc} </span>

            </div>
          </div>

        })}

      </div>
    </div>
  )
}

export default Features