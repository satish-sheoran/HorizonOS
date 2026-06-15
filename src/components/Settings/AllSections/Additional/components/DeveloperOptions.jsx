import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { setActivePanel } from '../../../../../redux/features/SettingsSlice'


const DeveloperOptions = ({ Theme, value, fullScreen, Device,ThemeColors,AccentColors }) => {
  const dispatch = useDispatch();

  return (
      <div
       onClick={() => {
        // dispatch(setActivePanel({ panel: 'DeveloperoptionsDeep' }))
        toast.info('Coming Soon !')
      }
      }
      className={`active:scale-97 duration-500 ease-out border select-none  font-semibold rounded-2xl  flex items-center justify-between $
            ${Device !== 'Desktop' ? `p-3` : `p-2.5`}

             ${Theme !== 'dark' ?`text-(--primary-dark-clr) border-(--color-lightDarkish-white) hover:bg-(--third-light-clr)  ${Device !=='Desktop'?'active:bg-(--third-light-clr)':'active:bg-(--primary-light-clr)'}` : 'text-(--primary-light-clr) border-(--bg-dark-app-body) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}`}>
        <span>{value}</span>
        <ChevronRight />
      </div>
  )
}

export default DeveloperOptions