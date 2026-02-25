import React, { useContext } from 'react'
import { OSContext } from './context/OSProvider'

const App = () => {

  // const { Wallpaper, setWallpaper } = useContext(OSContext)
  //  style={{ backgroundImage: `url(${Wallpaper})` }}
  return (
    <main id='os-root' className='bg-cover bg-center bg-no-repeat'>
      hi
    </main>
  )
}

export default App
