import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import { DEV_DETAILS ,CSS_EASING} from '../../../../../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../../../../constants/style'
import { useSelector} from 'react-redux'


const DevDetail = ({ Device, Theme, ThemeColors, AccentColors }) => {
    const {Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
        const {Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    return (
     
        <div
            style={{ backgroundColor: ThemeColors.header,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }}
            className={`developer flex flex-col gap-4 p-[2.5%] rounded-2xl`}>
            <div
                style={{ color: ThemeColors.primaryText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }}
                className={`flex gap-2 font-bold text-lg `}>
                <User style={{ color: AccentColors.CODE,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} strokeWidth={2.5} />
                <span>Developer</span>
            </div>

            <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`gap-3 details flex ${Device !== 'Desktop' ? 'flex-col' : 'justify-between'}`}>

                <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`rounded-2xl flex items-center justify-center left ${Device !== 'Desktop' ? 'w-full h-[20vh]' : 'w-1/4'}`}>

                    <img style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} src={DEV_DETAILS.ImgURL} alt="Developer's pic" className={`${Device !== 'Desktop' ? 'w-1/2 h-full rounded-2xl' : 'w-full rounded-3xl'} object-cover`} />

                </div>

                <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={` ${Device !== 'Desktop' ? 'w-full' : 'justify-center'} gap-2 right w-3/4 flex flex-col`}>
                    <span className='flex flex-col'>
                        <span style={{color : ThemeColors.primaryText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`text-lg font-bold name `}>{DEV_DETAILS.Name}</span>
                        <span style={{color : ThemeColors.primaryText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`role font-medium  text-[0.85rem]`}>{DEV_DETAILS.Role}</span>
                    </span>

                    <p style={{color : ThemeColors.secText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`desc-about-dev font-[450] text-[0.8rem]`}>
                        {DEV_DETAILS.Description}

                    </p>
                </div>
            </div>

            <div style={{color : ThemeColors.secText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`extra flex gap-1 items-end ${Device !== 'Desktop' ? 'text-[0.55rem]' : 'text-[0.65rem]'} `}>
                <span style={{color : COMMON_COLORS.Blue,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} ><ShieldHalf size={Device !== 'Desktop' ? 25 : 20} /></span>
                <span style={{color : COMMON_COLORS.Blue,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} >
                    {DEV_DETAILS.Disclaimer}
                </span>
            </div>
        </div>)
}

export default DevDetail