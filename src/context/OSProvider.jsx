import React, { Children, createContext, useState } from 'react'
import { useWallpaper } from '../hooks/useDeviceWallpaper';

export const OSContext = createContext();

const OSProvider = ({ children }) => {

    // const [Wallpaper, setWallpaper] = useState()
    const [Wallpaper, setWallpaper] = useState(useWallpaper().wallpaperURL)


    return (
        <OSContext.Provider
            value={{
                Wallpaper,
                setWallpaper
            }}
        >
            {children}
        </OSContext.Provider>
    )
}

export default OSProvider
