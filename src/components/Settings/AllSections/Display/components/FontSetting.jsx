import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useDispatch} from 'react-redux'
import {setActivePanel} from '../../../../../redux/features/SettingsSlice'
import { toast } from 'react-toastify'

const FontSetting = ({theme ,value,fullScreen,Device}) => {
    const dispatch = useDispatch();
  return (
 <div
            className={`select-none  font-semibold `}>

            <div 
             onClick={() => {
                // dispatch(setActivePanel({panel : 'FontsettingsDeep'}))
                                toast.info('This feature is currently under development. Stay tuned for updates!')
                
            }
            }
            className={`rounded-xl px-2 py-4 md:py-3 flex items-center justify-between ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--third-light-clr) active:bg-(--third-light-clr)' : 'text-(--primary-light-clr) hover:bg-(--color-gray) active:bg-(--color-gray)'}`}>
                <span>{value}</span>
                    <ChevronRight />
            </div>
        </div>  )
}

export default FontSetting