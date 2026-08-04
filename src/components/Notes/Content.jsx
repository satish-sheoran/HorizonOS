import AllTasks from "./data/AllTasks"
import NotesArea from "./data/NotesArea"

const Content = ({Theme,ThemeColors,AccentColors}) => {

    return (
        <div className="content">
            <NotesArea  Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} /> 
            <AllTasks Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} /> 
        </div>
    )
}

export default Content