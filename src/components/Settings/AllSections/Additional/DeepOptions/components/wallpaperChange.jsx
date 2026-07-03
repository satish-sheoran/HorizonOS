import React from 'react'
import { useSelector } from 'react-redux';
import { CSS_EASING } from '../../../../../../constants/Settings';
import { Wallpapers } from '../../../../../../constants/index'
import { ACCENT_COLORS } from '../../../../../../constants/style';

const wallpaperChange = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen, activeWallpaper, currentPreview, setNewPreview }) => {


    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const AdvanceDarkMode = useSelector((store) => store.wallpaper.AdvanceDarkMode)
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div className={`flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={` text-[0.8rem] font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{
                    fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={` text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Refresh your device with beautiful wallpapers.</span>
            </div>

            <div
                style={{
                    backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}
                className={`w-full grid ${Device !== 'Desktop' ? 'grid-cols-2' : 'grid-cols-3'} rounded-2xl gap-2 select-none overflow-x-auto 
                           ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
                       `} >
                {
                    Wallpapers[Device !== 'Desktop' ? 'mobile' : 'desktop']?.
                        map(({ name: WallpaperName, id, url, description: WallpaperDesc }, index) => {

                            return <div
                                onClick={() => setNewPreview(url)}
                                key={index}
                                style={{
                                    borderColor: currentPreview === url ? ACCENT_COLORS.find(({COLOR})=> COLOR === 'Purple').CODE : ThemeColors.bg, backgroundImage: `url(${url})`, transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }}
                                className={`border-2 flex items-end rounded-2xl overflow-hidden  
                                       bg-cover bg-center bg-no-repeat 
                                   ${Device !== 'Desktop' ? 'h-45' : 'h-35'}`}>
                                <div style={{
                                    transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }}
                                    className={`${Theme !== 'dark' ? 'light-glassMorphism' : 'dark-glassMorphism'} h-[35%] flex flex-col justify-center gap-0.5 p-2 `}>

                                    <p style={{
                                        fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                                        transitionDuration: Speed,
                                        transitionTimingFunction: CSS_EASING[Animation]
                                    }} className={`font-semibold text-[0.8rem]`}>
                                        {WallpaperName}
                                    </p>
                                    <p style={{
                                        fontFamily: Weights.Regular, color: ThemeColors.secText, transitionProperty: 'color, background-color, border-color',
                                        transitionDuration: Speed,
                                        transitionTimingFunction: CSS_EASING[Animation]
                                    }}
                                        className={`max-w-[85%] text-[0.48rem]`}>
                                        {WallpaperDesc}
                                    </p>

                                </div>

                            </div>


                        })
                }
            </div>
        </div>
    )
}

export default wallpaperChange