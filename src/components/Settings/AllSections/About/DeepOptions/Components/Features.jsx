import React from 'react'
import * as Icons from "lucide-react";
import { ClockFading, Expand, Layers, Star, MonitorSmartphone, LineSquiggle, MousePointer2 } from 'lucide-react'
import { SETTINGS_FEATURES,CSS_EASING } from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style';
import { useSelector} from 'react-redux'

const Features = ({ Device, Theme, fullScreen, ThemeColors, AccentColors }) => {
  const {Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
      const {Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
  return (
    <div style={{ backgroundColor: ThemeColors.header }} className={`features flex flex-col gap-4 p-[2.5%] rounded-2xl`}>
      <div style={{ color: ThemeColors.primaryText }} className={`flex gap-2 font-bold text-lg`}>
        <Star style={{ color: AccentColors.CODE }} strokeWidth={2.5} />
        <span>Features</span>
      </div>


      <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`grid ${Device !== 'Desktop' ? 'grid-cols-2' : 'grid-cols-3'} gap-3`}>


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
                COMMON_COLORS.Gray,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]

            }}
            className={`HOVER_CLASS  hover:scale-105 active:scale-105 overflow-hidden border text-sm rounded-2xl flex gap-3 justify-center items-center 
            ${Device !== 'Desktop' ? `py-2` : `py-1.5 font-semibold`}
              `}>
            <div style={{ backgroundColor: AccentColors.Bg_Clr , color : AccentColors.CODE,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} className={`rounded-full p-2`}>
              {Icon && <Icon strokeWidth={2} className='shrink-0' />}

            </div>
            <div className='w-[60%]  flex flex-col items-start '>
              <span className='font-bold'>{Feat_Title.split(' ').map((word) => {
                return <>
                  <span>{word}</span>
                  <br />
                </>
              })}</span>
              <span style={{ color : ThemeColors.grayish,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`text-[0.545rem]`}> {Feat_Desc} </span>

            </div>
          </div>

        })}

      </div>
    </div>
  )
}

export default Features