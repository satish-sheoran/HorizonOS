import { useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"

const Notes = () => {
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <>
            <div className='w-full'>
                <div className={`window-header border-b ${theme != 'dark' ? 'bg-(--bg-light-window-header) border-(--bg-light-border)' : 'bg-(--bg-dark-window-header) border-(--bg-dark-border)'}`}>
                    <WindowControls id='notes' />
                </div>
            </div>
        </>
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;