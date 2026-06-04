import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useDispatch} from 'react-redux'
import {setActivePanel} from '../../../../../redux/features/SettingsSlice'
import { toast } from 'react-toastify'

const FontSetting = ({theme ,value,fullScreen,Device}) => {
    const dispatch = useDispatch();
  return (
            <div 
             onClick={() => {
                // dispatch(setActivePanel({panel : 'FontsettingsDeep'}))
                                toast.info('This feature is currently under development. Stay tuned for updates!')
                
            }
            }
            className={`duration-500 ease-out border select-none  font-semibold rounded-2xl  flex items-center justify-between 
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}

             ${theme !== 'dark' ? 'text-(--primary-dark-clr) border-(--color-lightDarkish-white) hover:bg-(--third-light-clr)  active:bg-(--primary-light-clr)' : 'text-(--primary-light-clr) border-(--bg-dark-app-body) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}`}>
                <span>{value}</span>
                    <ChevronRight />
            </div>
         )
}

export default FontSetting