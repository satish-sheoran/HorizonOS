import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CSS_EASING } from '../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS } from '../../constants/style'
import {   setopenSettings } from '../../redux/features/NotesStrorage';
import { ArrowLeft } from 'lucide-react';
import { NOTES_SETTING_OPTIONS } from '../../constants/Notes'
import StyleSettings from './components/StyleSettings';
import DataNStorage from './components/DataNStorage';
import ResetSetting from './components/ResetSetting';

const NoteSetting = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch();
    const Device = useSelector(store => store.Device.currDevice)
    const { Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes, SizeType } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { NotesViewStyle, NoteSortMethod } = useSelector(store => store.Notes)
    const isSettingOpen = useSelector(store => store.Notes.openSettings) //it is used apply animation on this returning div
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const elem = useRef(null);

    useGSAP(() => {
        if (!elem.current) return;

        gsap.to(elem.current, {
            x: isSettingOpen ? '0%' : '100%',
            duration: 0.3,
            ease: Animation ?? 'expo.out'
        })
    }, [isSettingOpen])

    return (
        <section ref={elem}
            style={{ backgroundColor: ThemeColors.bg }}
            className={`inset-0 absolute gap-4 z-10`}>

            <div className='relative w-full h-full flex flex-col gap-3 '>
                <nav className={` select-none flex gap-4 items-center ${Device !== 'Desktop' ? `px-3 py-2` : `px-2.5 py-2`}`}>
                    <button onClick={() => {
                        dispatch(setopenSettings({ open: false }));
                    }} style={{ color: ThemeColors.primaryText }} className='active:scale-95'>
                        <ArrowLeft strokeWidth={2} />
                    </button>
                    <span style={{
                        fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.9}rem`,
                        fontFamily: Weights.SemiBold,
                        color: ThemeColors.primaryText
                    }}>Note's app Settings</span>
                </nav>

                <div className='notes-setting-overflow flex flex-col gap-4 grow px-[2.5%] overflow-y-auto'>

                    {/* sections */}
                    <div className='flex flex-col gap-3'>

                        {/* Styles */}
                        <StyleSettings Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />

                        <hr
                            style={{
                                borderColor: ThemeColors.third,
                            }}
                            className={`my-2 w-9/10 mx-auto`} />

                        {/* DATA AND STORAGE SECTIONS */}
                        <DataNStorage Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
                        <hr
                            style={{
                                borderColor: ThemeColors.third,
                            }}
                            className={`my-2 w-9/10 mx-auto`} />


                        {/* RESET ALL SETTINGS */}
                        <ResetSetting Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />


                    </div>

                </div>

            </div >

        </section >
    )
}

export default NoteSetting