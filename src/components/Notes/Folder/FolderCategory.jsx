import { useDispatch, useSelector } from 'react-redux'

import { setActiveCategory, setOpenManageFolder } from "../../../redux/features/NotesStrorage";
import { Check } from 'lucide-react';

// count show remaining

const FolderCategory = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const folderContentWidth = useSelector((store) => store.Notes.folderContentWidth); //the width based on which sets if categories should so in one column or more 

    return (
        <div className={`folder-category-list
        ${folderContentWidth>=768?
            `${folderContentWidth>=1200? 'grid-cols-3' :'grid-cols-2'}`
            :
            'grid-cols-1'}
        `}>
            {
                categories.map((category) => {
                    return <button key={category}
                        onClick={() => {
                            dispatch(setActiveCategory({ category }));
                            dispatch(setOpenManageFolder({ open: false })) // close manage folder when category is selected
                        }}
                        className={`
                            ${theme !== 'dark' ? `
                                bg-(--bg-light-window-header) text-(--primary-dark-clr) hover:bg-(--primary-light-clr) active:bg-(--primary-light-clr) 
                                ${activeCategory === category ?
                                    'text-(--primary-dark-clr) font-bold' : 'text-(--sec-dark-clr) font-semibold'
                                }`
                                :
                                `bg-(--primary-dark-clr)  hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr) ${activeCategory === category ?
                                    'text-(--primary-light-clr) font-bold' : 'text-(--sec-dark-clr) font-semibold'
                                }`
                            }
                            `}>
                        <Check strokeWidth={2.5} className={`${activeCategory === category ? 'text-(--bg-minimize)' : 'text-transparent'}`} /> {/* on hidden,it do not reserve space so used text-transparent */}
                        <span>{category}</span>
                        <span>Count</span>
                    </button>
                })
            }

        </div>
    )
}

export default FolderCategory