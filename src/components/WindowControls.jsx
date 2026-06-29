import { useDispatch, useSelector } from "react-redux";
import { UsewindowControlFns } from "../utils/windowCntrlFns"
import { toast } from "react-toastify";
import { COMMON_COLORS, ACCENT_COLORS } from "../constants/style";
import { focusWindow } from "../redux/features/windowApps";
import { CSS_EASING } from '../constants/Settings'
// group named class is only written inside this file nor in any other file to write its css, it is just use so that before hovering button, the text remain hidden
const WindowControls = ({ id, Theme, ThemeColors }) => {

    const dispatch = useDispatch()
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const { closeApp, toggleFullscreen } = UsewindowControlFns();
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div
            onDoubleClick={() => {
                toggleFullscreen(id)
            }}
            onClick={() => dispatch(focusWindow({ windowKey: id }))}
            style={{
                backgroundColor: ThemeColors.header,
                borderColor: ThemeColors.thirdText,
                transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`window-header border-b `}>

            <div style={{
                color: COMMON_COLORS.Black, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className="window-controls">

                <button
                    onClick={() => closeApp(id)}
                    style={{
                        backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}
                    className='group window-control-btns size-3.5 flex-col-center'>
                    <span style={{
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className="opacity-0 group-hover:opacity-100">
                        <img className="scale-70" src="/assets/icons/close.png" alt="X" />
                    </span>
                </button>

                <button
                    onClick={() => toast.info('This functionality will be available soon.')}
                    style={{
                        backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Lime').CODE, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}
                    className='group window-control-btns size-3.5 flex-col-center'>
                    <span style={{
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className="opacity-0 group-hover:opacity-100 ">
                        <img className="scale-70" src="/assets/icons/minimize.png" alt="-" />
                    </span>
                </button>

                <button
                    onClick={() => toggleFullscreen(id)}
                    style={{
                        backgroundColor: COMMON_COLORS.Blue, transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }}
                    className='group window-control-btns size-3.5 flex-col-center'>
                    <span style={{
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className="zoom opacity-0  group-hover:opacity-100 ">

                        <svg width="14" height="14" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5 L15 5 L15 11 Z" />
                            <path d="M11 15 L5 15 L5 9 Z" />
                        </svg>

                    </span>
                </button>
            </div>

            <p
                style={{
                    fontFamily: Weights.SemiBold, color: ThemeColors.secText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}
                className={`text-2xl font-semibold capitalize md:text-xl select-none `}>{id === 'notes' ? activeTab : id}</p>
        </div>

    )
}

export default WindowControls