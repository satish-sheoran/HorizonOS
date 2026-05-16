import { ChevronRight } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'
import {useDispatch} from 'react-redux'
import {setActivePanel} from '../../../../../redux/features/SettingsSlice'


const UninstallApps = ({value,fullScreen,Device,theme}) => {
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => {
                                // dispatch(setActivePanel({panel : 'UninstallappsDeep'}))

                toast.info('This feature is currently under development. Stay tuned for updates!')
            }
            }
            className={`px-[3%] md:px-[2%]  select-none  font-semibold `}>

            <div className={`rounded-xl px-2 py-4 md:py-3  flex items-center justify-between ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--third-light-clr) active:bg-(--third-light-clr)' : 'text-(--primary-light-clr) hover:bg-(--color-gray) active:bg-(--color-gray)'}`}>
                <span>{value}</span>
                    <ChevronRight />
            </div>
        </div>
        )
}

export default UninstallApps