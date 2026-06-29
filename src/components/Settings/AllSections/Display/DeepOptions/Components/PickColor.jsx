import React from 'react'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { Check, Palette, Pen } from 'lucide-react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../../constants/settings'


const PickColor = ({ Theme, Device, fullScreen, ThemeColors, AccentColors }) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div style={{
            borderColor: ThemeColors.bg,
            color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={` border ${Device !== 'Desktop' ? `p-3` : `p-2.5`} rounded-2xl  flex justify-between items-center`}>
            <div className={`flex gap-3 items-center`}>
                <Palette size={30} style={{
                    color: AccentColors.CODE, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} strokeWidth={2.5} />
                <p className='flex flex-col gap-0.5 max-w-[70%]'>
                    <span style={{
                        fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`font-semibold text-[0.8rem]`}>Custom Colour</span>
                    <span style={{
                        fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`text-[0.6rem]`}>Pick a custom colour that reflects your style.</span>
                </p>
            </div>
            <div onClick={() => toast.info('Feature Coming Soon...')} style={{
                borderColor: ThemeColors.bg,
                color: AccentColors.CODE,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`HOVER_CLASS p-2 cursor-pointer rounded-xl border-2 `}>
                <Pen size={22} strokeWidth={2} />
            </div>
        </div>
    )
}

export default PickColor