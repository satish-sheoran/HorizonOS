import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { ACCENT_COLORS } from '../../../../../../constants/style';
import { UseFPSCount } from '../../../../../../utils/DevOpsFns';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FPSCounter = ({ Device, ThemeColors, Theme, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const showFPSCounter = useSelector((store) => store.Settings.showFPSCounter)

    const { fps, frameTime } = UseFPSCount()

    const FPSref = useRef(null)

    useGSAP(() => {

        gsap.fromTo(FPSref.current, {
            xPercent: showFPSCounter ? -100 : 0,
            opacity : !showFPSCounter?0:100
        }, {
            xPercent: showFPSCounter ? 0 : -100,
            duration: 0.3,
            ease: 'sine.out'
        })

    }, [showFPSCounter])


    return (
        <div
            ref={FPSref}
            style={{
                borderColor: ThemeColors.third,
            }}
            className={`${Theme !=='dark'?'liquid-glass-white-btn':'liquid-glass-white-btn'} z-100 absolute top-11 left-2 border flex flex-col gap-0 ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'} rounded-2xl`}>
            <div className={`flex gap-1  h-fit items-baseline`}>
                <p
                    style={{
                        backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').Hover_Clr
                    }}
                    className={`mr-1 w-3 h-3 self-center rounded-full`}></p>
                <span style={{
                    color: ThemeColors.primaryText,
                    fontFamily: Weights.SemiBold,
                    fontSize: Sizes.Regular
                }}>{fps}</span>
                <span style={{
                    color: ThemeColors.primaryText,
                    fontFamily: Weights.Regular,
                    fontSize: Sizes.Small
                }}>FPS</span>
            </div>
            <div className={`flex gap-0.5  h-fit items-baseline`}>
                <span style={{
                    color: ThemeColors.primaryText,
                    fontFamily: Weights.SemiBold,
                    fontSize: Sizes.Small
                }}>{frameTime}</span>
                <span style={{
                    color: ThemeColors.primaryText,
                    fontFamily: Weights.SemiBold,
                    fontSize: Sizes.Small
                }}>ms</span>
            </div>
            <p style={{
                color: ThemeColors.secText,
                fontFamily: Weights.Regular,
                fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`
            }}>Frame Time</p>
        </div>
    )
}

export default FPSCounter