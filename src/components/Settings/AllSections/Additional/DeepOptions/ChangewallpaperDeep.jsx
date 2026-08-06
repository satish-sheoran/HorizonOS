import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../../constants/Settings'
import wallpaperChange from './components/wallpaperChange'
import WallpaperPreview from './components/WallpaperPreview'

const DEEP_OPTIONS = {
    wallpaperChange,
    WallpaperPreview
}

const ChangewallpaperDeep = ({ Name, Section, Device, fullScreen, Theme, ThemeColors, AccentColors, DeepSubSection }) => {

    const [currentPreview, setNewPreview] = useState('')
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const activeWallpaper = useSelector(store => store.wallpaper.src)

    useEffect(() => {
        const setDefaultPreview = () => {
            setNewPreview(activeWallpaper)
        }

        setDefaultPreview();
    }, [])

    return (
        <section style={{
            borderColor: ThemeColors.third, 
        }} className={`deep-changeWallpaper-option flex flex-col py-[2.5%] gap-2 select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  px-[2.5%]'}`}>

            {
                DeepSubSection?.map(({ Section: DeepSubName, FileName }) => {
                    const Component = DEEP_OPTIONS[FileName];

                    if (!Component) return null;

                    return <Component
                        key={DeepSubName}
                        Name={DeepSubName}
                        Theme={Theme}
                        ThemeColors={ThemeColors}
                        AccentColors={AccentColors}
                        Device={Device}
                        fullScreen={fullScreen}
                        activeWallpaper={activeWallpaper}
                        currentPreview={currentPreview}
                        setNewPreview={setNewPreview}
                    />
                })
            }
        </section>
    )
}

export default ChangewallpaperDeep 
