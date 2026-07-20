import React, { useLayoutEffect, useRef, useState } from 'react'
import { CSS_EASING } from '../../../../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS, LIGHT_THEME_COLORS } from '../../../../../constants/style'
import { useSelector } from 'react-redux'
import * as Icons from 'lucide-react';
import { VERSION_HISTORY } from '../../../../../constants/versionHistory'
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

const VersionDetails = ({ Name, Section, Theme, Device, fullScreen, ThemeColors, AccentColors }) => {
    // redux values
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    // useStates
    const [showUpdateDetails, setshowUpdateDetails] = useState(false) //used to show  updates details

    // Refs
    const versionRef = useRef(null) //used to animate the upto date section
    const updateRef = useRef(null) //used to animate the upto date section

    // Animations 
    useLayoutEffect(() => {
        if (!versionRef.current) return;

        gsap.to(versionRef.current, {
            height: showUpdateDetails ? 'auto' : 0,
            opacity: showUpdateDetails ? 1 : 0,
            duration: 0.3,
            ease: 'back.out(3)',
        })
    }, [showUpdateDetails])


    return (
        <section style={{
            borderColor: ThemeColors.third,
        }} className={`deep-versionDetails py-[2.5%] flex flex-col gap-2 h-full select-none ${Device === 'Mobile' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-full h-full px-[2.5%]'} overflow-hidden`}>


            {/* Title and desc */}
            <div className='mb-2 flex flex-col gap-0.5'>
                <span style={{
                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                }} className={` font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>{Name} </span>
                <span style={{
                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
                }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
                    Explore the evolution of HorizonOS and what's new in each update.
                </span>
            </div>

            {/* versions and all */}
            <section ref={versionRef} className='shrink-0 flex flex-col gap-2'>
                {
                    VERSION_HISTORY.map((
                        { version, codename, releaseDate, type, changes, clr }, idx) => {

                        if (!version || !codename || !releaseDate || !type || !changes) return null;

                        return idx === 0 && <div key={idx} style={{
                            borderColor: idx === 0 ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE : ThemeColors.third,
                            backgroundColor: ThemeColors.header,
                        }} className={`versionDetailBox border flex  items-center ${Device != 'Mobile' ? 'gap-6' : 'flex-col gap-4'}  rounded-2xl  select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`} `}>

                            {/* img and version */}
                            <div className={`flex gap-4 items-center ${Device !== 'Mobile' ? '' : 'w-full'}`}>
                                <div
                                    style={{
                                        borderColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR == clr)?.CODE ?? clr,
                                        background: Theme === 'dark' ?
                                            `linear-gradient(#000,#000) padding-box,
                                            linear-gradient(
                                            135deg,
                                            #ffffff,
                                            #d8b4fe,
                                            #8b5cf6,
                                            #6d28d9
                                            ) border-box`
                                            :
                                            `linear-gradient(${LIGHT_THEME_COLORS.bg},${LIGHT_THEME_COLORS.bg}) padding-box,
                                            linear-gradient(
                                            135deg,
                                            #ffffff,
                                            #d8b4fe,
                                            #8b5cf6,
                                            #6d28d9
                                            ) border-box`,

                                    }}
                                    className='rounded-full overflow-hidden flex flex-col items-center justify-center w-23 h-23 border-2'>
                                    <img className='w-20 h-20 object-cover object-center' src={Theme !== 'dark' ? '/HorizonBlack.webp' : '/HorizonWhite.webp'} alt="" />
                                </div>

                                {/* <span style={{
                                            color: ThemeColors.primaryText,
                                            fontFamily: Weights.SemiBold,
                                            fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.9}rem`
                                        }}>{version}</span> */}

                                <div className='flex flex-col gap-1'>
                                    {idx === 0 && <p style={{
                                        backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE,
                                        color: COMMON_COLORS.White,
                                        fontFamily: Weights.SemiBold,
                                        fontSize: `${(Sizes.Small.slice(0, -3)) * 0.85}rem`
                                    }} className='active:scale-105 hover:scale-105 w-fit px-2 py-1 rounded-2xl'>Latest</p>}
                                    <p style={{
                                        color: ThemeColors.primaryText,
                                        fontFamily: Weights.Bold,
                                        fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.95}rem`
                                    }}>{`HorizonOS ${version}  ${codename}`}</p>
                                    <p style={{
                                        color: ThemeColors.secText,
                                        fontFamily: Weights.SemiBold,
                                        fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`
                                    }}>{releaseDate}</p>
                                </div>
                            </div>

                            {/* Update includers */}
                            <div className={`grid ${fullScreen ? 'grid-cols-1' : `w-full grid-cols-1 ${Device !== 'Mobile' ? 'max-w-1/2' : ''}`} gap-2`}>
                                {changes.map(({ change, icon, iconClr }, idx) => {
                                    let Icon = Icons[icon]

                                    if (!change) return null;

                                    return <p key={idx} className='flex gap-2 justify-start'>
                                        <Icon style={{ color: ACCENT_COLORS?.find(({ COLOR }) => COLOR === iconClr)?.CODE ?? iconClr }} size={15} strokeWidth={2} />
                                        <span style={{
                                            color: ThemeColors.secText,
                                            fontFamily: Weights.SemiBold,
                                            fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`
                                        }}>{change}</span>
                                    </p>
                                })}
                            </div>

                        </div>
                    })
                }

            </section>

            {/* update and details */}
            <section ref={updateRef} className={`min-h-1/2 flex flex-col gap-3 items-center justify-center`}>

                <span style={{
                    color: ThemeColors.primary,
                    backgroundColor: ThemeColors.grayish
                }} className='flex items-center justify-center p-1.5 rounded-full'>
                    <Icons.Check strokeWidth={3} />
                </span>
                <div className={`flex flex-col items-center gap-0.5`}>
                    <p style={{
                        color: ThemeColors.primaryText,
                        fontFamily: Weights.Bold,
                        fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.85}rem`
                    }}>HorizonOS is up to date</p>

                    <span style={{
                        color: ThemeColors.thirdText,
                        fontFamily: Weights.SemiBold,
                        fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`
                    }}>HorizonOS {VERSION_HISTORY[0].version}</span>
                </div>
                <button
                    onClick={() => {
                        let state = Flip.getState(updateRef.current)

                        setshowUpdateDetails(old => !old)

                        requestAnimationFrame(() => {
                            Flip.from(state, {
                                ease: 'back.out(3)',
                                duration: 0.5,
                            })
                        })


                    }}
                    style={{
                        color: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.CODE,
                        fontFamily: Weights.SemiBold,
                        fontSize: Sizes.Small,
                        '--hover': ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Blue')?.Hover_Clr
                    }}
                    className='z-9999 p-1 HOVER_CLR_CLASS hover:scale-105'>{showUpdateDetails ? 'Less Details' : 'More Details'}</button>
            </section>




        </section>
    )
}

export default VersionDetails
