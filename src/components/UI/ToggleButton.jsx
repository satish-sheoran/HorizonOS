import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const ToggleButton = ({ theme, action, performAction }) => {

    const isAutoTheme = useSelector((store) => store.wallpaper.isAutoTheme)


    return (
        <div
            className={`duration-500 ease-out select-none flex items-center justify-between  px-5 py-4 md:px-4 md:py-3 font-semibold ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--bg-light-app-body) active:bg-(--bg-light-app-body)' : 'text-(--primary-light-clr) hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr)'}`}>

            <span>{action}</span>
            <button
                onClick={performAction}
                className={`${isAutoTheme
                    ? 'bg-[#61AF56]'
                    : theme !== 'dark' ? 'bg-(--btn-light-hover)' : 'bg-(--primary-dark-clr)'
                    }
                     outline-none cursor-pointer relative  w-14 h-8 p-1.5  rounded-full transition-all duration-500 ease-out`}>

                <div className={`${theme !== 'dark' ? 'bg-(--bg-light-window-header)' : 'bg-(--color-ultra-light-gray)'} theme-toggle-circle w-5 h-5 absolute top-1.5  rounded-full transition-all duration-300 ease-out
                    ${isAutoTheme
                        ? 'translate-x-6'
                        : 'translate-x-0'
                    }`}></div>

            </button>

        </div>
    )
}

export default ToggleButton