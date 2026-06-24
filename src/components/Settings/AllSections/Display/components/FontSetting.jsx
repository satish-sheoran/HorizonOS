import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {setActivePanel} from '../../../../../redux/features/SettingsSlice'
import { toast } from 'react-toastify'
import { COMMON_COLORS } from '../../../../../constants/style'
import {CSS_EASING} from '../../../../../constants/settings'

const FontSetting = ({Option,fullScreen,Device,Theme,ThemeColors,AccentColors}) => {
    const dispatch = useDispatch();
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    
  return (
            <div 
             onClick={() => {
                // dispatch(setActivePanel({panel : Option}))
                                toast.info('This feature is currently under development. Stay tuned for updates!') 
            }
            }
            style={{
        color : ThemeColors.primaryText,
        borderColor: ThemeColors.bg,
              '--hover': ThemeColors.third,
              '--active': Theme !== 'dark' ?
                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                :
                COMMON_COLORS.Gray,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]
      }}
            className={`HOVER_CLASS active:scale-97  border select-none  font-semibold rounded-2xl  flex items-center justify-between 
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
`}>
                <span>{Option}</span>
                    <ChevronRight />
            </div>
         )
}

export default FontSetting