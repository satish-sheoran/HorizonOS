import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const ToggleButton = ({ theme, action, performAction }) => {

    const isAutoTheme = useSelector((store) => store.wallpaper.isAutoTheme)


    return (
        <div
            onClick={performAction}
            className={`px-[3%] md:px-[2%] select-none font-semibold `}>

            <div className={`rounded-xl px-2 py-4 md:py-3 flex items-center justify-between ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--third-light-clr) active:bg-(--third-light-clr)' : 'text-(--primary-light-clr) hover:bg-(--color-gray) active:bg-(--color-gray)'}`}>

                <span>{action}</span>
                <button
                    className={`${isAutoTheme
                        ? 'bg-(--color-accent)'
                        : theme !== 'dark' ? 'bg-(--btn-light-hover)' : 'bg-(--sec-dark-clr)'
                        }
                     outline-none cursor-pointer relative  w-14 h-8 p-1.5  rounded-full transition-all duration-500 ease-out`}>

                    <div className={`${theme !== 'dark' ? 'bg-(--bg-light-window-header)' : 'bg-(--color-light-gray)'} theme-toggle-circle w-5 h-5 absolute top-1.5  rounded-full transition-all duration-300 ease-out
                    ${isAutoTheme
                            ? 'translate-x-6'
                            : 'translate-x-0'
                        }`}></div>

                </button>
            </div>

        </div>
    )
}

export default ToggleButton