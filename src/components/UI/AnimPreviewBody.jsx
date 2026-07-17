import React, { useLayoutEffect, useState } from 'react'
import { COMMON_COLORS } from '../../constants/style'
import { Info, LayoutGrid, Monitor } from 'lucide-react'
import { useSelector } from 'react-redux'
import { AnimationsName, CSS_EASING } from '../../constants/Settings'

const AnimPreviewBody = ({ ThemeColors, AccentColors, Device, Theme }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const [BtnsWidth, setBtnsWidth] = useState([])

    useLayoutEffect(() => {
        const Btns = document.querySelectorAll('.AnimBtn');

        Btns.forEach(btn => {
            const width = btn.getBoundingClientRect().width;
            setBtnsWidth(prev => [...prev, width])
        })
    }, [fullScreen, Device])

    return (
        <div

            style={{
                backgroundColor: ThemeColors.header, borderColor: ThemeColors.bg, 
            }} className={`relative overflow-x-auto overflow-y-hidden px-1 py-1  flex  flex-col justify-between ${Device !== 'Desktop' ? `h-20` : `h-30`}`}>

            {AnimationsName.map(({ Name, Animation: Anim }, index) => {

                return <div
                    key={index}
                    style={{
                        fontSize: Device !== 'Desktop' ? `${(Sizes.ExtraSmall.slice(0, -3)) * 0.8}rem` : `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`,
                    }}
                    className={` w-full min-h-[20%] relative`}>
                    <button style={{
                        fontFamily: Weights.SemiBold, color: COMMON_COLORS.White,
                        backgroundColor: AccentColors.CODE,
                        animationTimingFunction: CSS_EASING[Anim],
                        '--btn-width': `${BtnsWidth[index]}px`
                    }} className={`AnimBtn absolute top-0 left-1 rounded-xl py-0.5 px-1 font-semibold`}>
                        {Name}
                    </button>
                </div>
            })}

        </div>
    )
}

export default AnimPreviewBody