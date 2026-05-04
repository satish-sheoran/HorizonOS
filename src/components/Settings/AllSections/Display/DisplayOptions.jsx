import React from 'react'
import { THEMES } from '../../../../constants'
import { Store } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../../../../redux/features/wallpaper'

const DisplayOptions = ({ Device, theme, fullScreen }) => {

const dispatch = useDispatch()

    return (
        <section className={`about-us-overflow-area flex flex-col ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto'}`}>

            {/* THEME SELECtION */}
            <div className={`setting-theme-div grid grid-cols-2 mb-4 gap-0 justify-between ${Device !== 'Desktop' ? 'w-full' : !fullScreen?'max-w-[calc(400px)]':'max-w-125'}`}>

                {THEMES.map(({ Theme }, idx) => {

                    return <div
                    onClick={()=>dispatch(changeTheme({theme : Theme}))}
                    key={idx} className={`${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'} flex flex-col p-2 gap-1.5 md:py-3 md:pl-3 aspect-square  ${fullScreen ? 'md:max-w-62.5 max-h-62.5' : 'md:max-w-50 md:max-h-50'}`}>

                        <img src={`/public/assets/theme-imgs/${Theme}-theme.webp`} className={`select-none w-full h-full object-cover object-center rounded-xl ${theme === Theme ? 'outline-(--text-currCat) outline-3' : ''}`} alt={`${Theme} theme`} />

                        <span className={`mx-auto font-bold first-letter:uppercase select-none`}>{Theme} mode</span>

                    </div>
                })}

            </div>


        </section>)
}

export default DisplayOptions