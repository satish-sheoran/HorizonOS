import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CSS_EASING } from '../../../../../../constants/Settings';
import { Wallpapers } from '../../../../../../constants/index';
import { ACCENT_COLORS, COMMON_COLORS, LIGHT_THEME_COLORS } from '../../../../../../constants/style';
import { Check } from 'lucide-react';
import TimeNDate from '../../../../../UI/TimeNDate';
import { formatTime, formatDate } from '../../../../../../utils/formatTime';
import { setWallpaper } from '../../../../../../redux/features/wallpaper';

const WallpaperPreview = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen, activeWallpaper, currentPreview, setNewPreview }) => {

    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const AdvanceDarkMode = useSelector((store) => store.wallpaper.AdvanceDarkMode)
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const [Time, setTime] = useState(new Date())

    useEffect(() => {
        const intrvl = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(intrvl)
    }, [])

    const formattedTime = formatTime(Time, false);
    const formattedDate = formatDate(Time);

    return (
        <div className={`mt-2 flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={` font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{
                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText, transitionProperty: 'color, background-color, border-color, font-size',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Personalize your {Device !== 'Desktop' ? 'device' : 'desktop'} with your favourite image.</span>
            </div>

            <div style={{
               borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className={`border flex justify-between items-center  rounded-2xl  select-none overflow-hidden 
                ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
                ${Device !== 'Desktop' ? 'min-h-50' : 'min-h-40'}
            `} >

                {/* Image preview */}
                <div
                    style={{
                        borderColor: ThemeColors.bg, backgroundImage: `url(${currentPreview || activeWallpaper})`, transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}
                    className={`shrink-0 rounded-2xl ${Device !== 'Desktop' ? 'min-w-1/3' : 'min-w-[40%]'} h-full bg-center bg-cover border active:scale-97`}
                >
                    {/* icons */}
                    <div className={`flex items-center justify-end rounded-2xl gap-1 px-2 py-1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={COMMON_COLORS.White} className="size-4">
                            <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={COMMON_COLORS.White} className="size-4">
                            <path fillRule="evenodd" d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {/* time and  date*/}
                    <div style={{
                        color: COMMON_COLORS.White, transitionProperty: 'color, background-color, border-color, font-size',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`relative mt-1 flex flex-col  items-center justify-center`}>
                        <span style={{ fontSize: `${((Sizes.ExtraLarge).slice(0, -3))*1.3}rem`, fontFamily: Weights.Bold }} className={`font-bold `}>  {formattedTime}</span>
                        <p style={{ fontSize: Sizes.ExtraSmall, fontFamily: Weights.SemiBold }} className={`absolute -bottom-1 font-semibold `}>{formattedDate}  </p>
                    </div>
                </div>

                {/* details and set option */}
                <div className={`grow ${Device !== 'Desktop' ? 'pl-4' : 'pl-10'}  flex flex-col gap-2`}>
                    <p
                        style={{
                           fontSize : Sizes.Small, fontFamily: Weights.SemiBold,
                            color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                            backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
                            transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`w-fit cursor-pointer font-semibold rounded-2xl py-1 px-2.5  hover:scale-105`}>Preview</p>
                    <p
                        style={{
                          fontSize : Sizes.Regular,  fontFamily: Weights.SemiBold,
                            color: ThemeColors.primaryText,
                            transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`cursor-text font-semibold `}
                    >
                        {Device !== 'Desktop' ?
                            Wallpapers['mobile'].find(({ url }) => url === currentPreview)?.name || Wallpapers['mobile'].find(({ url }) => url === activeWallpaper)?.name || ''
                            :
                            Wallpapers['desktop'].find(({ url }) => url === currentPreview)?.name || Wallpapers['desktop'].find(({ url }) => url === activeWallpaper)?.name || ''
                        }
                    </p>
                    <p
                        style={{
                           fontSize : Sizes.Small, fontFamily: Weights.Regular,
                            color: ThemeColors.thirdText,
                            transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`cursor-text  ${Device !== 'Desktop' ? '' : 'w-[70%]'}`}
                    >
                        {Device !== 'Desktop' ?
                            Wallpapers['mobile'].find(({ url }) => url === currentPreview)?.description || Wallpapers['mobile'].find(({ url }) => url === activeWallpaper)?.description || ''
                            :
                            Wallpapers['desktop'].find(({ url }) => url === currentPreview)?.description || Wallpapers['desktop'].find(({ url }) => url === activeWallpaper)?.description || ''
                        }
                    </p>

                    <button
                        onClick={() => {
                            if (currentPreview === activeWallpaper) return;
                            dispatch(setWallpaper({ url: currentPreview }))
                        }}
                        style={{
                            fontFamily: Weights.SemiBold,
                            color: currentPreview === activeWallpaper ? ThemeColors.thirdText : COMMON_COLORS.White,
                            backgroundColor: currentPreview === activeWallpaper ? '' : ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                            transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`${currentPreview === activeWallpaper ? '' : ''} flex items-center justify-start gap-2 w-fit font-semibold rounded-2xl py-2 pl-2.5 pr-5
                            ${currentPreview === activeWallpaper ? '' : 'active:scale-95 active:opacity-90'}  cursor-pointer`}
                    >
                        <div style={{ borderColor: currentPreview === activeWallpaper ? ThemeColors.bg : COMMON_COLORS.White }} className={`border-2 rounded-full w-fit h-fit p-0.5 flex items-center justify-center`}>
                            <Check strokeWidth={3} size={10} />
                        </div>
                        <span style={{fontSize : Sizes.Small}} >{currentPreview === activeWallpaper ? 'CURRENT WALLPAPER' : 'Set as Wallpaper'} </span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default WallpaperPreview