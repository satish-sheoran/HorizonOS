import React, { useState } from 'react'
import * as Icons from 'lucide-react'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { useDispatch, useSelector } from 'react-redux'
import { setAnimationTypeNSpeed } from '../../../../../../redux/features/wallpaper'
import { AnimationSpeedAndType } from '../../../../../../constants/Settings'
import { CSS_EASING } from '../../../../../../constants/Settings'

const ChooseAnimation = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Name: AnimationName, Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)

    return (
        <div className={`flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                }} className={` font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{
                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
                }} className={`  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose the level of animations and transitions.</span>
            </div>

            <div style={{
                borderColor: ThemeColors.third, backgroundColor: ThemeColors.header,
            }} className={`border flex flex-col gap-2 rounded-2xl  select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`} >

                {AnimationSpeedAndType.map(({ Name, icon, Description }, idx) => {
                    const Icon = Icons[icon]
                    return <button key={idx}
                        onClick={() => {
                            dispatch(setAnimationTypeNSpeed({ Animation: Name }))
                            if (EnableDebugLogs) console.log(`Animation is Now ${Name}`)
                        }}
                        style={{
                            borderColor: AnimationName === Name ? AccentColors.CODE : ThemeColors.bg,
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
                                color: AnimationName === Name ? AccentColors.CODE : ThemeColors.primaryText,
                            }} strokeWidth={2} />}
                            <div className={`flex flex-col gap-0.5 text-left`}>
                                <span style={{ fontSize: Sizes.Small, fontFamily: Weights.SemiBold }} classname={`font-semibold `}>{Name}</span>
                                <span style={{
                                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.grayish,
                                }}>{Description}</span>
                            </div>
                        </div>
                        <div style={{
                            borderColor: ThemeColors.bg, backgroundColor: AnimationName === Name ? AccentColors.CODE : '',
                        }} className={`${AnimationName === Name ? '' : 'border'} w-6 h-6 rounded-full  flex justify-center items-center`}>
                            {AnimationName === Name && <Icons.Check style={{

                            }} strokeWidth={3} size={Device !== 'Desktop' ? 15 : 20} />}
                        </div>
                    </button>
                })}
            </div>


        </div>
    )
}

export default ChooseAnimation