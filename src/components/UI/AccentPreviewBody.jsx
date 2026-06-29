import React, { useState } from 'react'
import { COMMON_COLORS } from '../../constants/style'
import { Info, LayoutGrid, Monitor } from 'lucide-react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'
const AccentPreviewBody = ({ ThemeColors, AccentColors, Device, Theme }) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const [ActiveSec, setActiveSec] = useState('About')
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div style={{
            backgroundColor: ThemeColors.header, borderColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`w-full flex ${Device !== 'Desktop' ? 'h-20' : 'h-30'}  `}>

            {/* Section */}
            <div style={{
                backgroundColor: ThemeColors.bg, borderColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`overflow-hidden  w-4/10 h-full flex flex-col  gap-1 items-center justify-center border-t-[0.5px]`}>

                <div onClick={() => setActiveSec('About')}
                    style={{
                        color: ActiveSec === 'About' ? COMMON_COLORS.White : ThemeColors.primaryText,
                        backgroundColor: ActiveSec === 'About' ? AccentColors.CODE : '',
                        '--hover': ActiveSec === 'About' ? AccentColors.Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray,
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}

                    className={`HOVER_CLASS w-[80%] pl-1.5 rounded-lg py-0.5 flex gap-1 items-center justify-start cursor-pointer`}>
                    <Info style={{
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} size={Device !== 'Desktop' ? 8 : 12} />
                    <span style={{
                        fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`font-semibold ${Device !== 'Desktop' ? 'text-[0.4rem]' : 'text-[0.7rem]'}`}>About</span>
                </div>

                <div onClick={() => setActiveSec('Display')}
                    style={{
                        color: ActiveSec === 'Display' ? COMMON_COLORS.White : ThemeColors.primaryText,
                        backgroundColor: ActiveSec === 'Display' ? AccentColors.CODE : '',
                        '--hover': ActiveSec === 'Display' ? AccentColors.Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray,
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}

                    className={`HOVER_CLASS w-[80%] pl-1.5  rounded-lg py-0.5 flex gap-1 items-center justify-start cursor-pointer`}>
                    <Monitor style={{
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} size={Device !== 'Desktop' ? 8 : 12} />
                    <span style={{
                        fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`font-semibold ${Device !== 'Desktop' ? 'text-[0.4rem]' : 'text-[0.7rem]'}`}>Display</span>
                </div>

                <div onClick={() => setActiveSec('Apps')}
                    style={{
                        color: ActiveSec === 'Apps' ? COMMON_COLORS.White : ThemeColors.primaryText,
                        backgroundColor: ActiveSec === 'Apps' ? AccentColors.CODE : '',
                        '--hover': ActiveSec === 'Apps' ? AccentColors.Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}

                    className={`HOVER_CLASS w-[80%] pl-1.5   rounded-lg py-0.5 flex gap-1 items-center justify-start cursor-pointer`}>
                    <LayoutGrid style={{
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} size={Device !== 'Desktop' ? 8 : 12} />
                    <span style={{
                        fontFamily: Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`font-semibold ${Device !== 'Desktop' ? 'text-[0.4rem]' : 'text-[0.7rem]'}`}>Apps</span>
                </div>
            </div>

            {/* Content */}
            <div style={{
                borderColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={` flex flex-col items-center justify-center gap-2  w-6/10 h-full border-t-[0.5px]`}>

                <div className='flex gap-2'>

                    <button
                        style={{
                           fontFamily : Weights.SemiBold, color: COMMON_COLORS.White,
                            backgroundColor: AccentColors.CODE,
                            '--hover': AccentColors.Hover_Clr, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`HOVER_CLASS flex items-center justify-center font-semibold cursor-pointer ${Device !== 'Desktop' ? 'px-1 py-0.5 text-[0.4rem]' : 'px-1.5 py-0.5 text-[0.7rem] '}    rounded `}>
                        Primary</button>

                    <button
                        style={{
                           fontFamily : Weights.SemiBold, color: ThemeColors.primaryText,
                            borderColor: ThemeColors.thirdText,
                            '--hover': ThemeColors.third, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`HOVER_CLASS border flex items-center justify-center font-semibold cursor-pointer ${Device !== 'Desktop' ? 'px-1 py-0.5 text-[0.4rem]' : 'px-1.5 py-0.5 text-[0.7rem] '}    rounded `}>
                        Second</button>
                </div>
                <Monitor size={Device !== 'Desktop' ? 14 : 22} style={{
                    color: AccentColors.CODE, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} />
                <div className='w-1/2 flex flex-col gap-1'>
                    <div style={{
                        backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` rounded w-3/5 ${Device !== 'Desktop' ? 'h-2' : 'h-2'}`}></div>
                    <div style={{
                        backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` rounded w-full ${Device !== 'Desktop' ? 'h-2' : 'h-2.5'}`}></div>
                </div>
            </div>

        </div>
    )
}

export default AccentPreviewBody