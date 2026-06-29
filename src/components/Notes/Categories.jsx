import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../../redux/features/NotesStrorage";
import { COMMON_COLORS } from '../../constants/style'
import { CSS_EASING } from '../../constants/Settings'
const Categories = ({ Theme, ThemeColors, AccentColors }) => {


    const dispatch = useDispatch();
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div className="categories w-full py-2 rounded-xl ">
            {
                categories.map((category) => {
                    return <button key={category}
                        onClick={() => dispatch(setActiveCategory({ category }))}
                        style={{
                            fontFamily: activeCategory === category ? Weights.Bold : Weights.SemiBold,
                            backgroundColor: activeCategory === category ? AccentColors.CODE : '',
                            color: activeCategory === category ? COMMON_COLORS.White : ThemeColors.thirdText,
                            '--hover': ThemeColors.third,
                            '--active': Theme !== 'dark' ? COMMON_COLORS.White : COMMON_COLORS.Gray,
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`${activeCategory === category ? '' : 'HOVER_CLASS'} select-none shrink-0 h-fit text-md md:text-lg  px-3.5 py-1 rounded-lg  active:scale-95
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