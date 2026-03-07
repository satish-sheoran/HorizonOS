import React, { useContext } from 'react'
import { OSContext } from '../context/OSProvider'
import Dock from '../components/Dock'
import TimeWidget from '../components/TimeWidget'
import StatusBar from '../components/StatusBar'

const OSLayout = () => {
    const { Wallpaper } = useContext(OSContext)

    return (
        <main id='os-layout' className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Wallpaper})` }}>
            <StatusBar /> 
            <Dock /> {/*Navigation bar*/}
        </main>
    )
}

export default OSLayout