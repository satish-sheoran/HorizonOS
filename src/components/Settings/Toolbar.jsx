import { ArrowLeft } from 'lucide-react'
import React from 'react'

const Toolbar = ({ setShowContent, theme }) => {

    return (
        <section className={`w-full px-[2.5%] py-(--padding-sm) flex items-center justify-between  ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>

            <span className={`active:scale-97 ${theme !== 'dark'?'text-(--primary-dark-clr)':'text-(--primary-light-clr)'}`} onClick={() => setShowContent(false)}>
                <ArrowLeft strokeWidth={2} className={`w-full h-full`} />
            </span>

        </section>
    )
}

export default Toolbar