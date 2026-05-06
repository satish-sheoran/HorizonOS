import { Check, FolderInput, Lock, PinOff, TextAlignStart, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setStartDeletingNotes } from "../../redux/features/NotesStrorage";
import { toast } from "react-toastify";
import { useState } from "react";
import ConfirmDeletePopUp from './Folder/ConfirmDeletePopUp'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const isDeleteNoteOpen = useSelector(store => store.Notes.startDeletingNotes);
    const deletedNotes = useSelector(store => store.Notes.deletedNotes);
    const [openDeletePopUp, setOpenDeletePopUp] = useState(false); //used to open delete pop up to delete notes 


    // animation for entry of cntrls of nots (delete,close editing etc.)
    useGSAP(() => {
        const elems = document.querySelectorAll('.note-cntrl-btns')
        if (!elems) return;

        if (isDeleteNoteOpen) {
            gsap.fromTo(elems, {
                scale: 0.5
            }, {
                scale: 1,
                duration: 0.4,
                ease : 'power1.out'
            })
        }
        

    }, [isDeleteNoteOpen])

    return (
        <footer className={`transition-colors duration-500 ease-out ${!isDeleteNoteOpen ? 'px-[25%]' : ''} z-20 `}>
            <div className='pb-1'>
                {
                    isDeleteNoteOpen === false ?
                        <>
                            <button
                                onClick={() => {
                                    dispatch(setActiveTab({ tab: 'Notes' }))
                                }}
                            >
                                <TextAlignStart size={22} strokeWidth={2} className={`duration-500 ease-out 
                           ${theme !== 'dark'
                                        ? activeTab === 'Notes'
                                            ? 'bg-(--sec-dark-clr)'
                                            : 'bg-(--third-dark-clr-low)'
                                        : activeTab === 'Notes'
                                            ? 'bg-(--sec-light-clr)'
                                            : 'bg-(--sec-light-clr-low)'
                                    } 
                        rounded px-[1.2px] 
                        ${theme != 'dark' ? 'stroke-(--bg-light-app-body)' : 'stroke-(--bg-dark-app-body)'}`} />

                                <span className={`duration-500 ease-out
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
                        rounded duration-500 ease-out ${theme != 'dark' ? 'stroke-(--bg-light-app-body)' : 'stroke-(--bg-dark-app-body)'}`} />
                                <span className={`duration-500 ease-out 
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
                        </>
                        :
                        <>
                            <button
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => dispatch(setStartDeletingNotes({ start: false }))}

                            >
                                <X size={22} strokeWidth={2} className={`
                        rounded px-[1.2px] duration-500 ease-out  
                        ${theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span className={`duration-500 ease-out 
                    ${theme !== 'dark' ?
                                        'text-(--primary-dark-clr)'
                                        : 'text-(--primary-light-clr)'
                                    }
                         `}>Close</span>

                            </button>

                            <button
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => toast.info('Feature Coming Soon')}

                            >
                                <PinOff size={22} strokeWidth={2} className={`
                                    
                        rounded px-[1.2px] transition-all duration-500 ease-out 
${theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span className={`transition-all duration-500 ease-out
                                     ${theme !== 'dark' ?
                                        'text-(--primary-dark-clr)'
                                        : 'text-(--primary-light-clr)'
                                    }
                         `}>Unpin</span>

                            </button>

                            <button
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => toast.info('Feature Coming Soon')}

                            >
                                <FolderInput size={22} strokeWidth={2} className={`
                                     
                        rounded px-[1.2px] transition-all duration-500 ease-out 
${theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span className={`transition-all duration-500 ease-out 
 ${theme !== 'dark' ?
                                        'text-(--primary-dark-clr)'
                                        : 'text-(--primary-light-clr)'
                                    }                                    
                         `}>Move to</span>

                            </button>

                            <button
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => {
                                    if (deletedNotes.length === 0) {
                                        toast.info("Select notes to delete !")
                                        return;
                                    } else {
                                        setOpenDeletePopUp(true);
                                    }
                                }}
                            >
                                <Trash size={22} strokeWidth={2} className={`
                        rounded px-[1.2px] transition-all duration-500 ease-out  
${theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}                        `} />

                                <span className={`transition-all duration-500 ease-out 
                                    ${theme !== 'dark' ?
                                        'text-(--primary-dark-clr)'
                                        : 'text-(--primary-light-clr)'
                                    }
                                `}>Delete</span>

                            </button>
                        </>
                }
            </div>

            {openDeletePopUp === true && <ConfirmDeletePopUp openDeletePopUp={openDeletePopUp} setOpenDeletePopUp={setOpenDeletePopUp} WorkingOn='Notes' />}

        </footer>
    )
}

export default Footer