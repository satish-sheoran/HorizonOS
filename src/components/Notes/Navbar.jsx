import { useSelector } from "react-redux";
import SettingNFolder from "./settingNFolder";
import { CSS_EASING } from '../../constants/Settings'

const Navbar = ({ Theme, ThemeColors, AccentColors }) => {


    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <nav style={{
            color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`pt-1  `}>
            <SettingNFolder Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
        </nav>
    )
}

export default Navbar