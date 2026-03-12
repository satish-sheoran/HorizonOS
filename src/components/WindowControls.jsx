import { UsewindowControlFns } from "../utils/windowCntrlFns"

// group named class is only written inside this file nor in any other file to write its css, it is just use so that before hovering button, the text remain hidden
const WindowControls = ({ id }) => {

    const { closeApp } = UsewindowControlFns();

    return (
        <div className="window-controls text-black">

            <button
                onClick={() => closeApp(id)}
                className='group window-control-btns flex-col-center bg-(--color-close)'>
                <span className="w-full h-full opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-(--transition-medium)">
                    <img className="scale-70" src="/assets/icons/close.png" alt="X" />
                </span>
            </button>

            <button className='group window-control-btns flex-col-center not-odd:bg-(--color-minimize)'>
                <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">
                    <img className="scale-70" src="/assets/icons/minimize.png" alt="X" />
                </span>
            </button>

            <button className='group window-control-btns flex-col-center bg-(--color-zoom)'>
                <span className="zoom opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">

                    <svg width="14" height="14" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5 L15 5 L15 11 Z" />
                        <path d="M11 15 L5 15 L5 9 Z" />
                    </svg>

                </span>
            </button>
        </div>
    )
}

export default WindowControls