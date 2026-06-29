import * as AllIcons from "lucide-react";
import { SECTIONS } from '../../constants/Settings';
import { ChevronRight, Info } from "lucide-react";
import { setSection } from "../../redux/features/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { COMMON_COLORS } from '../../constants/style'
import { CSS_EASING } from '../../constants/Settings'

const Sections = ({ currDevice, Theme, activeSection, setShowContent, ThemeColors, AccentColors }) => {

    const dispatch = useDispatch()
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <section style={{
            borderColor: ThemeColors.third, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`py-1 overflow-y-auto ${currDevice === 'Desktop' ? 'w-1/4 border-r' : 'w-full'} h-full  flex flex-col items-center`}>

            {SECTIONS?.map(({ Section, Icon }, idx) => {
                const SectionIcon = AllIcons[Icon]
                return <div className={`relative cursor-default select-none py-1 w-full text-lg font-bold px-2 
                        `} key={idx}
                    onClick={() => {
                        dispatch(setSection({ section: Section }));
                        setShowContent(true);
                    }}
                >

                    <div
                        style={{
                            backgroundColor: currDevice === 'Desktop' && activeSection === Section ?
                                AccentColors.CODE : '',
                            color: currDevice === 'Desktop' && activeSection === Section ? COMMON_COLORS.White :
                                ThemeColors.primaryText,
                            '--hover': currDevice === 'Desktop' && activeSection === Section ?
                                AccentColors.Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray,
                            '--active': currDevice === 'Desktop' && activeSection === Section ?
                                AccentColors.Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray,
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`HOVER_CLASS py-2 relative w-full rounded-2xl px-[3.5%] md:px-[4.5%] active:scale-97`}>
                        {/*JUST wrapper used to add scale during active so user feels the click*/}


                        <div className="flex w-full items-center justify-between">
                            <div style={{
                                fontFamily : Weights.SemiBold ,transitionProperty: 'color, background-color, border-color',
                                transitionDuration: Speed,
                                transitionTimingFunction: CSS_EASING[Animation]
                            }} className='md:text-md flex gap-1.5 items-center '>
                                {SectionIcon && <SectionIcon className='shrink-0' />}
                                {Section}
                            </div>
                            {currDevice !== 'Desktop' && <div>
                                <ChevronRight />
                            </div>}
                        </div>
                    </div>

                </div>
            })}
        </section>
    )
}

export default Sections