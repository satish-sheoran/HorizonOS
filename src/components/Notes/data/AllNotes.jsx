import { useEffect } from 'react'
import { Check, NotebookPen } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Masonry from "react-masonry-css";

import { formatDateTime } from '../../../utils/formatTime'
import { manageDeletedNotes, manageEditTask, setNotesContainerWidth, setStartDeletingNotes } from '../../../redux/features/NotesStrorage'
import useLongPress from '../../../hooks/Use-long-press';


const AllNotes = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const { isOpen, fullScreen } = useSelector((store) => store.windowApps.apps['notes'])
    const isDeleteNoteOpen = useSelector(store => store.Notes.startDeletingNotes);
    const deletingNotes = useSelector(store => store.Notes.deletedNotes)
    const activeCategory = useSelector(store => store.Notes.activeCategory) // notes tab Or task tab for notes app
    // all notes in the app
    const Notes = useSelector(store => activeCategory === 'All' ? store.Notes.Notes : store.Notes.Notes.filter(note => note.category === activeCategory)) //notes based on active category


    const NotesContainerWidth = useSelector(store => store.Notes.NotesContainerWidth);

    const { Handlers, isLongPress } = useLongPress(() => {
        if (!isDeleteNoteOpen) dispatch(setStartDeletingNotes({ start: true }));
    }) //custom hook to trigger if user did long press

    useEffect(() => {
        // getting width of notes area 
        const getNotesContainerWidth = (el) => {
            if (!el || !isOpen) return;

            const width = Math.round(el.getBoundingClientRect().width);
            if (!Number.isFinite(width) || width <= 0) return;

            dispatch(setNotesContainerWidth({ width }));

        }

        const el = document.querySelector('.AllNotes-container');
        if (!el || !isOpen) return;

        const measure = () => getNotesContainerWidth(el);

        // 1) requestAnimationFrame: schedule run in next paint cycle after DOM updates.
        //    Important because fullScreen toggle may change CSS/size but that may not be final
        //    until next frame.
        // 2) setTimeout(..., 250): a second measure after 250ms to catch any transitions/animations
        //    that change layout after the count is rendered. This prevents stale width in store.
        requestAnimationFrame(() => {
            measure();
            setTimeout(measure, 250);
        });

    }, [isOpen, fullScreen, dispatch]);



    const cols = NotesContainerWidth <= 320 ? 1 :
        NotesContainerWidth <= 640 ? 2 :
            NotesContainerWidth <= 768 ? 3 :
                NotesContainerWidth <= 1024 ? 4 : 5; //manages no. of columns


    return (
        <div className={` flex-1  AllNotes-container duration-500 ease-out  overflow-y-auto  ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}  
        `}
        >
            {
                Notes.length > 0 ?
                    <Masonry
                        breakpointCols={cols}
                        className="flex gap-2.5 w-full h-full "
                        columnClassName="flex flex-col gap-2.5"
                    >
                        {Notes.map(({ title, id, desc, timeStamp }) => (
                            <button
                                {...(!isDeleteNoteOpen ? Handlers : {})} //adding long press handler only if delete mode is off


                                onClick={(e) => {
                                    if (isLongPress.current) {
                                        e.preventDefault(); // stop accidental click behavior

                                        if (!isDeleteNoteOpen) dispatch(setStartDeletingNotes({ start: true }));

                                        dispatch(manageDeletedNotes({ noteId: id }));
                                        return; // 🚨 STOP here
                                    }

                                    dispatch(manageEditTask({ open: true, TaskId: id }));
                                }}
                                // on click works as want but not opening edit mode on mobile only

                                key={id}
                                className={`duration-500 ease-out relative w-full Individual-note h-fit  flex flex-col gap-2 rounded-lg p-3 text-left cursor-pointer active:scale-95 
                    ${theme !== 'dark'
                                        ? 'bg-(--bg-light-window-header)'
                                        :
                                        'bg-(--primary-dark-clr)'
                                    }                            
                        `}>
                                <h3
                                    className={`duration-500 ease-out break-all
 select-none line-clamp-1 text-[1.3rem] font-bold ${theme !== 'dark' ?
                                            'text-(--primary-dark-clr)'
                                            :
                                            'text-(--primary-light-clr)'
                                        }`}>
                                    {title ? title : desc}

                                </h3>

                                <p
                                    className={`duration-500 ease-out break-all
 select-none text-[0.82rem] line-clamp-5 font-[650]
                            ${theme !== 'dark' ?
                                            'text-(--sec-dark-clr)'
                                            :
                                            'text-(--third-light-clr)'}
                            `}>
                                    {title && desc ? desc : 'No Text'} {/* if title and desc exist, display desc; otherwise, display 'No Text' */}
                                </p>

                                <div className='flex items-center justify-between gap-1 overflow-hidden'>
                                    <span
                                        className={`duration-500 ease-out block whitespace-nowrap text-ellipsis select-none 
                                            text-[0.68rem] 
                                            font-semibold 
                                            ${theme !== 'dark' ?
                                                'text-(--third-dark-clr)'
                                                : 'text-(--third-light-clr)'
                                            }`}>
                                        {formatDateTime(timeStamp)}
                                    </span>

                                    {/* absolute button used to delete note */}
                                    {
                                        isDeleteNoteOpen === true &&
                                        <span className={`duration-500 ease-out rounded-full w-4.5 h-4.5 flex items-center justify-center

                                ${deletingNotes?.includes(id) ? 'bg-(--bg-orange)'
                                                :
                                                theme !== 'dark' ?
                                                    'bg-(--btn-light-hover)'
                                                    :
                                                    'bg-(--bg-light-border)'

                                            }`}>
                                            {deletingNotes?.includes(id) && <Check className='rounded-full text-(--primary-light-clr)' strokeWidth={3} size={17} />}
                                        </span>

                                    }
                                </div>

                            </button>
                        ))
                        }
                    </Masonry>
                    :
                    (
                        <div className={`w-full h-full flex flex-col items-center justify-center ${theme !== 'dark' ? 'text-(--btn-light-hover)' : 'text-(--sec-light-clr)'}`}>
                            <NotebookPen size={30} />
                            <span>No notes here yet</span>
                        </div>
                    )
            }
        </div >)
}

export default AllNotes