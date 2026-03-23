import { useSelector } from "react-redux";
import { UsewindowControlFns } from "../utils/windowCntrlFns"

// group named class is only written inside this file nor in any other file to write its css, it is just use so that before hovering button, the text remain hidden
const MobileCntrls = ({ id }) => {

    const theme = useSelector((store) => store.wallpaper.theme)
    const { closeApp } = UsewindowControlFns();

    return (
        <div className={`mobile-header border-b ${theme != 'dark' ? 'bg-(--bg-light-window-header) border-(--bg-light-border)' : 'bg-(--bg-dark-window-header) border-(--bg-dark-border)'}`}>
            <p className='px-4 py-3'>{id}</p>
            <div className="mobile-controls text-black" >

                <button
                    onClick={() => closeApp(id)}
                    className='mobile-control-btns flex-col-center '>
                    <span>
                        <img className="scale-70 " src="/assets/icons/close2.png" alt="X" credit='Flaticon.com' />
                    </span>
                </button>

            </div>
        </div>

    )
}

export default MobileCntrls