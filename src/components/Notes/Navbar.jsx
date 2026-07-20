import Search from "./Search";
import SettingNFolder from "./SettingNFolder";

const Navbar = ({ Theme, ThemeColors, AccentColors }) => {

    return (
        <nav style={{
            color: ThemeColors.primaryText,
        }} className={`pt-3 gap-4`}>
            <Search Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
            <SettingNFolder Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
        </nav>
    )
}

export default Navbar