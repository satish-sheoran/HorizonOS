import { NotebookPen } from 'lucide-react'
import { useSelector } from 'react-redux'
import { formatDateTime } from '../../../utils/formatTime'

const AllNotes = () => {
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeCategory = useSelector(store => store.Notes.activeCategory) // notes tab Or task tab for notes app
    // all notes in the app
    const Notes = useSelector(store => activeCategory === 'All' ? store.Notes.Notes : store.Notes.Notes.filter(note => note.category === activeCategory)) //notes based on active category


    return (
        <div className={`border AllNOtes-container  flex overflow-y-auto translate-y-0 ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'} grow `}>

            {Notes.length > 0 ? (
                Notes.map(({ title, id, category, desc, timeStamp }) => (
                    <div className={`Individual-note w-[200px] h-fit flex flex-col gap-2 rounded-lg p-3 cursor-pointer 
                    ${theme !== 'dark'
                            ? 'bg-(--bg-light-window-header)'
                            :
                            'bg-(--primary-dark-clr)'
                        }`}>
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
            )
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