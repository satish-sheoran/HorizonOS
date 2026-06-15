import { useSelector } from "react-redux";
import SettingNFolder from "./settingNFolder";


const Navbar = ({Theme,ThemeColors,AccentColors}) => {
 
    return (
        <nav style={{ color: ThemeColors.primaryText }} className={`pt-1 transition-colors duration-500 ease-out  `}>
            <SettingNFolder Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
        </nav>
    )
}

export default Navbar