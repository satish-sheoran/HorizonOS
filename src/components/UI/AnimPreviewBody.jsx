import React, { useLayoutEffect, useState } from 'react'
import { COMMON_COLORS } from '../../constants/style'
import { Info, LayoutGrid, Monitor } from 'lucide-react'
import { useSelector } from 'react-redux'
import { AnimationsName, CSS_EASING } from '../../constants/Settings'

const AnimPreviewBody = ({ ThemeColors, AccentColors, Device, Theme }) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
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
                backgroundColor: ThemeColors.header, borderColor: ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`relative overflow-x-auto overflow-y-hidden px-1 py-1  flex  flex-col justify-between ${Device !== 'Desktop' ? `h-20` : `h-30`}`}>

            {AnimationsName.map(({ Name, Animation: Anim }, index) => {

                return <div key={index} className={` w-full min-h-[20%] relative  ${Device !== 'Desktop' ? 'text-[0.32rem]' : 'text-[0.5rem]'}`}>
                    <button style={{
                       fontFamily : Weights.SemiBold, color: COMMON_COLORS.White,
                        backgroundColor: AccentColors.CODE,
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation],
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