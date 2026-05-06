import { ChevronRight } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'

const FontSetting = ({theme}) => {
  return (
 <div
            onClick={() => {
                toast.info('Coming Soon !')
            }
            }
            className={`pl-[6%] md:pl-[4%] select-none  px-5 py-4 md:px-4 md:py-3 font-semibold ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--bg-light-window-header) active:bg-(--bg-light-window-header)' : 'text-(--primary-light-clr) hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr)'}`}>
            <div className='active:scale-98 flex items-center justify-between'>
                <span>Font settings</span>
                    <ChevronRight />
            </div>
        </div>  )
}

export default FontSetting