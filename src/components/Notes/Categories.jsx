import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../../redux/features/NotesStrorage";

const Categories = () => {
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const dispatch = useDispatch();
    return (
        <div className="categories ">

            <button
                onClick={() => dispatch(setActiveCategory({ category: 'All' }))}
                className={` h-fit text-md md:text-lg  px-3.5 py-1 rounded-lg transition-all duration-150 ease-in-out  
                   ${theme !== 'dark'
                        ? activeCategory === 'All'
                            ? 'bg-(--primary-light-clr) text-(--primary-dark-clr) font-semibold'
                            : 'text-(--sec-light-clr)'
                        : activeCategory === 'All'
                            ? 'bg-(--primary-dark-clr) text-(--primary-light-clr) font-semibold'
                            : 'text-(--sec-dark-clr)'
                    } 
                `}
            >All</button>

            <button
                onClick={() => dispatch(setActiveCategory({ category: 'Uncategorised' }))}
                className={` h-fit text-md md:text-lg  px-3.5 py-1 rounded-lg transition-all duration-150 ease-in-out 
                   ${theme !== 'dark'
                        ? activeCategory === 'Uncategorised'
                            ? 'bg-(--primary-light-clr) text-(--primary-dark-clr) font-semibold'
                            : 'text-(--sec-light-clr)'
                        : activeCategory === 'Uncategorised'
                            ? 'bg-(--primary-dark-clr) text-(--primary-light-clr) font-semibold'
                            : 'text-(--sec-dark-clr)'
                    } 
                `}
            >Uncategorised</button>
        </div>
    )
}

export default Categories