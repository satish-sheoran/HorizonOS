import React from 'react'
import { useSelector } from 'react-redux';
import { ACCENT_COLORS } from '../../../constants/style';
import { Timer, TimerOff } from 'lucide-react';

const StopWatchTimer = ({ start, laps, ThemeColors, Theme, AccentColors, time, setTime }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);

    return (
        <div
            className={`select-none flex flex-col items-center `}>
            <div style={{
                color: ThemeColors.primaryText,
                fontFamily: Weights.Regular,
                fontSize: `${(Sizes.ExtraLarge.slice(0, -3)) * 2.3}rem`
            }} className={`h-fit flex items-baseline justify-center gap-0.5`}>
                <span>{`${time.min > 59 ? `${String(time.hr).padStart(2, '0')}:` : ''}`}</span>
                <span>{`${String(time.min).padStart(2, '0')}:`}</span>
                <span>{`${String(time.sec).padStart(2, '0')}`}</span>
                <span style={{
                    color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                    fontSize: `${(Sizes.ExtraLarge.slice(0, -3)) * 1.5}rem`
                }}>{`.${String(time.ms).padStart(2, '0')}`}</span>
            </div>
            <p style={{
                color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
                fontSize: Sizes.Small,
                fontFamily: Weights.SemiBold
            }} className={`${laps.length <= 0 ? 'opacity-0' : ''} px-3 py-1.5 rounded-2xl flex items-center justify-center gap-1`}>
                {
                    !start ?
                        <>
                            <TimerOff size={18} strokeWidth={2.5} />
                            <span>Pending</span>
                        </>
                        :
                        <>
                            <Timer size={18} strokeWidth={2.5} />
                            <span>Running</span>
                        </>
                }
            </p>
        </div>
    )
}

export default StopWatchTimer