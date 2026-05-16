import { ChevronRight } from "lucide-react"
import { SETTINGS_SECTIONS } from "../../../../constants/Settings"
import { useDispatch } from "react-redux";
import { setActivePanel } from "../../../../redux/features/SettingsSlice";

const AboutOptions = ({ Section, theme, Device, fullScreen }) => {

    const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).options;
    const dispatch = useDispatch()

    return (
        <section className={`py-2 flex-1 w-full gap-4 flex flex-col  ${Device === 'Desktop' && fullScreen ? 'pb-5' : ''}`}>

            {/* NAME, VERSION */}
            <div className={`w-full px-[3%]`}>
                {OPTIONS?.map(({ Name, value }, idx) => {
                    return idx < 2 ?
                        (
                            <div key={idx} className={`duration-500 ease-out ${idx === 0 ? 'rounded-t-xl pt-6 pb-3 md:pt-4 md:pb-2' : 'rounded-b-xl pt-3 pb-6 md:pt-2 md:pb-4'} px-6 md:px-4 flex items-center justify-between
             ${theme !== 'dark' ? 'bg-(--third-light-clr) hover:bg-(--primary-light-clr) active:bg-(--primary-light-clr)' : 'bg-(--third-dark-clr) hover:bg-(--color-gray) active:bg-(--color-gray)'}`}>

                                <span className={`duration-500 ease-out select-none cursor-default font-bold ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>{Name}</span>
                                <span className='select-none cursor-pointer text-(--grayish-dark-clr) font-semibold'>{value}</span>

                            </div>
                        )
                        :
                        null
                })
                }
            </div>


            {/* OTHER OPTIONS */}
            <div className='w-full flex flex-col '>
                {OPTIONS?.map(({ Name, value }, idx) => {
                    return idx >= 2 ?
                        (
                            <div key={idx}>
                                {/* HR tag */}
                                {Name === 'Certification' && <div className={`my-4 md:my-3 px-[6%] md:px-[2.5%] `}>
                                    <hr className={`duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--sec-dark-clr)' : 'border-(--sec-light-clr)'}`} />
                                </div>}
                                <div
                                    onClick={() => {
                                        if (value !== '') return;
                                        const option = Name.replaceAll(' ','')
                                        dispatch(setActivePanel({panel : option}))
                                    }
                                    }
                                    className={`select-none  px-5 md:px-4 font-semibold `}>

                                    <div className={`rounded-xl px-2 py-3 md:py-3  flex items-center justify-between ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--third-light-clr) active:bg-(--third-light-clr)' : 'text-(--primary-light-clr) hover:bg-(--color-gray) active:bg-(--color-gray)'}`}>
                                        <span>{Name}</span>
                                        <span className={`${value === '' ? '' : 'text-(--grayish-dark-clr)'}`}>
                                            {value !== '' ? value : <ChevronRight />}
                                        </span>
                                    </div>
                                </div>
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