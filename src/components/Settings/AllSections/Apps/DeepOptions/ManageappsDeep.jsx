
import React from 'react'
    import { useSelector} from 'react-redux'
import {CSS_EASING} from '../../../../../constants/Settings'
const ManageappsDeep = ({Name,Section,Device,fullScreen,Theme,ThemeColors,AccentColors}) => {
  
  const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
  
  return (
    <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`flex flex-col border border-blue-400 gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 px-[2.5%]'}`}>
       {Name}
      </div>
  )
}

export default ManageappsDeep