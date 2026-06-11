import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import { PROJECT_DETAILS} from '../../../../../../constants/Settings'

const Details = ({Device,theme,fullScreen}) => {
    return (
        <div className={` about flex flex-col gap-4 p-[2.5%]  rounded-2xl ${theme !=='dark'?'bg-(--primary-light-clr)':'bg-(--bg-dark-header)'}`}>

            <div className={`flex gap-2 font-bold text-lg 
            ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}
            `}>
                <Monitor className={`text-(--color-accent)`}  strokeWidth={2.5} />
                <span>About HorizonOS</span>
            </div>
            <div className={`font-[450] text-sm flex flex-col gap-4 ${theme != 'dark' ? "text-(--sec-dark-clr)" : "text-(--sec-light-clr)"}`}>
                <>
                {PROJECT_DETAILS?.[Device]?.map((para,index)=>{
                    return <span key={index}>{para}</span>
                })}
                </>
            </div>
        </div>)
}

export default Details