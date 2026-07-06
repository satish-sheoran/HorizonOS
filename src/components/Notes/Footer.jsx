import { Check, FolderInput, Lock, PinOff, TextAlignStart, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setStartDeletingNotes } from "../../redux/features/NotesStrorage";
import { toast } from "react-toastify";
import { useState } from "react";
import ConfirmDeletePopUp from './Folder/ConfirmDeletePopUp'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { COMMON_COLORS, DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "../../constants/style";
import { CSS_EASING } from '../../constants/Settings'


const Footer = ({ Theme, ThemeColors, AccentColors }) => {

    const dispatch = useDispatch();

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Device = useSelector((store) => store.Device.currDevice);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
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
                ease: Animation ?? 'power1.out'
            })
        }


    }, [isDeleteNoteOpen])

    return (
        <footer style={{
            transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`${!isDeleteNoteOpen ? 'px-[25%]' : ''} z-20 `}>
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
                                        backgroundColor: activeTab === 'Notes' ? ThemeColors.primaryText : ThemeColors.grayish,
                                        '--stroke': ThemeColors.primaryText,
                                        transitionProperty: 'color, background-color, border-color',
                                        transitionDuration: Speed,
                                        transitionTimingFunction: CSS_EASING[Animation]
                                    }}
                                    className={`  
                        rounded px-[1.2px] 
                        ${Theme != 'dark' ? 'stroke-(--primary-light-clr)' : 'stroke-(--primary-dark-clr)'}`} />

                                <span
                                    style={{
                                        fontSize : Sizes.Small ,fontFamily: Weights.SemiBold,
                                        color: activeTab === 'Notes' ? ThemeColors.primaryText
                                            :
                                            ThemeColors.grayish,
                                        transitionProperty: 'color, background-color, border-color',
                                        transitionDuration: Speed,
                                        transitionTimingFunction: CSS_EASING[Animation]
                                    }}
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
                                    transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} className={`
                        rounded ${Theme != 'dark' ? 'stroke-(--primary-light-clr)' : 'stroke-(--bg-dark-app-body)'}`} />
                                <span style={{
                                  fontSize : Sizes.Small ,  fontFamily: Weights.SemiBold,
                                    color: activeTab !== 'Notes' ? ThemeColors.primaryText
                                        :
                                        ThemeColors.grayish,
                                    transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} className={`
                                               
                        `}>Tasks</span>
                            </button>
                        </>
                        :
                        <>
                            <button style={{
                                transitionProperty: 'color, background-color, border-color',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => dispatch(setStartDeletingNotes({ start: false }))}

                            >
                                <X style={{
                                    transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} size={22} strokeWidth={2} className={`
                        rounded px-[1.2px]   
                        ${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span style={{
                                  fontSize : Sizes.Small ,  fontFamily: Weights.SemiBold,
                                    color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} className={` 
                         `}>Close</span>

                            </button>

                            <button style={{
                                transitionProperty: 'color, background-color, border-color',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => toast.info('Feature Coming Soon')}

                            >
                                <PinOff style={{
                                    transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} size={22} strokeWidth={2} className={`
                                    
                        rounded px-[1.2px]  
${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span style={{
                                  fontSize : Sizes.Small , fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} >Unpin</span>

                            </button>

                            <button style={{
                                transitionProperty: 'color, background-color, border-color',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}
                                className="note-cntrl-btns active:scale-95"
                                onClick={() => toast.info('Feature Coming Soon')}

                            >
                                <FolderInput style={{
                                    transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} size={22} strokeWidth={2} className={`
                                     
                        rounded px-[1.2px] 
${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}
                        `} />

                                <span style={{
                                   fontSize : Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} >Move to</span>

                            </button>

                            <button style={{
                                transitionProperty: 'color, background-color, border-color',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }}
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
                                <Trash style={{
                                    transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} size={22} strokeWidth={2} className={`
                        rounded px-[1.2px]   
${Theme != 'dark' ?
                                        'stroke-(--primary-dark-clr)'
                                        :
                                        'stroke-(--primary-light-clr)'}                        `} />

                                <span style={{
                                  fontSize : Sizes.Small,  fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
                                    transitionDuration: Speed,
                                    transitionTimingFunction: CSS_EASING[Animation]
                                }} >Delete</span>

                            </button>
                        </>
                }
            </div>

            {openDeletePopUp === true && <ConfirmDeletePopUp openDeletePopUp={openDeletePopUp} setOpenDeletePopUp={setOpenDeletePopUp} WorkingOn='Notes' Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />}

        </footer>
    )
}

export default Footer