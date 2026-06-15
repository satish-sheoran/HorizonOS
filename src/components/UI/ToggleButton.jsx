import { ChevronRight } from 'lucide-react'
import React from 'react'

const ToggleButton = ({ Device,Theme, action, performAction, isActionActive ,ThemeColors,AccentColors}) => {

    return (
            <div
                onClick={performAction}
                className={`active:scale-97 border duration-500 ease-out select-none font-semibold  rounded-2xl flex items-center justify-between 
                ${Device !== 'Desktop' ? `px-3 py-2.5` : `px-2.5 py-2`}
             ${Theme !== 'dark' ? `text-(--primary-dark-clr) border-(--color-lightDarkish-white) hover:bg-(--third-light-clr)  ${Device !=='Desktop'?'active:bg-(--third-light-clr)':'active:bg-(--primary-light-clr)'}` : 'text-(--primary-light-clr) border-(--bg-dark-app-body) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}
                `}>

                <span>{action}</span>
                <button
                    className={`${isActionActive
                        ? 'bg-(--color-accent)'
                        : Theme !== 'dark' ? 'bg-(--btn-light-hover)' : 'bg-(--sec-dark-clr)'
                        }
                     outline-none cursor-pointer relative  w-14 h-7 p-1.5  rounded-full transition-all duration-500 ease-out`}>

                    <div className={`bg-(--primary-light-clr) theme-toggle-circle w-5 h-5 absolute top-1  rounded-full transition-all duration-300 ease-out
                    ${isActionActive
                            ? 'translate-x-6'
                            : 'translate-x-0'
                        }`}></div>

                </button>
            </div>

       
    )
}

export default ToggleButton