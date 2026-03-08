import Dock from '../components/Dock'
import StatusBar from '../components/StatusBar'

import {  useSelector } from "react-redux";

const OSLayout = () => {

    // getting wallapaper src from one of store's Slice
    const src = useSelector((store) => store.wallpaper.src)


    return (
        <main id='os-layout' className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${src})` }}>
            <StatusBar />
            <Dock /> {/*Navigation bar*/}
        </main>
    )
}

export default OSLayout