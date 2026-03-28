import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../../redux/features/NotesStrorage";

const Categories = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app


    return (
        <div className="categories">
            {
                categories.map((category) => {
                    return <button key={category}
                        onClick={() => dispatch(setActiveCategory({ category }))}
                        className={` h-fit text-md md:text-lg  px-3.5 py-1 rounded-lg transition-all duration-150 ease-in-out active:scale-95
                            ${theme !== 'dark' ?
                                activeCategory === category
                                    ? 'bg-(--primary-light-clr) text-(--primary-dark-clr) font-semibold'
                                    : 'text-(--sec-light-clr)'
                                : activeCategory === category ?
                                    'bg-(--primary-dark-clr) text-(--primary-light-clr) font-semibold'
                                    : 'text-(--sec-dark-clr)'
                            }
                            `}>
                        {category.length>=17?category.slice(0,17)+'...':category}
                    </button>
                })
            }

        </div>
    )
}

export default Categories