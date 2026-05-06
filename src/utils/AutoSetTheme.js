import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/features/wallpaper';

// sets theme automatically based on current time


export const useAutoTheme = () => {
    const dispatch = useDispatch();
    const AutoTheme = useSelector((store) => store.wallpaper.isAutoTheme);

    useEffect(() => {
        if (!AutoTheme) return

        const hr = new Date().getHours();
        const isDark = hr >= 17 || hr < 7;

        dispatch(changeTheme({ theme: isDark ? 'dark' : 'light', AutoTheme: true }))

    }, [AutoTheme, dispatch])

}


