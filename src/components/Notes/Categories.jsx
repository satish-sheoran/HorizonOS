import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../../redux/features/NotesStrorage";
import { COMMON_COLORS } from '../../constants/style'

const Categories = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app


    return (
        <div className="categories w-full py-2 rounded-xl ">
            {
                categories.map((category) => {
                    return <button key={category}
                        onClick={() => dispatch(setActiveCategory({ category }))}
                        style={{
                            backgroundColor: activeCategory === category ? AccentColors.CODE : '',
                            color: activeCategory === category ? COMMON_COLORS.White : ThemeColors.thirdText,
                            '--hover': ThemeColors.third,
                            '--active': theme !== 'dark' ? COMMON_COLORS.White : COMMON_COLORS.Gray
                        }}
                        className={`${activeCategory === category ?'':'HOVER_CLASS'} select-none shrink-0 h-fit text-md md:text-lg  px-3.5 py-1 rounded-lg duration-500 ease-out active:scale-95
                                ${activeCategory === category ? ' font-bold' : 'font-semibold'}
                                
                            `}>
                        {category.length >= 17 ? category.slice(0, 17) + '...' : category}
                    </button>
                })
            }

        </div>
    )
}

export default Categories