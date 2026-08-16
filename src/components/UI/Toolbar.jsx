import { ArrowLeft } from 'lucide-react'
import React from 'react'

const Toolbar = ({ performAction, Theme, ThemeColors, AccentColors }) => {


    return (
        <section style={{
            color: ThemeColors.primaryText, 
        }} className={` w-full px-[2.5%] py-(--padding-sm) flex items-center justify-between `}>

            <span style={{
                color: ThemeColors.primaryText, 
            }} className={`active:scale-95`} onClick={performAction}>
                <ArrowLeft size={27} strokeWidth={2} className={`w-full h-full`} />
            </span>

        </section>
    )
}

export default Toolbar