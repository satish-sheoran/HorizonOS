import * as Icons from "lucide-react";
import { SETTINGS_SECTIONS } from '../../constants/Settings';
import { ChevronRight, Info } from "lucide-react";
import { setSection } from "../../redux/features/SettingsSlice";
import { useDispatch } from "react-redux";
import { COMMON_COLORS } from '../../constants/style'

const Sections = ({ currDevice, Theme, activeSection, setShowContent, ThemeColors, AccentColors }) => {

    const dispatch = useDispatch()

    return (
        <section style={{
            borderColor: ThemeColors.third
        }} className={`py-1 transition-colors duration-500 ease-out overflow-y-auto ${currDevice === 'Desktop' ? 'w-1/4 border-r' : 'w-full'} h-full  flex flex-col items-center`}>

            {SETTINGS_SECTIONS?.map(({ title, icon }, idx) => {
                const Icon = Icons[icon]
                return <div className={`relative cursor-default select-none py-1 w-full text-lg font-bold px-2 
                        `} key={idx}
                    onClick={() => {
                        dispatch(setSection({ section: title }));
                        setShowContent(true);
                    }}
                >


                    <div
                        style={{
                            backgroundColor: currDevice === 'Desktop' && activeSection === title ?
                                AccentColors.CODE : '',
                            color: currDevice === 'Desktop' && activeSection === title ? COMMON_COLORS.White :
                                ThemeColors.primaryText,
                            '--hover': currDevice === 'Desktop' && activeSection === title ?
                                AccentColors.Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray,
                            '--active': currDevice === 'Desktop' && activeSection === title ?
                                AccentColors.Hover_Clr : Theme !== 'dark' ? ThemeColors.third : COMMON_COLORS.Gray,

                        }}
                        className={`HOVER_CLASS duration-500 ease-out py-2 relative w-full rounded-2xl px-[3.5%] md:px-[4.5%] active:scale-97`}>
                        {/*JUST wrapper used to add scale during active so user feels the click*/}


                        <div className="flex w-full items-center justify-between">
                            <div className='md:text-md flex gap-1.5 items-center '>
                                {Icon && <Icon className='shrink-0' />}
                                {title}
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