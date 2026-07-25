import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Check, NotebookPen } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Masonry from "react-masonry-css";
import { COMMON_COLORS } from '../../../constants/style'
import { CSS_EASING } from '../../../constants/Settings'
import { formatDateTime } from '../../../utils/formatTime'
import { manageDeletedNotes, manageEditNote, setStartDeletingNotes } from '../../../redux/features/NotesStrorage'
import useLongPress from '../../../hooks/Use-long-press';
import gsap from 'gsap';


const AllNotes = ({ Theme, AccentColors, ThemeColors }) => {


    const dispatch = useDispatch();

    const isFactoryResetting = useSelector(store => store.Device.startFactoryReset) //used to check Factory resethas Started
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const { isOpen, fullScreen } = useSelector((store) => store.windowApps.apps['notes']);
    const NotesViewStyle = useSelector(store => store.Notes.NotesViewStyle)
    const { activeTab } = useSelector(store => store.Notes) // notes tab Or task tab for notes app
    const isDeleteNoteOpen = useSelector(store => store.Notes.startDeletingNotes);
    const deletingNotes = useSelector(store => store.Notes.deletedNotes)
    const activeCategory = useSelector(store => store.Notes.activeCategory) // notes tab Or task tab for notes app
    const searchInputVal = useSelector(store => store.Notes.searchInputVal)
    const Notes = useSelector(store => activeCategory === 'All' ? store.Notes.Notes : store.Notes.Notes?.filter(note => note.category === activeCategory)) //notes based on active category

    // useStates
    const [cols, setCols] = useState(1)

    //refs
    const ContainerRef = useRef(null)

    const { Handlers, isLongPress } = useLongPress(() => {
        if (!isDeleteNoteOpen) dispatch(setStartDeletingNotes({ start: true }));
    }) //custom hook to trigger if user did long press


    //resize observer observes and callback run when that elem size changes
    useLayoutEffect(() => {
        const elements = ContainerRef.current
        if (!elements) return

        const observer = new ResizeObserver((entries) => {
            const width = entries[0].contentRect.width;
            let cols;

            if (width <= 320) cols = 1;
            else if (width <= 640) cols = 2
            else if (width <= 768) cols = 3
            else if (width <= 1024) cols = 4
            else {
                cols = 5
            }

            setCols(cols)
        })

        if (!isFactoryResetting) {
            observer.observe(elements)
        } else {
            observer.disconnect();
        }

        return () => {
            observer.unobserve(elements);
            observer.disconnect();
        };
    }, [isFactoryResetting])

    useLayoutEffect(() => {
        // for appearing tasks with an animation
        if (activeTab === 'Notes') {
            const elems = document.querySelectorAll('.IndividualNote');
            elems.forEach(task => {
                gsap.from(task, {
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.55,
                    stagger: 0.05,
                    ease: "back.out(1.7)"
                });
            })
        }

    }, [activeTab, activeCategory])

    return (
        <div ref={ContainerRef} style={{

        }} className={` flex-1  AllNotes-container  overflow-y-auto    
        `}
        >
            {
                Notes?.length > 0 ?
                    <Masonry
                        breakpointCols={NotesViewStyle==='List view'?1:cols}
                        className="flex gap-2.5 w-full h-full "
                        columnClassName="flex flex-col gap-2.5"
                    >
                        {Notes.map(({ title, id, desc, timeStamp }) => (
                            <button id={`Note-${id}`}
                                {...(!isDeleteNoteOpen ? Handlers : {})} //adding long press handler only if delete mode is off

                                onClick={(e) => {
                                    if (isLongPress.current) {
                                        e.preventDefault(); // stop accidental click behavior

                                        if (!isDeleteNoteOpen) dispatch(setStartDeletingNotes({ start: true }));

                                        dispatch(manageDeletedNotes({ noteId: id }));
                                        return; // 🚨 STOP here
                                    }

                                    dispatch(manageEditNote({ open: true, NoteId: id }));
                                }}

                                key={id}
                                style={{
                                    borderColor: ThemeColors.third,
                                    // backgroundColor: Theme !== 'dark' ? ThemeColors.header : ThemeColors.header,
                                    '--hover': ThemeColors.third,
                                    '--active': Theme !== 'dark' ? COMMON_COLORS.White : COMMON_COLORS.Gray,


                                }}
                                className={`${Theme !== 'dark' ? "liquid-glass-black-btn" : 'liquid-glass-white-btn'} IndividualNote border HOVER_CLASS  relative w-full Individual-note h-fit  flex flex-col gap-2 rounded-2xl p-3 text-left cursor-pointer active:scale-95                             
                        `}>
                                <h3
                                    style={{
                                        fontSize: Sizes.Regular,
                                        fontFamily: Weights.SemiBold,
                                        color: ThemeColors.primaryText,
                                    }}

                                    className={`break-all
 select-none line-clamp-1  font-bold `}>
                                    {title ? title : desc}

                                </h3>

                                <p
                                    style={{
                                        fontSize: Sizes.Small,
                                        fontFamily: Weights.Regular,
                                        color: ThemeColors.secText,
                                    }}
                                    className={`break-all
 select-none  line-clamp-4 font-[650]
                            `}>
                                    {title && desc ? desc : 'No Text'} {/* if title and desc exist, display desc; otherwise, display 'No Text' */}
                                </p>

                                <div className='flex items-center justify-between gap-1 overflow-hidden'>
                                    <span style={{
                                        fontSize: Sizes.ExtraSmall,
                                        fontFamily: Weights.Regular,
                                        color: ThemeColors.thirdText,
                                    }}
                                        className={`block whitespace-nowrap text-ellipsis select-none 
                                             
                                            font-semibold 
                                            `}>
                                        {formatDateTime(timeStamp)}
                                    </span>

                                    {/* absolute button used to delete note */}
                                    {
                                        isDeleteNoteOpen === true &&
                                        <span
                                            style={{
                                                backgroundColor: deletingNotes?.includes(id) ? COMMON_COLORS.Yellow : ThemeColors.bg,
                                            }}
                                            className={`rounded-full w-4.5 h-4.5 flex items-center justify-center
                                `}>
                                            {deletingNotes?.includes(id) && <Check className='rounded-full ' style={{ color: COMMON_COLORS.White }} strokeWidth={3} size={17} />}
                                        </span>

                                    }
                                </div>

                            </button>
                        ))
                        }
                    </Masonry>
                    :
                    (
                        <div style={{
                            fontFamily: Weights.SemiBold,
                            color: ThemeColors.grayish,
                        }} className={`select-none w-full h-full flex flex-col items-center justify-center`}>
                            <NotebookPen size={30} />
                            <span style={{ fontSize: Sizes.Small }}>No notes here yet</span>
                        </div>
                    )
            }
        </div >
    )
}

export default AllNotes