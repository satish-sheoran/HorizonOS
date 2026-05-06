import React, { useEffect, useState } from 'react'
import { formatDate, formatTime } from '../../utils/formatTime';

const TimeNDate = () => {

    const [Time, setTime] = useState(new Date());

    useEffect(() => {
        const intrvl = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(intrvl)
    }, [])

    const formattedTime = formatTime(Time, true)
    const formattedDate = formatDate(Time);

    return (
        <div className='flex gap-(--gap-xs) text-xs md:text-sm'>
            <span>{formattedTime}</span>
            <span className='hidden md:block'>{formattedDate}</span>
        </div>
    )
}

export default TimeNDate