import { useDispatch, useSelector } from 'react-redux'
import Categories from '../Categories'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';
import { setCreateTaskOpen } from '../../../redux/features/NotesStrorage';
import AllNotes from './AllNotes';

const NotesArea = () => {
    const dispatch = useDispatch();
    const notesAnimRef = useRef(null);
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

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
                onClick={() => dispatch(setCreateTaskOpen({ open: true }))}
                className='fixed z-100 rounded-full p-3.5 md:p-2 right-6 bottom-7 text-(--primary-light-clr) bg-(--color-light-accent) hover:bg-(--color-accent) active:scale-96 transition-colors duration-300 ease-out'>
                <Plus strokeWidth={2.5} />
            </button>
        </div>

    )
}

export default NotesArea
