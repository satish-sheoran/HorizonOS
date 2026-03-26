import { useSelector } from "react-redux";
import SettingNFolder from "./settingNFolder";


const Navbar = () => {
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <nav className={`${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'} `}>
            <SettingNFolder />
        </nav>
    )
}

export default Navbar