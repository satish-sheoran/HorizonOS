import React from 'react'
import * as Icons from 'lucide-react'
import { AnimationsName, OS_NAME, CSS_EASING } from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { useDispatch, useSelector } from 'react-redux'
import { setAnimationName } from '../../../../../../redux/features/wallpaper'

const AnimationName = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

    const dispatch = useDispatch()
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Name: DisplayAnimName, Animation } = useSelector(store => store.wallpaper.AnimationName)
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)

    return (
        <div className={`mt-2 flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                }} className={` font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{
                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
                }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose how animations move and feel throughout {OS_NAME}.</span>
            </div>

            <div style={{
                borderColor: ThemeColors.third, backgroundColor: ThemeColors.header,
            }} className={`border h-fit flex flex-col gap-2 rounded-2xl  select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`} >

                {AnimationsName.map(({ Name, Animation, icon, description }, idx) => {
                    const Icon = Icons[icon]
                    return <button key={idx}
                        onClick={() => {
                            dispatch(setAnimationName({ Animation: Name }))
                          if(EnableDebugLogs) console.log(`Easing Changed to ${Name}`)  
                        }}
                        style={{
                            borderColor: DisplayAnimName === Name ? AccentColors.CODE : ThemeColors.bg,
                            color: ThemeColors.primaryText,
                            '--hover': ThemeColors.third,
                            '--active': Theme !== 'dark' ?
                                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                :
                                COMMON_COLORS.Gray,
                        }}
                        className={`outline-none overflow-hidden HOVER_CLASS active:scale-97 border rounded-2xl  select-none flex justify-between items-center ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}
                    >
                        <div className={`flex items-center gap-3`}>
                            {Icon && <Icon style={{
                                color: DisplayAnimName === Name ? AccentColors.CODE : ThemeColors.primaryText,
                            }} strokeWidth={2} />}
                            <div className={`flex flex-col gap-0.5 text-left`}>
                                <span style={{ fontSize: Sizes.Small, fontFamily: Weights.SemiBold }} className={`font-semibold `}>{Name}</span>
                                <span style={{
                                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.grayish,
                                }} >{description}</span>
                            </div>
                        </div>
                        <div style={{
                            borderColor: ThemeColors.bg, backgroundColor: DisplayAnimName === Name ? AccentColors.CODE : '',
                        }} className={`${DisplayAnimName === Name ? '' : 'border'}  w-6 h-6 rounded-full  flex justify-center items-center`}>
                            {DisplayAnimName === Name && <Icons.Check style={{

                            }} strokeWidth={3} size={Device !== 'Desktop' ? 15 : 20} />}
                        </div>
                    </button>
                })}
            </div>


        </div>
    )
}

export default AnimationName