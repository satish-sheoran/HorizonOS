import { ArrowLeft } from 'lucide-react'
import React from 'react'

const Toolbar = ({ performAction, Theme,ThemeColors,AccentColors }) => {

    return (
        <section className={`duration-500 ease-out w-full px-[2.5%] py-(--padding-sm) flex items-center justify-between  ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>

            <span className={`duration-500 ease-out active:scale-97 ${Theme !== 'dark'?'text-(--primary-dark-clr)':'text-(--primary-light-clr)'}`} onClick={performAction}>
                <ArrowLeft size={27} strokeWidth={2} className={`w-full h-full`} />
            </span>

        </section>
    )
}

export default Toolbar