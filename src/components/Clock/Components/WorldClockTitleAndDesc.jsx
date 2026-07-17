import React from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../constants/Settings'

const WorldClockTitleAndDesc = ({Name,Description}) => {

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
        <div className={`flex justify-between items-center`}>
            <div id='DetailElement' className='flex flex-col gap-0.5'>
                <span style={{
                    fontSize: `${(Sizes.Small.slice(0, -3)) * 1.3}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, 
                }} className={`select-none font-semibold  ${Device !== 'Desktop' ? `px-3` : `px-2.5`}`}>{Name} </span>
                <span style={{
                    fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.Regular, color: ThemeColors.thirdText, 
                }} className={`select-none ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>
                    {Description}
                </span>
            </div>
            <button
                style={{
                    fontFamily: Weights.SemiBold,
                    color: AccentColors.CODE,
                    
                }}
                className='select-none font-semibold active:scale-95'>
                <span style={{ fontSize: Sizes.Regular }}>Edit</span>
            </button>
        </div>
    )
}

export default WorldClockTitleAndDesc