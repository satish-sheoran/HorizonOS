import React from 'react'
import { toast } from 'react-toastify'
import { MessageCircleQuestionMark, UserRoundPen } from 'lucide-react'
import { CSS_EASING } from '../../constants/Settings'
import { COMMON_COLORS } from '../../constants/style'
import { useSelector } from 'react-redux'

const SettingQueries = ({ Theme, fullScreen, Device, ThemeColors, AccentColors, Section, Queries }) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        Queries ? <div style={{
            transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={` flex  ${Device === 'Mobile' ? 'w-full h-fit' : !fullScreen ? 'w-full h-fit' : 'p-[2.5%] w-3/10 h-full pt-10 justify-center sticky left-0 top-0'}`}>

            <div style={{
                transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`${!fullScreen ? 'w-full' : 'w-fit'} h-fit flex flex-col gap-4`}>

                <div style={{
                    backgroundColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={` flex flex-col gap-2 rounded-xl 
                    py-4 px-5 `}>

                    <p style={{
                      fontSize : Sizes.Small,  fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={` w-fit font-semibold select-none`}>Need other settings?</p>

                    <div style={{ color: COMMON_COLORS.Blue }} className={`w-fit flex flex-col gap-1 text-sm select-none`}>

                        {Queries?.map(({ query }, idx) => {
                            return <span key={idx}
                                style={{
                                  fontSize : Sizes.Small,  fontFamily: Weights.Regular, transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }}
                                onClick={() => toast.info('Querying Still Under Development')}
                                className='active:opacity-75 hover:opacity-75'>{query}</span>
                        })
                        }
                    </div>
                </div>

                {fullScreen && Device !== 'Mobile' && <div style={{
                    color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={`w-fit flex flex-col gap-2.5 ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                    <div
                        onClick={() => toast.info('Feature Coming Soon...')}
                        style={{
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className='hover:opacity-80 flex gap-2 items-center text-sm  select-none'>
                        <span><MessageCircleQuestionMark size={20} strokeWidth={2} /></span>
                        <span style={{fontSize : Sizes.Small ,fontFamily : Weights.Regular}}>Get help</span>
                    </div>
                    <div
                        onClick={() => toast.info('Feature Coming Soon...')}
                        style={{
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className='hover:opacity-80 flex gap-2 items-center text-sm  select-none'>
                        <span><UserRoundPen size={20} strokeWidth={2} /></span>
                        <span style={{fontSize : Sizes.Small ,fontFamily : Weights.Regular}}>Give feedback</span>
                    </div>
                </div>}
            </div>

        </div >
            :
            <></>
    )
}

export default SettingQueries