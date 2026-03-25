import { useSelector } from "react-redux";
import SettingNFolder from "./settingNFolder";
import Categories from "./Categories";


const Navbar = () => {
    const theme = useSelector((store) => store.wallpaper.theme)
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app


    return (
        <nav className={`${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'} `}>
              <SettingNFolder /> 
            {activeTab === 'Notes' ? <Categories /> : ''}
        </nav>
    )
}

export default Navbar