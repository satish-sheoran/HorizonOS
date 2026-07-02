import React from 'react'
import { useSelector} from 'react-redux'
import {CSS_EASING} from '../../../../../constants/Settings'

const ResetsettingsDeep = ({ Name,Section, Device, fullScreen ,Theme,ThemeColors,AccentColors,DeepSubSection}) => {
  
  const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
  const {Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const {Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
  
  return (
    <div style={{fontFamily : Weights.SemiBold ,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`font-semibold flex flex-col border border-blue-400 gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 px-[2.5%]'}`}>
      {Name}
    </div>
  )
}

export default ResetsettingsDeep



