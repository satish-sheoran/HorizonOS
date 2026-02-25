import React, { useContext } from 'react'
import { OSContext } from './context/OSProvider'

const App = () => {

  const { Wallpaper, setWallpaper } = useContext(OSContext)

  return (
    <main id='os-root' className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Wallpaper})` }}>

    </main>
  )
}

export default App
