import { useDispatch, useSelector } from 'react-redux'
import Categories from '../Categories'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';
import { setCreateTaskOpen } from '../../../redux/features/NotesStrorage';
import AllNotes from './AllNotes';
import { COMMON_COLORS } from '../../../constants/style'

const NotesArea = () => {
    const dispatch = useDispatch();
    const notesAnimRef = useRef(null);
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)

    // animation for notes when switching with task area
    useGSAP(() => {
        if (!notesAnimRef.current) return;
        gsap.to(notesAnimRef.current, {
            y: activeTab === 'Notes' ? '0%' : '-120%',
            duration: 0.5,
            ease: 'expo.out'
        });

    }, [activeTab])



    return (
        <div ref={notesAnimRef} className='NotesArea relative'>
            <Categories />

            <AllNotes />
            {/* Add new task rounded btn */}
            <button
                style={{
                    color: COMMON_COLORS.White,
                    backgroundColor : AccentColors.CODE,
                    '--hover': AccentColors.Hover_Clr,
                    '--active': AccentColors.Active_Clr,

                }}

                onClick={() => dispatch(setCreateTaskOpen({ open: true }))}
                className={`${AccentColors.HOVER} fixed z-100 rounded-full p-3.5 md:p-2 right-6 bottom-7  active:scale-96 transition-colors duration-300 ease-out`}>
                <Plus strokeWidth={2.5} />
            </button>
        </div>

    )
}

export default NotesArea
