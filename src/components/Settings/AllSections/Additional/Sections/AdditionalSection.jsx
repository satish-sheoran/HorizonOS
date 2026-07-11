import React from 'react'
import ResetSettings from '../components/ResetSettings'
import DeveloperOptions from '../components/DeveloperOptions'
import ToggleButton from '../../../../UI/ToggleButton'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'
const ADDITINAL_OPTIONS = {
  ResetSettings,
  DeveloperOptions
}

const AdditionalSection = ({ Theme, Device, fullScreen, GrandParentSection, Options, Section, ThemeColors, AccentColors }) => {

  const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  return (
    <div className={`flex flex-col w-full  gap-2`}>

      <span style={{
       fontSize : Sizes.Small, fontFamily: Weights.Regular, color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color, font-size',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className='select-none'>{Section}</span>

      {/* DISPLAYING ALL OPTIONS OF ADDITIONAL SECTIONS*/}
      <div style={{
       borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
        transitionDuration: Speed,
        transitionTimingFunction: CSS_EASING[Animation]
      }} className={`border w-full p-[2.5%] flex flex-col rounded-2xl  gap-2`}>
        {
          Options?.map(({ Option, FileName, Toggleable, action }, idx) => {
            const Component = ADDITINAL_OPTIONS[FileName];

            if (!Component) return null;
            if (Toggleable) {
              return <ToggleButton
                key={idx}
                Theme={Theme}
                action={Option}
                performAction={action}
                Device={Device}
                isActionActive={''}
                ThemeColors={ThemeColors}
                AccentColors={AccentColors}
              />
            }
            return <Component
              key={idx}
              Theme={Theme}
              Option={Option}
              fullScreen={fullScreen}
              Device={Device}
              ThemeColors={ThemeColors}
              AccentColors={AccentColors}
            />
          })
        }
      </div>

    </div >
  )
}

export default AdditionalSection