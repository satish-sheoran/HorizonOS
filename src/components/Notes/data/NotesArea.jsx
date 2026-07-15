import { useDispatch, useSelector } from 'react-redux'
import Categories from '../Categories'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';
import { setCreateNoteOpen } from '../../../redux/features/NotesStrorage';
import AllNotes from './AllNotes';
import { COMMON_COLORS } from '../../../constants/style'
import { CSS_EASING } from '../../../constants/Settings'

const NotesArea = ({ Theme, AccentColors, ThemeColors }) => {
    const dispatch = useDispatch();
    const notesAnimRef = useRef(null);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    // animation for notes when switching with task area
    useGSAP(() => {
        if (!notesAnimRef.current) return;
        gsap.to(notesAnimRef.current, {
            y: activeTab === 'Notes' ? '0%' : '-120%',
            duration: 0.5,
            ease: Animation ?? 'expo.out'
        });

    }, [activeTab])



    return (
        <div ref={notesAnimRef} className='NotesArea relative'>
            <Categories Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />

            <AllNotes Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors} />
            {/* Add new task rounded btn */}
            <button
                style={{
                    color: COMMON_COLORS.White,
                    backgroundColor: AccentColors.CODE,
                    '--hover': AccentColors.Hover_Clr,
                    '--active': AccentColors.Active_Clr,
                    transition: `all ${Speed} ${CSS_EASING[Animation]}`
                }}

                onClick={() => dispatch(setCreateNoteOpen({ open: true }))}
                className={`${AccentColors.HOVER} fixed z-100 rounded-full p-3.5 md:p-2 right-6 bottom-7  active:scale-96 `}>
                <Plus strokeWidth={2.5} />
            </button>
        </div>

    )
}

export default NotesArea
