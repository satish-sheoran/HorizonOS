import { useSelector } from "react-redux";
import { UsewindowControlFns } from "../utils/windowCntrlFns"
import { X } from "lucide-react";
import { COMMON_COLORS } from "../constants/style";
import { CSS_EASING } from '../constants/Settings'
// group named class is only written inside this file nor in any other file to write its css, it is just use so that before hovering button, the text remain hidden
const MobileCntrls = ({ id, Theme, ThemeColors }) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    const { closeApp } = UsewindowControlFns();

    return (
        <div style={{
            backgroundColor: ThemeColors.header,
            borderColor: ThemeColors.thirdText,
            transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }}
            className={`mobile-header border-b  `}>

            <p
                style={{
                   fontFamily : Weights.SemiBold, color: ThemeColors.secText, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}
                className={`px-4 py-1.5  text-2xl font-semibold capitalize md:text-xl  select-none `}>{id === 'notes' ? activeTab : id}</p>
            <div style={{
                color: COMMON_COLORS.Black, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }} className="mobile-controls " >

                <button
                    onClick={() => closeApp(id)}
                    className='mobile-control-btns flex-col-center'>

                    <X
                        strokeWidth={3}
                        size={24}
                        style={{
                            color: ThemeColors.secText, transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                    />
                </button>

            </div>
        </div>

    )
}

export default MobileCntrls