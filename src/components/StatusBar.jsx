import TimeNDate from './UI/TimeNDate'
import { useSelector } from "react-redux";

import { Wifi, BatteryMedium } from 'lucide-react';
import { OS_NAME } from '../constants/Settings';
import { COMMON_COLORS } from '../constants/style';
import { CSS_EASING } from '../constants/Settings'

const StatusBar = () => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Theme = useSelector((store) => store.wallpaper.theme)
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)

    return (
        <section className='status-bar px-(--padding-lgvw) py-(--padding-xs) md:px-(--padding-smvw) select-none' style={{
            color: COMMON_COLORS.White, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }}>

            <div className='flex h-full items-center gap-(--gap-xs) cursor-pointer' >

                <img src="/HorizonOS-Photoroom.png" className='h-full' alt="Logo" />
                <h1 style={{
                  fontSize : Sizes.Small,  fontFamily: Weights.SemiBold,
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className='font-semibold '>{OS_NAME}</h1>
            </div >

            <div className='flex items-center h-full gap-(--gap-xs)'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={COMMON_COLORS.White} className="size-4">
                    <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={COMMON_COLORS.White} className="size-5">
                    <path fillRule="evenodd" d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z" clipRule="evenodd" />
                </svg>
                <TimeNDate Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
            </div>

        </section >
    )
}

export default StatusBar