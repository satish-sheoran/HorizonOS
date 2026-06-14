import { useSelector } from "react-redux";
import SettingNFolder from "./settingNFolder";


const Navbar = () => {
const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    
    return (
        <nav style={{ color: ThemeColors.primaryText }} className={`pt-1 transition-colors duration-500 ease-out  `}>
            <SettingNFolder />
        </nav>
    )
}

export default Navbar