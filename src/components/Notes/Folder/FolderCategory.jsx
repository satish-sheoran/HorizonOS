import { useDispatch, useSelector } from 'react-redux'

import { manageDeletedCategories, setActiveCategory, setOpenManageFolder, setStartDeletingCat } from "../../../redux/features/NotesStrorage";
import { Check } from 'lucide-react';
import useLongPress from '../../../hooks/Use-long-press';

// count show remaining

const FolderCategory = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const folderContentWidth = useSelector((store) => store.Notes.folderContentWidth); //the width based on which sets if categories should so in one column or more 
    const startDeletingCat = useSelector((store) => store.Notes.startDeletingCat); //it keeps track if user has started deleting category or not, if yes then show select icons on category `
    const deletedCategories = useSelector((store) => store.Notes.deletedCategories); // all categories which are selected to delete
    const Notes = useSelector(store => store.Notes.Notes) //all notes just using them for showing count of notes in each category 


    const { Handlers, isLongPress } = useLongPress(() => {
        if (!startDeletingCat) dispatch(setStartDeletingCat({ start: true }));
    })
    //detects long press to open edit mode to delete notes


    return (
        <div className={`overflow-y-auto rounded-xl folder-category-list
        ${folderContentWidth >= 768 ?
                `${folderContentWidth >= 1200 ? 'grid-cols-3' : 'grid-cols-2'}`
                :
                'grid-cols-1'}
        `}>
            {
                categories.map((category) => {
                    return <button key={category}
                        {...(!startDeletingCat ? Handlers : {})} //adding long press handler only if delete mode is off

                        onClick={(e) => {
                            if (isLongPress.current || startDeletingCat) {
                                e.preventDefault(); // to prevent on click event when long press is detected

                                if (!startDeletingCat) dispatch(setStartDeletingCat({ start: true })); // if user has not started deleting category then start delete mode on long press

                                if(category !== 'All' && category !== 'Uncategorized') dispatch(manageDeletedCategories({ category }));
return;
                            }
                            
                            dispatch(setActiveCategory({ category }));
                            dispatch(setOpenManageFolder({ open: false })) // close manage folder when category is selected
                        }}
                        className={`duration-500 ease-out 
                            ${theme !== 'dark' ?`
                                ${activeCategory === category ?
                                    'bg-(--color-light-accent)  text-(--primary-light-clr) font-bold' : 'bg-(--third-light-clr) hover:bg-(--primary-light-clr) active:bg-(--primary-light-clr) text-(--sec-dark-clr) font-semibold'
                                }`
                                :
                                ` ${activeCategory === category ?
                                    'bg-(--color-light-accent) text-(--primary-light-clr) font-bold' : 'bg-(--third-dark-clr)  hover:bg-(--grayish-dark-clr) active:bg-(--grayish-dark-clr) text-(--sec-light-clr) font-semibold'
                                }`
                            }
                            `}>
                        <Check strokeWidth={2.5} className={`duration-500 ease-out select-none ${activeCategory === category ? 'text-(--bg-minimize)' : 'text-transparent'}`} /> {/* on hidden,it do not reserve space so used text-transparent */}

                        <span className="select-none">{category.length >= 17 ? category.slice(0, 17) + '...' : category}</span>


                        {/* count and selection area to delete cateogries */}
                        {
                            startDeletingCat === true && category !== 'All' && category !== 'Uncategorized' ?
                                <span className={`duration-500 ease-out rounded-full w-5.5 h-5.5 flex items-center justify-center

                                ${deletedCategories?.includes(category) ? 'bg-(--color-orange)'
                                        :
                                        theme !== 'dark' ?
                                            'bg-(--btn-light-hover)'
                                            :
                                            'bg-(--grayish-dark-clr)'

                                    }`}>
                                    {deletedCategories?.includes(category) && <Check className='rounded-full text-(--primary-light-clr)' strokeWidth={3} size={17} />}
                                </span>
                                :
                                <span className='select-none'>{category === 'All' ? Notes.length : Notes.filter(note => note.category === category).length}</span>
                        }



                    </button>
                })
            }

        </div >
    )
}

export default FolderCategory