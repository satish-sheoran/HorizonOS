import React from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../constants/Settings'
import { ACCENT_COLORS } from '../../../constants/style'
import * as Icons from 'lucide-react'

const WorldClockTitleAndDesc = ({ icon, Name, Description }) => {

    let Icon = Icons[icon]

    const { fullScreen } = useSelector((store) => store.windowApps?.apps['clock'])

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const Wallpaper = useSelector(store => store.wallpaper.src) //font sizes
    const DeviceTheme = useSelector(store => store.wallpaper.theme.Settings)
    const Device = useSelector((store) => store.Device.currDevice);
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Theme = useSelector((store) => store.wallpaper.theme.Clock);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div className={`select-none my-2 flex items-center gap-1`}>
            <p style={{
                color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
            }} className={`flex items-center justify-center rounded-lg p-2`}>
                {Icon && <Icon size={18} strokeWidth={2.5} />}
            </p>
            <div className='grow flex flex-col gap-0.5'>
                <span style={{
                    fontSize: `${(Sizes.Small.slice(0, -3)) * 1.3}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                }} className={` font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>{Name} </span>
                <span style={{
                    fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
                }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
                    {Description}
                </span>
            </div>
        </div>
    )
}

export default WorldClockTitleAndDesc