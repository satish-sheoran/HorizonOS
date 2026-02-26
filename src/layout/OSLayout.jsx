import React, { useContext } from 'react'
import { OSContext } from '../context/OSProvider'
import Dock from '../components/Dock'

const OSLayout = () => {
    const { Wallpaper, setWallpaper } = useContext(OSContext)

    return (
        <main id='os-layout' className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Wallpaper})` }}>
                
                <Dock /> {/*Navigation bar*/}
        </main>
    )
}

export default OSLayout