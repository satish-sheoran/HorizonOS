import { Check, FolderInput, Lock, Pin, PinOff, TextAlignStart, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setStartDeletingNotes, setstartDeletingTasks, ManageNotesPin } from "../../redux/features/NotesStrorage";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import ConfirmDeletePopUp from './Folder/ConfirmDeletePopUp'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { COMMON_COLORS, DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "../../constants/style";
import { CSS_EASING } from '../../constants/Settings'
import MoveTo from "./MoveTo";


const Footer = ({ Theme, ThemeColors, AccentColors }) => {

    const dispatch = useDispatch();

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Device = useSelector((store) => store.Device.currDevice);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const isDeleteNoteOpen = useSelector(store => store.Notes.startDeletingNotes);
    const deletedNotes = useSelector(store => store.Notes.deletedNotes);
    const startDeletingTasks = useSelector(store => store.Notes.startDeletingTasks); //used for tasks deletion
    const deletedTasks = useSelector(store => store.Notes.deletedTasks) //used for tasks deletion
    const Notes = useSelector(store => store.Notes.Notes) //notes

    const [openDeletePopUp, setOpenDeletePopUp] = useState(false); //used to open delete pop up to delete notes 
    const [openMoveToPop, setopenMoveToPop] = useState(false)

    

    // animation for entry of cntrls of nots (delete,close editing etc.)
    useGSAP(() => {
        const elems = document.querySelectorAll('.note-cntrl-btns')
        if (!elems) return;

        if (isDeleteNoteOpen || startDeletingTasks) {
            gsap.fromTo(elems, {
                scale: 0.5
            }, {
                scale: 1,
                duration: 0.4,
                ease: Animation ?? 'power1.out'
            })
        }


    }, [isDeleteNoteOpen, startDeletingTasks])

    return (
        <footer style={{

        }} className={`${(!isDeleteNoteOpen && !startDeletingTasks) ? 'px-[25%]' : ''} z-20 `}>
            <div className={`pb-1 flex ${(!isDeleteNoteOpen && !startDeletingTasks) ? '' : Device !== 'Mobile' || activeTab !== 'Notes' ? 'justify-around' : ''} `}>
                {
                    (isDeleteNoteOpen === false && startDeletingTasks === false) ?
                        <>
                            <button
                                onClick={() => {
                                    dispatch(setActiveTab({ tab: 'Notes' }))
                                }}
                            >
                                <TextAlignStart size={22} strokeWidth={2}
                                    style={{
                                        backgroundColor: activeTab === 'Notes' ? ThemeColors.primaryText : ThemeColors.grayish,
                                        '--stroke': ThemeColors.primaryText,

                                    }}
                                    className={`  
                        rounded px-[1.2px] 
                        ${Theme != 'dark' ? 'stroke-(--primary-light-clr)' : 'stroke-(--primary-dark-clr)'}`} />

                                <span
                                    style={{
                                        fontSize: Sizes.Small, fontFamily: Weights.SemiBold,
                                        color: activeTab === 'Notes' ? ThemeColors.primaryText
                                            :
                                            ThemeColors.grayish,

                                    }} className="select-none"
                                >Notes</span>
                            </button>

                            <button
                                onClick={() => {
                                    dispatch(setActiveTab({ tab: 'Tasks' }))
                                }}
                            >
                                <Check size={22} strokeWidth={2} style={{
                                    backgroundColor: activeTab !== 'Notes' ? ThemeColors.primaryText : ThemeColors.grayish,
                                    '--strokeClr': ThemeColors.primaryText,

                                }} className={`
                        rounded ${Theme != 'dark' ? 'stroke-(--primary-light-clr)' : 'stroke-(--bg-dark-app-body)'}`} />
                                <span style={{
                                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold,
                                    color: activeTab !== 'Notes' ? ThemeColors.primaryText
                                        :
                                        ThemeColors.grayish,

                                }} className={`select-none`}>Tasks</span>
                            </button>
                        </>
                        :
                        <>
                            <button style={{

                            }}
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => {
                                    if (startDeletingTasks) dispatch(setstartDeletingTasks({ start: false }))
                                    dispatch(setStartDeletingNotes({ start: false }))
                                }}

                            >
                                <X style={{

                                }} size={22} strokeWidth={2} className={`
                        rounded px-[1.2px]   
                        ${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span style={{
                                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold,
                                    color: ThemeColors.primaryText,
                                }} className={` select-none
                         `}>Close</span>

                            </button>

                            {activeTab === 'Notes' && <button style={{ color: ThemeColors.primaryText }}
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => {
                                    dispatch(ManageNotesPin({
                                        NotesId: deletedNotes,
                                        pin: Notes.some((note) => deletedNotes.includes(note.id) && note.pin) ? false : true
                                    }))

                                }}
                            >
                                {
                                    Notes.some((note) => deletedNotes.includes(note.id) && note.pin) ?
                                        <PinOff size={22} strokeWidth={2} className={`rounded px-[1.2px]${Theme != 'dark' ? 'stroke-(--primary-dark-clr)' : 'stroke-(--primary-light-clr)'} `} /> :
                                        <Pin size={22} strokeWidth={2} className={`rounded px-[1.2px]${Theme != 'dark' ? 'stroke-(--primary-dark-clr)' : 'stroke-(--primary-light-clr)'} `} />
                                }

                                < span style={{
                                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                                }} className="select-none" >{Notes.some((note) => deletedNotes.includes(note.id) && note.pin) ? 'Unpin' : 'pin'}</span>

                            </button>}

                            {activeTab === 'Notes' && <button style={{

                            }}
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => {
                                    if (deletedNotes.length !== 0) {
                                        setopenMoveToPop(true)
                                        return;
                                    }
                                    toast.info("Select Notes to Move !")

                                }}

                            >
                                <FolderInput style={{

                                }} size={22} strokeWidth={2} className={`rounded px-[1.2px] ${Theme != 'dark' ?
                                    'stroke-(--primary-dark-clr)'
                                    :
                                    'stroke-(--primary-light-clr)'}`} />

                                <span style={{
                                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                                }} className="select-none">Move to</span>

                            </button>}

                            <button style={{

                            }}
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => {
                                    if (startDeletingTasks) {
                                        if (deletedTasks.length !== 0) {
                                            setOpenDeletePopUp(true);
                                            return;
                                        }
                                        toast.info("Select Tasks to delete !")
                                        return;
                                    }
                                    if (deletedNotes.length !== 0) {
                                        setOpenDeletePopUp(true);
                                        return;
                                    }
                                    toast.info("Select notes to delete !")
                                }}
                            >
                                <Trash style={{

                                }} size={22} strokeWidth={2} className={`
                        rounded px-[1.2px]   
${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}                        `} />

                                <span style={{
                                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                                }} className="select-none">Delete</span>

                            </button>
                        </>
                }
            </div>

            {openDeletePopUp === true && <ConfirmDeletePopUp openDeletePopUp={openDeletePopUp} setOpenDeletePopUp={setOpenDeletePopUp} WorkingOn={startDeletingTasks ? 'Tasks' : 'Notes'} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />}

            {
                openMoveToPop === true && <MoveTo
                    openMoveToPop={openMoveToPop}
                    setopenMoveToPop={setopenMoveToPop}
                    Theme={Theme}
                    ThemeColors={ThemeColors}
                    AccentColors={AccentColors}
                />
            }

        </footer >
    )
}

export default Footer