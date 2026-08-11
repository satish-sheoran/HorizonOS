import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Flag, Pause, Play, PlayIcon, Undo2, Undo2Icon, Weight } from 'lucide-react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../constants/style'


const StopWatchControls = ({ start, setstart, ThemeColors, Theme, AccentColors, timeIntrvlRef, startTimeRef, elapsedRef, handleTimeInc, time, laps, setLaps, setTime }) => {

    const Device = useSelector((store) => store.Device.currDevice);
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)


    return (
        <div style={{
            color: ThemeColors.primaryText,
            fontFamily: Weights.Regular,
            fontSize: `${(Sizes.Regular.slice(0, -3))}rem`
        }}
            className={`select-none ${Device !== 'Mobile' ? '' : 'w-full mt-3 items-center '} flex gap-3`}>

            {Device === 'Mobile' ?
                <>
                    <button
                        onClick={() => {
                            if (start) {
                                laps.unshift(time)
                            } else {
                                clearInterval(timeIntrvlRef.current);

                                elapsedRef.current = 0;
                                startTimeRef.current = 0;

                                setstart(false);
                                setLaps([])
                                setTime({
                                    hr: 0,
                                    min: 0,
                                    sec: 0,
                                    ms: 0
                                });
                            }
                        }}
                        style={{
                            color: ThemeColors.primaryText,
                            backgroundColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Slate_Gray')?.Bg_Clr,
                            fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.9}rem`,
                            fontFamily: Weights.SemiBold,
                            '--hover': ThemeColors.third,
                            '--active': Theme !== 'dark' ?
                                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                :
                                COMMON_COLORS.Gray,
                        }}
                        className={`HOVER_CLASS active:scale-97 cursor-pointer w-1/2 rounded-2xl py-2 flex items-center gap-1 justify-center`}>
                        <span>{!start ? <Undo2 size={18} strokeWidth={2.5} /> :
                            <Flag size={18} strokeWidth={2.5} />}</span>
                        <span>{!start ? 'Reset' : 'Lap'}</span>
                    </button>
                    <button
                        onClick={() => {
                            if (!start) {
                                // // start
                                setstart(true);
                                startTimeRef.current = performance.now();
                                clearInterval(timeIntrvlRef.current);
                                timeIntrvlRef.current = setInterval(handleTimeInc, 25);

                            } else {
                                // pause
                                setstart(false);
                                elapsedRef.current += performance.now() - startTimeRef.current;

                                clearInterval(timeIntrvlRef.current);
                            }
                        }}
                        style={{
                            fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.9}rem`,
                            fontFamily: Weights.Regular,
                            backgroundColor: !start ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').Bg_Clr :
                                ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Bg_Clr,
                            color: !start ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE :
                                ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,
                        }}
                        className={` active:scale-97 cursor-pointer rounded-2xl py-2 w-1/2  flex items-center gap-1 justify-center`}>
                        <span>{!start ? <Play size={18} strokeWidth={2.5} /> :
                            <Pause size={18} strokeWidth={2.5} />}</span>
                        <span>{!start ? 'Start' : 'Stop'}</span>
                    </button>
                </>
                :
                <>
                    {/* start btn */}
                    <button
                        onClick={() => {
                            if (!start) {
                                // // start
                                setstart(true);
                                startTimeRef.current = performance.now();
                                clearInterval(timeIntrvlRef.current);
                                timeIntrvlRef.current = setInterval(handleTimeInc, 25);
                                if (EnableDebugLogs) console.log('StopWatch Started')
                            } else {
                                // pause
                                setstart(false);
                                elapsedRef.current += performance.now() - startTimeRef.current;
                                if (EnableDebugLogs) console.log('Stopwatch Stopped')
                                clearInterval(timeIntrvlRef.current);
                            }
                        }}
                        style={{
                            backgroundColor: !start ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').Bg_Clr :
                                ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Bg_Clr,
                            color: !start ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE :
                                ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE
                        }}
                        className={` cursor-pointerp-1.5  rounded-full`}>
                        {!start ? <Play strokeWidth={2.5} /> :
                            <Pause strokeWidth={2.5} />}
                    </button>

                    {/* lap btn */}
                    <button disabled={!start} onClick={() => {
                        laps.unshift(time)
                    }} style={{
                        color: ThemeColors.primaryText,
                        backgroundColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Slate_Gray')?.Bg_Clr,
                    }}
                        className={`cursor-pointer p-1.5 rounded-full`}><Flag strokeWidth={2.5} /></button>

                    {/* reset btn */}
                    <button
                        onClick={() => {
                            clearInterval(timeIntrvlRef.current);

                            elapsedRef.current = 0;
                            startTimeRef.current = 0;

                            setstart(false);
                            setLaps([])
                            setTime({
                                hr: 0,
                                min: 0,
                                sec: 0,
                                ms: 0
                            });
                        }} style={{
                            color: ThemeColors.primaryText,
                            backgroundColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Slate_Gray')?.Bg_Clr,
                        }} className={`cursor-pointer p-1.5 rounded-full`}><Undo2 strokeWidth={2.5} /></button>
                </>
            }
        </div>
    )
}

export default StopWatchControls