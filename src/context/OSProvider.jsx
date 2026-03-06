import React, { Children, createContext, useState } from 'react'
import { useWallpaper } from '../hooks/useDeviceWallpaper';

export const OSContext = createContext();

const OSProvider = ({ children }) => {

    const AllAboutWallpaper = useWallpaper() //contains details and fn etc. checkout the hook inside which it is return
    const [Wallpaper, setWallpaper] = useState(AllAboutWallpaper.wallpaperURL)


    return (
        <OSContext.Provider
            value={{
                Wallpaper,
                setWallpaper,
                AllAboutWallpaper
            }}
        >
            {children}
        </OSContext.Provider>
    )
}

export default OSProvider
