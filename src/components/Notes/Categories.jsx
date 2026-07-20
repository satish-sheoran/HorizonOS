import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "../../redux/features/NotesStrorage";
import { COMMON_COLORS } from '../../constants/style'
import { CSS_EASING } from '../../constants/Settings'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
const Categories = ({ Theme, ThemeColors, AccentColors }) => {


    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const activeCategory = useSelector((store) => store.Notes.activeCategory)
    const categories = useSelector(store => store.Notes.allCategories) // all categories for notes app
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const isNotesOpen = useSelector((store) => store.windowApps.apps['notes'].isOpen);

    //refs
    const scrollCategoryRef = useRef(null) //used to get elem which will be scrolled in view


    useLayoutEffect(() => {
        if (!scrollCategoryRef.current) return;

        const HalfcotainerWidth = Math.floor((document.querySelector('.categories').clientWidth) / 2);
        const HalfchildWidth = Math.floor(((scrollCategoryRef.current).clientWidth) / 2);

        gsap.to('.categories', {
            duration: 0.35,
            ease: Animation ?? 'back.out(3)',
            scrollTo: {
                x: scrollCategoryRef.current,
                offsetX: HalfcotainerWidth - HalfchildWidth
            }
        })

    }, [activeCategory,isNotesOpen])


    return (
        <div className="categories w-full py-2 rounded-xl ">
            {
                categories.map((category) => {
                    return <button key={category}
                        ref={activeCategory == category ? scrollCategoryRef : null}
                        onClick={() => dispatch(setActiveCategory({ category }))}
                        style={{
                            fontSize: `${(Sizes.Small.slice(0,-3))*1.1}rem`,
                            fontFamily: activeCategory === category ? Weights.Bold : Weights.SemiBold,
                            backgroundColor: activeCategory === category ? AccentColors.CODE : '',
                            color: activeCategory === category ? COMMON_COLORS.White : ThemeColors.thirdText,
                            '--hover': ThemeColors.third,
                            '--active': Theme !== 'dark' ? COMMON_COLORS.White : COMMON_COLORS.Gray,

                        }}
                        className={`${activeCategory === category ? '' : 'HOVER_CLASS'} select-none shrink-0 h-fit   px-3.5 py-1.5 rounded-lg  active:scale-95
                                ${activeCategory === category ? ' font-bold' : 'font-semibold'}
                                
                            `}>
                        {category?.length >= 17 ? category?.slice(0, 17) + '...' : category}
                    </button>
                })
            }

        </div>
    )
}

export default Categories