import { useDispatch, useSelector } from 'react-redux'

import { setActiveCategory, setOpenManageFolder } from "../../../redux/features/NotesStrorage";
import { Check, CheckCheck } from 'lucide-react';

// count show remaining

const FolderCategory = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const folderContentWidth = useSelector((store) => store.Notes.folderContentWidth); //the width based on which sets if categories should so in one column or more 
    const startDeletingCat = useSelector((store) => store.Notes.startDeletingCat); //it keeps track if user has started deleting category or not, if yes then show select icons on category `

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
                        onClick={() => {
                            if (startDeletingCat === true) return; // if user has started deleting category then do not allow to select category
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
                        <Check strokeWidth={2.5} className={`select-none ${activeCategory === category ? 'text-(--bg-minimize)' : 'text-transparent'}`} /> {/* on hidden,it do not reserve space so used text-transparent */}
                        <span className="select-none">{category.length >= 17 ? category.slice(0, 17) + '...' : category}</span>

                        {
                            startDeletingCat === true && category !== 'All' && category !== 'Uncategorized' ?
                                <span className={`rounded-full  w-5.5 h-5.5  
                                ${theme !== 'dark' ?
                                        'bg-(--bg-dark-border)'
                                        :
                                        'bg-(--bg-light-border)'

                                    }`}>
                                    {/* <Check className='rounded-full' strokeWidth={2.5} /> */}
                                </span>
                                :
                                <span className='select-none'>Count</span>
                        }



                    </button>
                })
            }

        </div >
    )
}

export default FolderCategory