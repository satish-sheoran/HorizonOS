import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import { PROJECT_DETAILS} from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style'

const Details = ({Device,Theme,fullScreen,ThemeColors,AccentColors}) => {
    return (
        <div 
        style={{ backgroundColor : ThemeColors.header}}
        className={` about flex flex-col gap-4 p-[2.5%]  rounded-2xl `}>

            <div 
            style={{ color : ThemeColors.primaryText}}
            className={`flex gap-2 font-bold text-lg `}>
                <Monitor style={{ color : AccentColors.CODE}}  strokeWidth={2.5} />
                <span>About HorizonOS</span>
            </div>
            <div style={{color : ThemeColors.secText}} className={`font-[450] text-sm flex flex-col gap-4`}>
                <>
                {PROJECT_DETAILS?.[Device]?.map((para,index)=>{
                    return <span key={index}>{para}</span>
                })}
                </>
            </div>
        </div>)
}

export default Details