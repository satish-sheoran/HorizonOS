import Dock from '../components/Dock'
import StatusBar from '../components/StatusBar'
import { useDispatch, useSelector } from "react-redux";
import CalculatorWindow from '../apps/Calculator'
import SettingsWindow from '../apps/Settings'
import ClockWindow from '../apps/Clock'
import NotesWindow from '../apps/Notes'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Loader from '../components/Loader';
import { useEffect, useRef } from 'react';
import { startingFactoryReset } from '../redux/features/DeviceSet'
import { useDispatchResetAll } from '../utils/Reset';

const OSLayout = () => {
    const dispatch = useDispatch()

    // getting wallapaper src from one of store's Slice
    const src = useSelector((store) => store.wallpaper.src)
    const isFactoryResetting = useSelector(store => store.Device.startFactoryReset)
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Calculator)
    const Theme = useSelector((store) => store.wallpaper.theme.Calculator)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const ResetAllFn = useDispatchResetAll()
    //ref
    const UpdateRef = useRef(null)
    const OuterBox = useRef(null)


    useGSAP(() => {
        if (!OuterBox.current) return;

        gsap.to(OuterBox.current, {
            opacity: isFactoryResetting ? 1 : 0,
            ease: 'Sine.out',
            duration: 0.2
        })

    }, [isFactoryResetting])


    useEffect(() => {
        if (!isFactoryResetting || !UpdateRef.current) return

        ResetAllFn() //Resetting everything
        function Change() {
            dispatch(startingFactoryReset({ Start: false }))

        }
        function showAnimation() {
            UpdateRef.current.style.display = 'flex'
        }

        const timeInt = setTimeout(Change, 15000)
        const SecInt = setTimeout(showAnimation, 2000)

        return () => {
            clearTimeout(timeInt)
            clearTimeout(SecInt)
        }
    }, [isFactoryResetting, dispatch])

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
            <img id='wallpaper' src={src} alt="Background" className='object-cover object-center w-full h-full' />
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

            {/* Factory Reset related Animaiton */}
            <div ref={OuterBox} className={`${isFactoryResetting ? 'block' : 'hidden'} absolute left-0 top-0 inset-0 bg-black z-2000`}>
                <div ref={UpdateRef} className={`w-full h-full hidden flex-col justify-center items-center gap-10`}>

                    <Loader />
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div style={{ borderColor: ThemeColors.bg }} className={`Updater overflow-hidden relative w-30 h-3 border rounded-lg`}></div>
                        <div style={{ color: ThemeColors.secText, fontFamily: Weights.SemiBold, fontSize: `${(Sizes.Small.slice(0, -3)) * 0.7}rem` }} className='flex gap-1 items-baseline'>
                            <p>
                                Getting things ready
                            </p>
                            <div style={{
                                background: Theme !== 'dark' ?
                                    `radial-gradient(circle closest-side,#666666 90%,#66666600) 0/calc(100%/3) 100% space`
                                    :
                                    `radial-gradient(circle closest-side,#E6E6E^ 90%,#E6E6E600) 0/calc(100%/3) 100% space`
                            }} className={`dotLoader`}></div>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    )
}

export default OSLayout
