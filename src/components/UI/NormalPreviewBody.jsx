import React from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../constants/Settings'

const NormalPreviewBody = ({ ThemeColors, Device }) => {

    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div style={{
            backgroundColor: ThemeColors.header, borderColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={` w-full flex ${Device !== 'Desktop' ? 'h-20' : 'h-30'}  `}>
            <div style={{
                backgroundColor: ThemeColors.bg, borderColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={` w-4/10 h-full flex flex-col  gap-2 items-center justify-center border-t-[0.5px]`}>

                <div className={`flex gap-1 items-center`}>
                    <div style={{
                        backgroundColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className=' rounded-full p-1'></div>
                    <div style={{
                        backgroundColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                </div>
                <div className={`flex gap-1 items-center`}>
                    <div style={{
                        backgroundColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className=' rounded-full p-1'></div>
                    <div style={{
                        backgroundColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                </div>
                <div className={`flex gap-1 items-center`}>
                    <div style={{
                        backgroundColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className=' rounded-full p-1'></div>
                    <div style={{
                        backgroundColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                </div>
            </div>
            <div style={{
                borderColor: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={` flex items-center pl-5 w-6/10 h-full border-t-[0.5px]`}>
                <div className={`flex flex-col w-full gap-1.5`}>

                    <div style={{
                        backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` rounded w-4/5 ${Device !== 'Desktop' ? 'h-2' : 'h-3'} `}></div>
                    <div style={{
                        backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` rounded-sm w-2/5 ${Device !== 'Desktop' ? 'h-2' : 'h-2.5'}`}></div>
                    <div style={{
                        backgroundColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` rounded-md w-3/5 ${Device !== 'Desktop' ? 'h-2' : 'h-3'}`}></div>

                </div>
            </div>
        </div>
    )
}

export default NormalPreviewBody