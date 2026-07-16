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
import { FactoryReset, useDispatchResetAll } from '../utils/Reset';
import { ACCENT_COLORS, COMMON_COLORS, DARK_THEME_COLORS } from '../constants/style';
import { CSS_EASING } from '../constants/Settings';
import { CircleCheck, LayoutGrid, Link, RefreshCw, Settings, ShieldCheck, Shuffle } from 'lucide-react';

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
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const Device = useSelector((store) => store.Device.currDevice);

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
        FactoryReset() //clear storage
        function Change() {
            dispatch(startingFactoryReset({ Start: false }))

        }
        function showAnimation() {
            UpdateRef.current.style.display = 'flex'
        }

        const SecInt = setTimeout(showAnimation, 1000)
        const timeInt = setTimeout(Change, 9000)

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
            <div ref={OuterBox} className={`${isFactoryResetting ? 'block' : 'hidden'} overflow-hidden absolute left-0 top-0 inset-0 bg-black z-2000`}>
                <div ref={UpdateRef} className={`w-full h-full flex flex-col justify-center items-center gap-4`}>

                    {/* glow circle with logo*/}
                    <div className={`relative flex items-center justify-center w-30 h-30`}>
                        <div
                            className='WobbleEffect RotateAnimation absolute inset-0 rounded-full p-[1px]
                        '>
                            <div className='w-full h-full rounded-full flex items-center justify-center  bg-black'>

                                <div className='relative z-10 flex flex-col gap-0.5 p-2 items-center justify-center w-25 h-25 rounded-full bg-black'>
                                    <img src="/public/HorizonOS-Photoroom.png" alt="logo" className='w-7/10 rounded-full h-7/10' />
                                    <span style={{
                                        background: 'linear-gradient(0deg, #4F8BFF 0%, #7B6DFF 55%, #A16EFF 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontFamily: Weights.SemiBold,
                                        fontSize: `${(Sizes.Small.slice(0, -3)) * 0.8}rem`
                                    }} className='WobbleText select-none'>HorizonOS</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Text Area */}
                    <div className={`w-full flex flex-col gap-0.5 items-center`}>
                        <h3
                            style={{
                                color: DARK_THEME_COLORS.primaryText,
                                fontFamily: Weights.SemiBold,
                                fontSize: Sizes.Regular
                            }} className='ShinyText select-none'>Resetting HorizonOS</h3>

                        <div className={`flex gap-5 items-end justify-center`}>
                            <p style={{ color: DARK_THEME_COLORS.secText, fontFamily: Weights.Bold, fontSize: `${(Sizes.Small.slice(0, -3)) * 0.85}rem` }} className='select-none '>
                                Getting things ready
                            </p>
                            <div class="DotLoader mb-1"></div> */
                        </div>

                    </div>

                    {/* white line updater */}
                    <div style={{ borderColor: ThemeColors.bg , '--width' : Device !=='Mobile'?'400px':'240px'}} className={`Updater overflow-hidden relative ${Device !=='Mobile'?'w-100':'w-60'}  max-w-[400px] h-3 border rounded-lg`}></div>
                

                    {/* data safe */}
                    <div
                        style={{
                            borderColor: ThemeColors.third,
                            '--hover': DARK_THEME_COLORS.bg,
                            '--active': DARK_THEME_COLORS.bg,
                            transitionProperty: 'color, background-color, border-color, font-size',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`mt-10 HOVER_CLASS active:scale-97 border rounded-xl  select-none font-semibold flex items-center justify-between 
                             gap-2  ${Device !== 'Desktop' ? `px-3 py-1.5` : `px-3 py-2`}
                                           `}>

                        <div className={`w-fit `} style={{ color: DARK_THEME_COLORS.secText }}>
                            <ShieldCheck size={22} strokeWidth={2} />
                        </div>
                        <div className={'grow flex flex-col gap-0.5'}>
                            <span style={{
                                color: DARK_THEME_COLORS.primaryText,
                                fontFamily: Weights.Bold,
                                fontSize: `${(Sizes.Small.slice(0, -3)) * 0.7}rem`
                            }} className='select-none'>Your data is safe.</span>
                            <span style={{
                                color: DARK_THEME_COLORS.secText,
                                fontFamily: Weights.SemiBold,
                                fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 0.72}rem`
                            }} className='select-none'>This process may take a few moments.</span>
                        </div>

                    </div>


                </div>

            </div>

        </main>
    )
}

export default OSLayout
