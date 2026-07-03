import Dock from '../components/Dock'
import StatusBar from '../components/StatusBar'

import { useSelector } from "react-redux";
import CalculatorWindow from '../apps/Calculator'
import SettingsWindow from '../apps/Settings'
import ClockWindow from '../apps/Clock'
import NotesWindow from '../apps/Notes'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const OSLayout = () => {
    // getting wallapaper src from one of store's Slice
    const src = useSelector((store) => store.wallpaper.src)

    //animation for wallapaper
    useGSAP(() => {
        const el = document.getElementById('wallpaper');
        if (!el) return;

        gsap.fromTo(el,
            { scale: 1.03, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'ease.in' }
        )
    }, [src])


    return (
        <main id='os-layout' className='bg-cover bg-center bg-no-repeat'>

            <img id='wallpaper' src={src} alt="Background" className='object-cover object-center w-full h-full'/>
            <div className={`absolute z-1000 inset-0`}>
                <StatusBar />
                <Dock /> {/*Navigation bar*/}

                <div className='appsArea relative w-full h-full'>
                    {/* All Apps  */}
                    <CalculatorWindow />
                    <SettingsWindow />
                    <ClockWindow />
                    <NotesWindow />
                </div>
            </div>

        </main>
    )
}

export default OSLayout