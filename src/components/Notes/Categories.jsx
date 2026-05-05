import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../../redux/features/NotesStrorage";

const Categories = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app


    return (
        <div className="categories w-full py-2 rounded-xl ">
            {
                categories.map((category) => {
                    return <button key={category}
                        onClick={() => dispatch(setActiveCategory({ category }))}
                        className={`shrink-0 h-fit text-md md:text-lg  px-3.5 py-1 rounded-lg duration-500 ease-out active:scale-95
                            ${theme !== 'dark' ?
                                activeCategory === category
                                    ? 'bg-(--bg-light-window-header) text-(--primary-dark-clr) font-semibold'
                                    : 'text-(--sec-light-clr)'
                                : activeCategory === category ?
                                    'bg-(--primary-dark-clr) text-(--primary-light-clr) font-semibold'
                                    : 'text-(--sec-dark-clr)'
                            }
                            `}>
                        {category.length >= 17 ? category.slice(0, 17) + '...' : category}
                    </button>
                })
            }

        </div>
    )
}

export default Categories