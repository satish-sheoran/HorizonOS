import { ChevronRight } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'

const DarkOptions = ({theme}) => {
    return (
        <div
            onClick={() => {
                toast.info('Coming Soon !')
            }
            }
            className={`duration-500 ease-out select-none  px-5 py-4 md:px-4 md:py-3 font-semibold ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--bg-light-app-body) active:bg-(--bg-light-app-body)' : 'text-(--primary-light-clr) hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr)'}`}>
            <div className='active:scale-98 flex items-center justify-between'>
                <span>Dark mode options</span>
                <span className={`'text-(--sec-light-clr)'}`}>
                    <ChevronRight />
                </span>
            </div>
        </div>)
}

export default DarkOptions