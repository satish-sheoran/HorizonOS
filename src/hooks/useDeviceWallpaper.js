import { useEffect, useState } from 'react';
import { DEFAULT_WALLPAPER, Wallpapers } from '../constants';
import { useDeviceType } from "./useDeviceType";

// this FN manages all the wallpaper change related content : LIKE INITIAL WALLPAPER AS PER DEVICE USING and changing wallpaper based on user selection
export const useWallpaper = () => {
    const { IsMobile } = useDeviceType();

    //Deciding Device Type
    const deviceType = IsMobile ? 'mobile' : 'desktop';

    // State to Store Default Wallpaper ID
    const [WallPaperID, setWallPaperID] = useState(DEFAULT_WALLPAPER[deviceType]);
    const [userSelected, setuserSelected] = useState(false)

    // when device changes
    useEffect(() => {
        // Check if the wallpaperId exists in the new device list
        const wallpaperList = Wallpapers[deviceType];
        const existsInNewDevice = wallpaperList.find(wall => wall.id === WallPaperID);

        // If user never selected, just use default
        if (!userSelected || !existsInNewDevice) {
            setWallPaperID(DEFAULT_WALLPAPER[deviceType]);
            return;
        }
        setWallPaperID(existsInNewDevice.id)

    }, [deviceType])

    // active wallapper
    const activeWallpaper = Wallpapers[deviceType].find((wall) => wall.id === WallPaperID)

    // FN which changes wallpaper on USER DEMAND
    const changeWallPaper = (id) => {
        setWallPaperID(id);
        setuserSelected(true);
    }

    return {
        wallpaperURL: activeWallpaper?.url,
        WallPaperID,
        deviceType,
        changeWallPaper
    }
}