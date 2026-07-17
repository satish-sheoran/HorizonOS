import SettingNFolder from "./SettingNFolder";

const Navbar = ({ Theme, ThemeColors, AccentColors }) => {

    return (
        <nav style={{
            color: ThemeColors.primaryText, 
        }} className={`pt-1  `}>
            <SettingNFolder Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
        </nav>
    )
}

export default Navbar