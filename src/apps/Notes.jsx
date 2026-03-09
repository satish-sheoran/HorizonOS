import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"

const Notes = () => {
    return (
        <>
            <div className='w-full'>
                <div className='window-header'>
                    <WindowControls id='notes' />
                </div>
            </div>
        </>
    )
}

const NotesWindow = WindowWrapper(Notes, 'notes');

export default NotesWindow;