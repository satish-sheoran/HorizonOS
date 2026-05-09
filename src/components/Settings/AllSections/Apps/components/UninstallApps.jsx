import { ChevronRight } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'

const UninstallApps = ({value,fullScreen,Device,theme}) => {
    return (
        <div
            onClick={() => {
                toast.info('Coming Soon !')
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