import { useSelector } from "react-redux";
import { UsewindowControlFns } from "../utils/windowCntrlFns"
import { toast } from "react-toastify";
import { COMMON_COLORS, ACCENT_COLORS } from "../constants/style";

// group named class is only written inside this file nor in any other file to write its css, it is just use so that before hovering button, the text remain hidden
const WindowControls = ({ id }) => {

    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const { closeApp, toggleFullscreen } = UsewindowControlFns();

    return (
        <div
            onDoubleClick={() => {
                toggleFullscreen(id)
            }}
            style={{
                backgroundColor: ThemeColors.header,
                borderColor: ThemeColors.sec
            }}
            className={`window-header border-b duration-500 ease-out`}>

            <div style={{ color: COMMON_COLORS.Black }} className="window-controls">

                <button
                    onClick={() => closeApp(id)}
                    style={{ backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE }}
                    className='group window-control-btns flex-col-center'>
                    <span className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-(--transition-medium)">
                        <img className="scale-70" src="/assets/icons/close.png" alt="X" />
                    </span>
                </button>

                <button
                    onClick={() => toast.info('This functionality will be available soon.')}
                    style={{ backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Lime').CODE }}
                    className='group window-control-btns flex-col-center'>
                    <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">
                        <img className="scale-70" src="/assets/icons/minimize.png" alt="-" />
                    </span>
                </button>

                <button
                    onClick={() => toggleFullscreen(id)}
                    style={{ backgroundColor: COMMON_COLORS.Blue }}
                    className='group window-control-btns flex-col-center'>
                    <span className="zoom opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">

                        <svg width="14" height="14" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5 L15 5 L15 11 Z" />
                            <path d="M11 15 L5 15 L5 9 Z" />
                        </svg>

                    </span>
                </button>
            </div>

            <p
                style={{ color: ThemeColors.secText }}
                className={`text-2xl font-bold capitalize md:text-xl select-none transition-all duration-150 ease-in-out`}>{id === 'notes' ? activeTab : id}</p>
        </div>

    )
}

export default WindowControls