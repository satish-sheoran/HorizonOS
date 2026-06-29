import { toast } from "react-toastify";
import { FolderClosed, Settings } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenManageFolder } from "../../redux/features/NotesStrorage";
import { CSS_EASING } from '../../constants/Settings'

const SettingNFolder = ({ Theme, ThemeColors, AccentColors }) => {
    const dispatch = useDispatch();
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used because when switching/opening folders window,the icon shows still,so to fix it,it is used here


    return (
        <div className={`setting-n-folders `}>

            {activeTab === 'Notes' ? <button onClick={() => {
                dispatch(setOpenManageFolder({ open: true }));
            }}>
                <FolderClosed style={{
                    transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }} className={`note-icons   ${isOpen === true ? "opacity-0 pointer-events-none" : 'opacity-100'}`} />
            </button> : ''}
            <button onClick={() => toast.info("This functionality will be available soon.")}>
                <Settings className="note-icons" />
            </button>
        </div>
    )
}

export default SettingNFolder