import React, { Children, createContext, useState } from 'react'

export const OSContext = createContext();

const OSProvider = ({ children }) => {

    // const [Wallpaper, setWallpaper] = useState()
    const [Wallpaper, setWallpaper] = useState('/assets/wallpaper/desktop/glossy-green.jpg')


    return (
        <OSContext.Provider
            value={{
                Wallpaper,
                setWallpaper
            }}
        >
            <div className="wrapper">
                {children}
            </div>
        </OSContext.Provider>
    )
}

export default OSProvider
