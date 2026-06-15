import { Check, FolderInput, Lock, PinOff, TextAlignStart, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setStartDeletingNotes } from "../../redux/features/NotesStrorage";
import { toast } from "react-toastify";
import { useState } from "react";
import ConfirmDeletePopUp from './Folder/ConfirmDeletePopUp'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { COMMON_COLORS, DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "../../constants/style";

const Footer = ({Theme,ThemeColors,AccentColors}) => {
    const dispatch = useDispatch();
    const Device = useSelector((store) => store.Device.currDevice);
    
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
                ease: 'power1.out'
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
                                <TextAlignStart size={22} strokeWidth={2}
                                    style={{
                                        backgroundColor:  activeTab ==='Notes'?ThemeColors.primaryText:ThemeColors.grayish,
                                        '--stroke': ThemeColors.primaryText
                                    }}
                                    className={`transition-colors duration-500 ease-out  
                        rounded px-[1.2px] 
                        ${Theme != 'dark' ? 'stroke-(--primary-light-clr)' : 'stroke-(--primary-dark-clr)'}`} />

                                <span 
                                style={{
                                    color : activeTab ==='Notes'?ThemeColors.primaryText
                                    :
                                    ThemeColors.grayish
                                }}
                                className={`duration-500 ease-out
                         `}>Notes</span>
                            </button>

                            <button
                                onClick={() => {
                                    dispatch(setActiveTab({ tab: 'Tasks' }))
                                }}
                            >
                                <Check size={22} strokeWidth={2} style={{
                                        backgroundColor:  activeTab !=='Notes'?ThemeColors.primaryText:ThemeColors.grayish,
                                        '--strokeClr': ThemeColors.primaryText
                                    }} className={`
                        rounded duration-500 ease-out ${Theme != 'dark' ? 'stroke-(--primary-light-clr)' : 'stroke-(--bg-dark-app-body)'}`} />
                                <span style={{
                                    color : activeTab !=='Notes'?ThemeColors.primaryText
                                    :
                                    ThemeColors.grayish
                                }} className={`duration-500 ease-out 
                                               
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
                        ${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span style={{color : ThemeColors.primaryText}} className={`duration-500 ease-out 
                         `}>Close</span>

                            </button>

                            <button
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => toast.info('Feature Coming Soon')}

                            >
                                <PinOff size={22} strokeWidth={2} className={`
                                    
                        rounded px-[1.2px] transition-all duration-500 ease-out 
${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span style={{color : ThemeColors.primaryText}} className={`transition-all duration-500 ease-out
                                     
                         `}>Unpin</span>

                            </button>

                            <button
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => toast.info('Feature Coming Soon')}

                            >
                                <FolderInput size={22} strokeWidth={2} className={`
                                     
                        rounded px-[1.2px] transition-all duration-500 ease-out 
${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span style={{color : ThemeColors.primaryText}} className={`transition-all duration-500 ease-out                                   
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
${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}                        `} />

                                <span style={{color : ThemeColors.primaryText}} className={`transition-all duration-500 ease-out 
                                    
                                `}>Delete</span>

                            </button>
                        </>
                }
            </div>

            {openDeletePopUp === true && <ConfirmDeletePopUp openDeletePopUp={openDeletePopUp} setOpenDeletePopUp={setOpenDeletePopUp} WorkingOn='Notes' Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />}

        </footer>
    )
}

export default Footer