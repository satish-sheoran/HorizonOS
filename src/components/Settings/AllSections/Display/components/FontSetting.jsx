import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useDispatch} from 'react-redux'
import {setActivePanel} from '../../../../../redux/features/SettingsSlice'
import { toast } from 'react-toastify'
import { COMMON_COLORS } from '../../../../../constants/style'

const FontSetting = ({Option,fullScreen,Device,Theme,ThemeColors,AccentColors}) => {
    const dispatch = useDispatch();
  return (
            <div 
             onClick={() => {
                // dispatch(setActivePanel({panel : 'FontsettingsDeep'}))
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
                COMMON_COLORS.Gray
      }}
            className={`HOVER_CLASS active:scale-97 duration-500 ease-out border select-none  font-semibold rounded-2xl  flex items-center justify-between 
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
`}>
                <span>{Option}</span>
                    <ChevronRight />
            </div>
         )
}

export default FontSetting