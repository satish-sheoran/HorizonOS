import { useDispatch, useSelector } from 'react-redux'

import { manageDeletedCategories, setActiveCategory, setOpenManageFolder, setStartDeletingCat } from "../../../redux/features/NotesStrorage";
import { Check } from 'lucide-react';
import useLongPress from '../../../hooks/Use-long-press';
import { COMMON_COLORS } from '../../../constants/style';
import { CSS_EASING } from '../../../constants/Settings'
// count show remaining

const FolderCategory = ({ Theme, AccentColors, ThemeColors }) => {


    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
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
        <div style={{
            transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`overflow-y-auto rounded-2xl folder-category-list
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

                                if (category !== 'All' && category !== 'Uncategorized') dispatch(manageDeletedCategories({ category }));
                                return;
                            }

                            dispatch(setActiveCategory({ category }));
                            dispatch(setOpenManageFolder({ open: false })) // close manage folder when category is selected
                        }}
                        style={{
                            fontFamily: activeCategory === category ? Weights.Bold : Weights.SemiBold,
                            backgroundColor: activeCategory === category ? AccentColors.CODE : ThemeColors.third,
                            color: activeCategory === category ? COMMON_COLORS.White : ThemeColors.primaryText,
                            '--hover': ThemeColors.header,
                            '--active': ThemeColors.header,
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`px-4 
                            ${activeCategory === category ? 'font-bold' : 'font-semibold HOVER_CLASS'}
                            
                            `}>
                        <Check strokeWidth={2.5}
                            style={{
                                color: activeCategory === category ? COMMON_COLORS.Yellow : 'transparent', transitionProperty: 'color, background-color, border-color',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}
                            className={`select-none `} /> {/* on hidden,it do not reserve space so used text-transparent */}

                        <span style={{fontSize : Sizes.Small}} className="select-none">{category.length >= 17 ? category.slice(0, 17) + '...' : category}</span>


                        {/* count and selection area to delete cateogries */}
                        {
                            startDeletingCat === true && category !== 'All' && category !== 'Uncategorized' ?
                                <span
                                    style={{
                                        backgroundColor: deletedCategories?.includes(category) ? COMMON_COLORS.Orange : ThemeColors.bg, transitionProperty: 'color, background-color, border-color',
                                        transitionDuration: Speed,
                                        transitionTimingFunction: CSS_EASING[Animation]
                                    }}
                                    className={` rounded-full w-5.5 h-5.5 flex items-center justify-center
                                `}>
                                    {deletedCategories?.includes(category) && <Check style={{ color: COMMON_COLORS.White }} className='rounded-full' strokeWidth={3} size={17} />}
                                </span>
                                :
                                <span style={{fontSize : Sizes.Small}} className='select-none'>{category === 'All' ? Notes.length : Notes.filter(note => note.category === category).length}</span>
                        }



                    </button>
                })
            }

        </div >
    )
}

export default FolderCategory