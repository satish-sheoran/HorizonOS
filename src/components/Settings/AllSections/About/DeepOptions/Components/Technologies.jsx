import React from 'react'
import { CodeXml, Dot, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import { SETTINGS_TECHNOLOGIES, CSS_EASING } from '../../../../../../constants/Settings'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { useSelector } from 'react-redux'


const Technologies = ({ Device, Theme, Section, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div style={{
            borderColor: ThemeColors.third,backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`border technologies flex flex-col gap-4 p-[2.5%] rounded-2xl`}>


            <div style={{
                color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`flex gap-2  text-lg`}>
                <CodeXml style={{
                    color: AccentColors.CODE, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} strokeWidth={2.5} />
                <span style={{fontSize : Sizes.Regular, fontFamily: Weights.SemiBold }} className='font-semibold'>Built Using</span>
            </div>

            <div style={{
                transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`flex justify-center flex-wrap gap-3 ${Device === 'Desktop' ? 'gap-3' : 'gap-2'}`}>

                {SETTINGS_TECHNOLOGIES.map(({ Tech_Name, icon }) => {
                    return <div
                        style={{
                            borderColor: ThemeColors.bg,
                            color: Theme !== 'dark' ? ThemeColors.primaryText : ThemeColors.secText,
                            '--hover': ThemeColors.third,
                            '--active': Theme !== 'dark' ?
                                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                :
                                COMMON_COLORS.Gray, transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]

                        }}
                        className={` hover:scale-105 active:scale-105 overflow-hidden border text-sm  
                         font-semibold rounded-2xl  flex gap-2 justify-center items-center ${Device === 'Desktop' ? 'px-3 py-1' : 'px-4 py-2'}`}>

                        {icon ?
                            <img
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                onDragStart={(e) => e.preventDefault()}
                                style={{
                                    transitionProperty: 'color, background-color, border-color, font-size',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }}
                                className={`p-0.5 rounded object-cover object-center ${Device !== 'Desktop' ? 'w-5' : 'w-5.5'}`} src={icon} alt={Tech_Name} />
                            :
                            <span style={{
                                color: AccentColors.CODE, transitionProperty: 'color, background-color, border-color, font-size',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }} className={` ${Device !== 'Desktop' ? 'scale-150' : 'scale-200'}`}>•</span>
                        }
                        <span style={{fontSize : Sizes.Small ,fontFamily : Weights.Regular}}>
                            {Tech_Name}
                        </span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Technologies  
