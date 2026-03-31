import { useDispatch, useSelector } from 'react-redux'
import Categories from '../Categories'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';
import { setCreateTaskOpen } from '../../../redux/features/NotesStrorage';

const AllNotes = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const notesAnimRef = useRef(null);
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    useGSAP(() => {
        if (!notesAnimRef.current) return;
        gsap.to(notesAnimRef.current, {
            y: activeTab === 'Notes' ? '0%' : '-120%',
            duration: 0.5,
            ease: 'expo.out'
        });

    }, [activeTab])

    return (
        <div ref={notesAnimRef} className='AllNotes'>
            <Categories />
            <div className={`translate-y-0 ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'} grow `}>Notes area</div>

            {/* Add new task rounded btn */}
            <button
                onClick={() => dispatch(setCreateTaskOpen({ open: true }))}
                className='fixed rounded-full p-3.5 md:p-2 right-6 bottom-7 text-(--primary-light-clr) bg-(--bg-minimize) hover:bg-(--bg-orange) active:scale-96 transition-colors duration-300'>
                <Plus strokeWidth={2.5} />
            </button>
        </div>

    )
}

export default AllNotes
