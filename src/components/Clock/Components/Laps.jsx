import React from 'react'
import { useSelector } from 'react-redux'
import { ACCENT_COLORS } from '../../../constants/style';

const Laps = ({ Theme, ThemeColors, AccentColors, laps, setLaps }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);

    return (
        <>
            {laps?.length > 0 && <div
                style={{
                    backgroundColor: ThemeColors.header,
                    borderColor: ThemeColors.third
                }}
                className={`border select-none flex flex-col rounded-2xl p-[3%] w-full`}>
                {/* controls */}
                <div style={{
                    color: ThemeColors.primaryText,
                    fontFamily: Weights.SemiBold,
                    fontSize: `${(Sizes.Small.slice(0, -3)) * 0.95}rem`
                }} className='mb-3 w-full flex justify-between items-center'>
                    <span>Laps</span>
                    <span>Time</span>
                    <span>Total</span>
                </div>

                {/* laps */}
                {laps?.map(({ hr, min, sec, ms }, idx) => {

                    return <div key={idx} style={{
                        color: ThemeColors.primaryText,
                        fontFamily: Weights.Regular,
                        fontSize: `${(Sizes.Small.slice(0, -3)) * 0.95}rem`,
                        borderColor : ThemeColors.third
                    }} className={`border-t ${idx===laps.length-1?'border-b':''} flex justify-between items-center py-2`}>
                        <p style={{
                            color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                            backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').Bg_Clr,
                        }}
                            className={`flex items-center justify-center gap-2 w-5 h-5 aspect-square overflow-hidden rounded-full`}>
                            <span style={{
                                fontFamily: Weights.SemiBold,
                            }} >{laps.length - idx}</span>
                            {/* <span style={{
                                        fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.75}rem`
                                    }} >Slowest</span> */}
                        </p>
                        <span>{`
                                    ${min > 59 ? `${String(hr).padStart(2, '0')}:` : ''}
                                ${String(min).padStart(2, '0')}
                                :${String(sec).padStart(2, '0')}
                                :${String(ms).padStart(2, '0')}`}</span>
                        <span>
                            {`
                             ${idx + 1 >= laps.length ? '00:00:00' :
                                    `${laps[idx + 1]?.min + min > 59 ? `${String(laps[idx - 1]?.hr + hr).padStart(2, '0')}:` : ''}
                              ${String(laps[idx + 1]?.min + min).padStart(2, '0')}
                              :${String(laps[idx + 1]?.sec + sec).padStart(2, '0')}
                               :${String(laps[idx + 1]?.ms + ms).slice(0, 2).padStart(2, '0')}`
                                }
`}
                        </span>
                    </div>
                })}
            </div>}
        </>
    )
}

export default Laps