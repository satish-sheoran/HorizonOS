import React, { useEffect, useState } from 'react'
import { formatDate, formatTime } from '../../utils/formatTime';
import { useSelector } from 'react-redux';

const TimeNDate = ({ Theme, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const Device = useSelector(store =>store.Device.currDevice)
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const is12HrFormat = useSelector((store) => store.Device.isTime12HourFormat)
    const [Time, setTime] = useState(new Date());

    useEffect(() => {
        const intrvl = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(intrvl)
    }, [])

    const formattedTime = formatTime(Time, is12HrFormat)
    const formattedDate = formatDate(Time);

    return (
        <div style={{fontSize : Sizes.Small}} className='flex gap-(--gap-xs) '>
            <span style={{ fontFamily: Weights.SemiBold }}>{formattedTime}</span>
            <span style={{ fontFamily: Weights.SemiBold }} className={`${Device !=='Mobile'?'block':'hidden'}`}>{formattedDate}</span>
        </div>
    )
}

export default TimeNDate