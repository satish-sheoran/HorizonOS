import { useSelector } from "react-redux";
import { UsewindowControlFns } from "../utils/windowCntrlFns"
import { X } from "lucide-react";
import { COMMON_COLORS } from "../constants/style";

// group named class is only written inside this file nor in any other file to write its css, it is just use so that before hovering button, the text remain hidden
const MobileCntrls = ({ id }) => {

    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const Theme = useSelector((store) => store.wallpaper.theme)
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    const { closeApp } = UsewindowControlFns();

    return (
        <div style={{
            backgroundColor: ThemeColors.header,
            borderColor: ThemeColors.sec
        }}
            className={`transition-colors duration-500 ease-out mobile-header border-b  `}>

            <p 
            style={{color : ThemeColors.secText}}
            className={`px-4 py-1.5  text-2xl font-bold capitalize md:text-xl  select-none transition-all duration-500 ease-out`}>{id === 'notes' ? activeTab : id}</p>
            <div style={{color : COMMON_COLORS.Black}} className="mobile-controls " >

                <button
                    onClick={() => closeApp(id)}
                    className='mobile-control-btns flex-col-center'>

                    <X 
                    strokeWidth={3} 
                    size={24} 
                    style={{color : ThemeColors.secText}}
                    className={`duration-500 ease-out`} />
                </button>

            </div>
        </div>

    )
}

export default MobileCntrls