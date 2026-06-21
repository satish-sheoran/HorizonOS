import React from 'react'
import * as Icons from 'lucide-react'
import { AnimationsName, OS_NAME } from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { useDispatch, useSelector } from 'react-redux'
import { setAnimationName } from '../../../../../../redux/features/wallpaper'

const AnimationName = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {
    
    const dispatch = useDispatch()
    const {Name : DisplayAnimName,Animation } = useSelector(store => store.wallpaper.AnimationName)

    return (
        <div className={`mt-2 flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{ color: ThemeColors.primaryText }} className={`ease-out duration-500 text-[0.8rem] font-bold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{ color: ThemeColors.thirdText }} className={`ease-out duration-500 text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose how animations move and feel throughout {OS_NAME}.</span>
            </div>

            <div style={{ backgroundColor: ThemeColors.header }} className={`flex flex-col gap-2 rounded-2xl duration-500 ease-out select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`} >

                {AnimationsName.map(({ Name, Animation, icon, description }, idx) => {
                    const Icon = Icons[icon]
                    return <button key={idx}
                    onClick={()=>dispatch(setAnimationName({Animation : Name}))}
                        style={{
                            borderColor: DisplayAnimName===Name ? AccentColors.CODE :ThemeColors.bg,
                            color: ThemeColors.primaryText,
                            '--hover': ThemeColors.third,
                            '--active': Theme !== 'dark' ?
                                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                :
                                COMMON_COLORS.Gray
                        }}
                        className={`outline-none overflow-hidden HOVER_CLASS active:scale-97 border rounded-2xl duration-500 ease-out select-none flex justify-between items-center ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}
                    >
                        <div className={`flex items-center gap-3`}>
                            {Icon && <Icon style={{color : DisplayAnimName===Name ? AccentColors.CODE : ThemeColors.primaryText}} strokeWidth={2} />}
                            <div className={`flex flex-col gap-0.5 text-left`}>
                                <span className={`font-bold text-[0.8rem] duration-500 ease-out`}>{Name}</span>
                                <span style={{ color: ThemeColors.grayish }} className={`font-semibold text-[0.55rem] duration-500 ease-out`}>{description}</span>
                            </div>
                        </div>
                        <div style={{ borderColor:ThemeColors.bg ,backgroundColor : DisplayAnimName===Name ? AccentColors.CODE : ''}} className={`${DisplayAnimName===Name ? '':'border'}  w-6 h-6 rounded-full duration-500 ease-out flex justify-center items-center`}>
                           {DisplayAnimName===Name && <Icons.Check strokeWidth={3} size={Device !== 'Desktop' ? 15 : 20} /> }
                        </div>
                    </button>
                })}
            </div>


        </div>
    )
}

export default AnimationName