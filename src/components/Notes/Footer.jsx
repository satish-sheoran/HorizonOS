import { Check, TextAlignStart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../redux/features/NotesStrorage";

const Footer = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    return (
        <footer className={`${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>
            <div>

                <button
                    onClick={() => {
                        dispatch(setActiveTab({ tab: 'Notes' }))
                    }}
                >
                    <TextAlignStart size={22} strokeWidth={2} className={`
                           ${theme !== 'dark'
                            ? activeTab === 'Notes'
                                ? 'bg-(--sec-dark-clr)'
                                : 'bg-(--third-dark-clr-low)'
                            : activeTab === 'Notes'
                                ? 'bg-(--sec-light-clr)'
                                : 'bg-(--sec-light-clr-low)'
                        } 
                        rounded px-[1.2px] transition-all duration-150 ease-in-out 
                        ${theme != 'dark' ? 'stroke-(--bg-light-app-body)' : 'stroke-(--bg-dark-app-body)'}`} />

                    <span className={`transition-all duration-150 ease-in-out
                    ${theme !== 'dark' ?
                            activeTab === 'Notes'
                                ? 'text-(--sec-dark-clr)'
                                : 'text-(--third-dark-clr-low)'
                            : activeTab === 'Notes'
                                ? 'text-(--sec-light-clr)'
                                : 'text-(--sec-light-clr-low)'
                        }
                         `}>Notes</span>
                </button>

                <button
                    onClick={() => {
                        dispatch(setActiveTab({ tab: 'Tasks' }))
                    }}
                >
                    <Check size={22} strokeWidth={2} className={`
                       ${theme !== 'dark'
                            ? activeTab === 'Tasks'
                                ? 'bg-(--sec-dark-clr)'
                                : 'bg-(--third-dark-clr-low)'
                            : activeTab === 'Tasks'
                                ? 'bg-(--sec-light-clr)'
                                : 'bg-(--sec-light-clr-low)'
                        }
                        rounded transition-all duration-150 ease-in-out ${theme != 'dark' ? 'stroke-(--bg-light-app-body)' : 'stroke-(--bg-dark-app-body)'}`} />
                    <span className={`transition-all duration-150 ease-in-out 
                       ${theme !== 'dark' ?
                            activeTab === 'Tasks'
                                ? 'text-(--sec-dark-clr)'
                                : 'text-(--third-dark-clr-low)'
                            : activeTab === 'Tasks'
                                ? 'text-(--sec-light-clr)'
                                : 'text-(--sec-light-clr-low)'
                        }                        
                        `}>Tasks</span>
                </button>

            </div>
        </footer>
    )
}

export default Footer