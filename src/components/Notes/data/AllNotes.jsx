import { useSelector } from 'react-redux'
import Categories from '../Categories'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AllNotes = () => {
    const theme = useSelector((store) => store.wallpaper.theme)
    const notesAnimRef = useRef(null);
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const categories = useSelector(store => store.Notes.allCategories) // call ategories for notes app

    useGSAP(() => {
        if (!notesAnimRef.current) return;
        gsap.to(notesAnimRef.current, {
            y: activeTab === 'Notes' ? '0%' : '-120%',
            duration: 0.5,
            ease: 'expo.out'
        });

    }, [activeTab])
    return (
        <div ref={notesAnimRef} className='AllNotes '>
            <Categories />
            <div className={`translate-y-0 ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'} grow border border-amber-400`}>Notes area</div>
        </div>
    )
}

export default AllNotes
