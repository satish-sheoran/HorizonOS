import { useEffect } from 'react'
import { NotebookPen } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Masonry from "react-masonry-css";

import { formatDateTime } from '../../../utils/formatTime'
import { manageEditTask, setNotesContainerWidth } from '../../../redux/features/NotesStrorage'


const AllNotes = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const { isOpen, fullScreen } = useSelector((store) => store.windowApps.apps['notes'])
    const activeCategory = useSelector(store => store.Notes.activeCategory) // notes tab Or task tab for notes app
    // all notes in the app
    const Notes = useSelector(store => activeCategory === 'All' ? store.Notes.Notes : store.Notes.Notes.filter(note => note.category === activeCategory)) //notes based on active category
    const NotesContainerWidth = useSelector(store => store.Notes.NotesContainerWidth);


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
        <div className={` flex-1  AllNotes-container  overflow-y-auto  ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}  
        
        `}
        >
            {
                Notes.length > 0 ?
                    <Masonry
                        breakpointCols={cols}
                        className="flex gap-3"
                        columnClassName="flex flex-col gap-3"
                    >
                        {Notes.map(({ title, id, desc, timeStamp }) => (
                            <div
                                onContextMenu={(e) => e.preventDefault()} //to hide right click options like back,developer mode,copy etc.
                                onClick={() => dispatch(manageEditTask({ open: true, TaskId: id }))}
                                key={id}
                                className={`w-full Individual-note h-fit  flex flex-col gap-2 rounded-lg p-3 cursor-pointer active:scale-95 
                    ${theme !== 'dark'
                                        ? 'bg-(--bg-light-window-header)'
                                        :
                                        'bg-(--primary-dark-clr)'
                                    }                            
                        `}>
                                <h3 className={`select-none line-clamp-1 text-[1.3rem] font-bold ${theme !== 'dark' ?
                                    'text-(--primary-dark-clr)'
                                    :
                                    'text-(--primary-light-clr)'
                                    }`}>
                                    {title ? title : desc}

                                </h3>

                                <p className={`select-none text-[0.82rem] line-clamp-5 font-[650]
                            ${theme !== 'dark' ?
                                        'text-(--sec-dark-clr)'
                                        :
                                        'text-(--third-light-clr)'}
                            `}>
                                    {title && desc ? desc : 'No Text'} {/* if title and desc exist, display desc; otherwise, display 'No Text' */}
                                </p>

                                <span className={`select-none text-[0.73rem] font-semibold ${theme !== 'dark' ?
                                    'text-(--third-dark-clr)'
                                    : 'text-(--third-light-clr)'
                                    }`}>
                                    {formatDateTime(timeStamp)}
                                </span>
                            </div>
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