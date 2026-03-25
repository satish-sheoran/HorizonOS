import { useSelector } from "react-redux";
import SettingNFolder from "./settingNFolder";
import Categories from "./Categories";


const Navbar = () => {
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <nav className={`${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'} pt-1`}>
            <SettingNFolder />
            <Categories />

        </nav>
    )
}

export default Navbar