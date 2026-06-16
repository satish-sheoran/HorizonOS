import { ChevronRight } from "lucide-react"
import { SETTINGS_SECTIONS } from "../../../../constants/Settings"
import { useDispatch } from "react-redux";
import { setActivePanel } from "../../../../redux/features/SettingsSlice";
import { COMMON_COLORS } from "../../../../constants/style";

const AboutOptions = ({ Section, Theme, Device, fullScreen, ThemeColors, AccentColors }) => {

    const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).options;
    const dispatch = useDispatch()

    return (
        <section className={`flex-1 w-full gap-2 flex flex-col`}>

            {/* NAME, VERSION */}
            <div style={{ backgroundColor: ThemeColors.header }} className={`p-[2.5%] w-full rounded-2xl flex flex-col  gap-2 overflow-hidden`}>
                {OPTIONS?.map(({ Name, value }, idx) => {
                    return idx < 2 ?
                        (
                            <div key={idx}
                                style={{
                                    borderColor: ThemeColors.bg,
                                    '--hover': ThemeColors.third,
                                    '--active': Theme !== 'dark' ?
                                        Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                        :
                                        COMMON_COLORS.Gray
                                }}
                                className={`HOVER_CLASS active:scale-97 border rounded-2xl duration-500 ease-out flex items-center justify-between 
                                ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>

                                <span
                                style={{ color : ThemeColors.primaryText}}
                                className={`duration-500 ease-out select-none cursor-default font-bold`}>{Name}</span>
                                <span
                                style={{ color : ThemeColors.grayish}}
                                className='select-none cursor-pointer  font-semibold'>{value}</span>

                            </div>
                        )
                        :
                        null
                })
                }
            </div>


            {/* OTHER OPTIONS */}
            <div 
            style={{backgroundColor : ThemeColors.header}}
            className={`p-[2.5%] w-full flex flex-col rounded-2xl gap-2 overflow-hidden`}>
                {OPTIONS?.map(({ Name, value }, idx) => {
                    return idx >= 2 ?
                        (
                            <div
                                key={idx}
                                onClick={() => {
                                    if (value !== '') return;
                                    const option = Name.replaceAll(' ', '')
                                    dispatch(setActivePanel({ panel: option }))
                                }
                                }
                                style={{
                                    borderColor: ThemeColors.bg,
                                                  color: ThemeColors.primaryText,
                                                  '--hover': ThemeColors.third,
                                                  '--active': Theme !== 'dark' ?
                                                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                                    :
                                                    COMMON_COLORS.Gray
                                }}
                                className={`HOVER_CLASS active:scale-97 border rounded-2xl duration-500 ease-out select-none font-semibold flex items-center justify-between 
                                ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
                                `}>

                                <span>{Name}</span>
                                <span style={{ color : value ? COMMON_COLORS.Blue : ThemeColors.grayish}}>
                                    {value !== '' ? value : <ChevronRight />}
                                </span>

                            </div>

                        )
                        :
                        null
                })
                }

            </div>


        </section>
    )
}

export default AboutOptions