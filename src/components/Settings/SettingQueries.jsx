import React, { useLayoutEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { MessageCircleQuestionMark, UserRoundPen } from 'lucide-react'
import { CSS_EASING } from '../../constants/Settings'
import { COMMON_COLORS } from '../../constants/style'
import { useDispatch, useSelector } from 'react-redux'
import { setSection } from '../../redux/features/SettingsSlice'
import { setusedQuery } from '../../redux/features/NotesStrorage'
import gsap from 'gsap'

const SettingQueries = ({ Theme, fullScreen, Device, ThemeColors, AccentColors, Section, Queries }) => {

    const dispatch = useDispatch()
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const usedQuery = useSelector(store => store.Notes.usedQuery)

    useLayoutEffect(() => {
        if (!usedQuery.open || usedQuery.queryId === '') return;

        const childOption = document.getElementById(usedQuery.queryId)

        if (!childOption) return;

        childOption.scrollIntoView({
            behaviour: 'smooth',
            block: 'center',
            inline: 'nearest'
        })


        gsap.delayedCall(0.4, () => {
            gsap.to(childOption, {
                backgroundColor: ThemeColors.third,
                duration: 0.28,
                repeat: 2,
                yoyo: true,
                ease: Animation ?? 'power1.inOut',
                onComplete: () => {
                    gsap.set(childOption, {
                        backgroundColor: 'transparent'
                    })
                }
            })
        })

       
    }, [usedQuery])

    return (
        Queries ? <div style={{

        }} className={` flex  ${Device === 'Mobile' ? 'w-full h-fit' : !fullScreen ? 'w-full h-fit' : 'p-[2.5%] w-3/10 h-full pt-10 justify-center sticky left-0 top-0'}`}>

            <div style={{

            }} className={`${!fullScreen ? 'w-full' : 'w-fit'} h-fit flex flex-col gap-4`}>

                <div style={{
                    borderColor: ThemeColors.third, backgroundColor: ThemeColors.third,
                }} className={`border flex flex-col gap-2 rounded-xl 
                    py-4 px-5 `}>

                    <p style={{
                        fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                    }} className={` w-fit font-semibold select-none`}>Need other settings?</p>

                    <div style={{ color: COMMON_COLORS.Blue }} className={`w-fit flex flex-col gap-1 text-sm select-none`}>

                        {Queries?.map(({ query, ParentSection, queryId }, idx) => {
                            return <span key={idx}
                                style={{
                                    fontSize: Sizes.Small, fontFamily: Weights.Regular,
                                }}
                                onClick={() => {
                                    dispatch(setusedQuery({ open: true, queryId }))
                                    dispatch(setSection({ section: ParentSection }))
                                }}
                                className='active:opacity-75 hover:opacity-75'>{query}</span>
                        })
                        }
                    </div>
                </div>

                {fullScreen && Device !== 'Mobile' && <div style={{
                    color: ThemeColors.primaryText,
                }} className={`w-fit flex flex-col gap-2.5 ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                    <div
                        onClick={() => toast.info('Feature Coming Soon...')}
                        style={{

                        }}
                        className='hover:opacity-80 flex gap-2 items-center text-sm  select-none'>
                        <span><MessageCircleQuestionMark size={20} strokeWidth={2} /></span>
                        <span style={{ fontSize: Sizes.Small, fontFamily: Weights.Regular }}>Get help</span>
                    </div>
                    <div
                        onClick={() => toast.info('Feature Coming Soon...')}
                        style={{

                        }}
                        className='hover:opacity-80 flex gap-2 items-center text-sm  select-none'>
                        <span><UserRoundPen size={20} strokeWidth={2} /></span>
                        <span style={{ fontSize: Sizes.Small, fontFamily: Weights.Regular }}>Give feedback</span>
                    </div>
                </div>}
            </div>

        </div >
            :
            <></>
    )
}

export default SettingQueries