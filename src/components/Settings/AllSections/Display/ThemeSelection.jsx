import React from 'react'
import { useDispatch } from 'react-redux'

import { changeTheme } from '../../../../redux/features/wallpaper'
import { THEMES } from '../../../../constants'

const ThemeSelection = ({theme,fullScreen,Device}) => {

    const dispatch = useDispatch()
    
    return ( 
    <div className={`setting-theme-div grid grid-cols-2 mb-4 gap-0 justify-between ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'max-w-[calc(400px)]' : 'max-w-125'}`}>

            {THEMES.map(({ Theme }, idx) => {

                return <div
                    onClick={() => dispatch(changeTheme({ theme: Theme }))}
                    key={idx} className={`${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'} flex flex-col p-2 gap-1.5 md:py-3 md:pl-3 aspect-square  ${fullScreen ? 'md:max-w-62.5 max-h-62.5' : 'md:max-w-50 md:max-h-50'}`}>

                    <img src={`/public/assets/theme-imgs/${Theme}-theme.webp`} draggable="false" className={`select-none w-full h-full object-cover object-center rounded-xl ${theme === Theme ? 'outline-(--text-currCat) outline-4' : ''}`} alt={`${Theme} theme`} />

                    <span className={`mx-auto font-bold first-letter:uppercase select-none`}>{Theme} mode</span>

                </div>
            })}

        </div>
        )
}

export default ThemeSelection