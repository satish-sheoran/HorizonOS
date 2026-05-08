import { useSelector } from "react-redux";
import { UsewindowControlFns } from "../utils/windowCntrlFns"
import { X } from "lucide-react";

// group named class is only written inside this file nor in any other file to write its css, it is just use so that before hovering button, the text remain hidden
const MobileCntrls = ({ id }) => {

    const theme = useSelector((store) => store.wallpaper.theme)
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    const { closeApp } = UsewindowControlFns();

    return (
        <div className={`transition-colors duration-500 ease-out mobile-header border-b  ${theme != 'dark' ? 'bg-(--primary-light-clr) border-(--third-light-clr)' : 'bg-(--bg-dark-header) border-(--sec-dark-clr)'}`}>

            <p className={`px-4 py-1.5  text-2xl font-bold capitalize md:text-xl ${theme != 'dark' ? 'text-(--sec-dark-clr)' : 'text-(--color-light-gray) '} select-none transition-all           duration-500 ease-out`}>{id === 'notes' ? activeTab : id}</p>
            <div className="mobile-controls  text-(--primary-dark-clr)" >

                <button
                    onClick={() => closeApp(id)}
                    className='mobile-control-btns flex-col-center'>
                    <X strokeWidth={3} size={24} className={`duration-500 ease-out ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`} />
                </button>

            </div>
        </div>

    )
}

export default MobileCntrls