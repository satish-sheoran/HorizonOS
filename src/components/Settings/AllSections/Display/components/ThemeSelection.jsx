import React from 'react'
import { useDispatch } from 'react-redux'

import { changeTheme } from '../../../../../redux/features/wallpaper'
import { THEMES } from '../../../../../constants'

const ThemeSelection = ({ theme, fullScreen, Device }) => {

    const dispatch = useDispatch()

    return (
        <div className='w-full  mb-1.5'>

            <div className={`setting-theme-div grid grid-cols-2 md:flex  ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'max-w-100' : 'max-w-125'}`}>

                {THEMES.map(({ Theme }, idx) => {

                    return <div
                        key={idx} className={`${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'} flex flex-col p-2 gap-2.5 md:py-3 md:pl-3`}>

                        <img
                            onClick={() => dispatch(changeTheme({ theme: Theme }))}
                            src={`/assets/theme-imgs/${Theme}-theme.webp`} draggable="false" className={`select-none object-cover object-center rounded-xl ${theme === Theme ? 'outline-(--color-accent) outline-4' : ''} 
                            aspect-square  ${fullScreen ? 'md:max-w-45 max-h-45' : 'md:max-w-40 md:max-h-40'}
                            `} alt={`${Theme} theme`} />

                        <span className={`mx-auto font-bold first-letter:uppercase select-none`}>{Theme} mode</span>

                    </div>
                })}

            </div>
        </div>

    )
}

export default ThemeSelection