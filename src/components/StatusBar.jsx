import TimeNDate from './TimeNDate'

import { Wifi, BatteryMedium } from 'lucide-react';
import { useSelector } from "react-redux";


const StatusBar = () => {

    const theme = useSelector((store) => store.wallpaper.theme)
    return (
        <section className='status-bar px-(--padding-lgvw) py-(--padding-xs) md:px-(--padding-smvw) select-none' style={{ color: `${theme === 'dark' ? 'var(--color-white)' : 'var(--color-dark)'}` }}>

            <div className='flex h-full items-center gap-(--gap-xs) cursor-pointer' >

                <img src="/HorizonOS-Photoroom.png" className='h-full' alt="Logo" />
                <h5 className='text-[14px] md:text-[16px]'>HorizonOS</h5>
            </div >

            <div className='flex items-center h-full gap-(--gap-xs)'>

                <Wifi className='h-2/3' />
                <BatteryMedium className='h-2/3' />
                <TimeNDate />
            </div>

        </section >
    )
}

export default StatusBar