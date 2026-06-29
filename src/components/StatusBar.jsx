import TimeNDate from './UI/TimeNDate'
import { useSelector } from "react-redux";

import { Wifi, BatteryMedium } from 'lucide-react';
import { OS_NAME } from '../constants/Settings';
import { COMMON_COLORS } from '../constants/style';
import { CSS_EASING } from '../constants/Settings'

const StatusBar = () => {

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
                <h5 style={{
                    fontFamily: Weights.SemiBold,
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className='font-semibold text-[14px] md:text-[16px]'>{OS_NAME}</h5>
            </div >

            <div className='flex items-center h-full gap-(--gap-xs)'>

                <Wifi className='h-2/3' />
                <BatteryMedium className='h-2/3' />
                <TimeNDate Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
            </div>

        </section >
    )
}

export default StatusBar