import { ChevronRight } from "lucide-react"
import { useDispatch } from "react-redux";
import { setActivePanel } from "../../../../redux/features/SettingsSlice";
import { COMMON_COLORS } from "../../../../constants/style";
import HorizonOS from './Sections/HorizonOS'
import NameNStorage from './Sections/NameNStorage'
import OsDetails from './Sections/OsDetails'


const ABOUT_SECTIONS = {
    HorizonOS,
    NameNStorage,
    OsDetails
}

const AboutSections = ({ Theme, Device, fullScreen, ThemeColors, AccentColors, ParentSection, Section: CurrSection }) => {


    const dispatch = useDispatch()

    return (
        <section className={`flex-1 w-full gap-2 flex flex-col`}>
            {CurrSection?.map(({ Section, FileName, Options }, idx) => {
                const Component = ABOUT_SECTIONS[FileName];
                if (!Component) return null;
                return <div className={`flex flex-col gap-2`} key={idx}>
                    <Component
                        Theme={Theme}
                        Device={Device}
                        fullScreen={fullScreen}
                        GrandParentSection={ParentSection} // Display Settings Behave as Grand Parent for that Option of Sub Section (Font,Colour Scheme etc.)
                        Options={Options}
                        Section={Section} // Section : Font , Colour Scheme (basically SubSection Name)
                        ThemeColors={ThemeColors}
                        AccentColors={AccentColors}
                    />
                </div>
            })}    

        </section>
    )
}

export default AboutSections