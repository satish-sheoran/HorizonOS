import { ChevronRight } from "lucide-react"
import { SETTINGS_SECTIONS } from "../../../../constants/Settings"
import { useDispatch } from "react-redux";
import { setActivePanel } from "../../../../redux/features/SettingsSlice";

const AboutOptions = ({ Section, Theme, Device, fullScreen,ThemeColors,AccentColors }) => {

    const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).options;
    const dispatch = useDispatch()

    return (
        <section className={`flex-1 w-full gap-2 flex flex-col`}>

            {/* NAME, VERSION */}
            <div className={`p-[2.5%] w-full rounded-2xl flex flex-col  gap-2 overflow-hidden ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
                {OPTIONS?.map(({ Name, value }, idx) => {
                    return idx < 2 ?
                        (
                            <div key={idx} className={`active:scale-97 border rounded-2xl duration-500 ease-out flex items-center justify-between 
                                ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
             ${Theme !== 'dark' ? `border-(--color-lightDarkish-white) hover:bg-(--third-light-clr)  ${Device !=='Desktop'?'active:bg-(--third-light-clr)':'active:bg-(--primary-light-clr)'}` : 'border-(--bg-dark-app-body) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}`}>

                                <span className={`duration-500 ease-out select-none cursor-default font-bold ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>{Name}</span>
                                <span className='select-none cursor-pointer text-(--grayish-dark-clr) font-semibold'>{value}</span>

                            </div>
                        )
                        :
                        null
                })
                }
            </div>


            {/* OTHER OPTIONS */}
            <div className={`p-[2.5%] w-full flex flex-col rounded-2xl gap-2 overflow-hidden ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
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
                                className={`active:scale-97 border rounded-2xl duration-500 ease-out select-none font-semibold flex items-center justify-between 
                                ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
                                    ${Theme !== 'dark' ? `text-(--primary-dark-clr) border-(--color-lightDarkish-white) hover:bg-(--third-light-clr) ${Device !=='Desktop'?'active:bg-(--third-light-clr)':'active:bg-(--primary-light-clr)'}` : 'text-(--primary-light-clr) border-(--bg-dark-app-body) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}
                                `}>

                                <span>{Name}</span>
                                <span className={`${value === '' ? '' : value === 'Satish Sheoran' ? 'text-(--color-accent) font-bold' : 'text-(--grayish-dark-clr)'}`}>
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