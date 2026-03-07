import React, { useContext } from 'react'
import TimeNDate from './TimeNDate'
import { OSContext } from '../context/OSProvider'

import { Wifi, BatteryMedium } from 'lucide-react';


const StatusBar = () => {

    const { AllAboutWallpaper: { activeWallpaper: { txtColor } } } = useContext(OSContext)

    return (
        <section className='status-bar px-(--padding-lgvw) py-(--padding-xs) md:px-(--padding-smvw) select-none' style={{ color: txtColor == 'white' ? 'var(--color-white)' : 'black' }}>

            <div className='flex h-full items-center gap-(--gap-xs) cursor-pointer' >

                <img src="/HorizonOS-Photoroom.png" className='h-full' alt="Logo" />
                <h5 className='text-[14px] md:text-[16px]'>HorizonOS</h5>
            </div >

            <div className='flex items-center h-full gap-(--gap-xs)'>

                <Wifi className='h-2/3' color={txtColor == 'white' ? 'var(--color-white)' : 'var(--color-dark)'} />
                <BatteryMedium className='h-2/3' color={txtColor == 'white' ? 'var(--color-white)' : 'var(--color-dark)'} />
                <TimeNDate />
            </div>

        </section >
    )
}

export default StatusBar