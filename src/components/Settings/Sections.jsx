import * as Icons from "lucide-react";
import { SETTINGS_SECTIONS } from '../../constants/Settings';
import { ChevronRight, Info } from "lucide-react";
import { setSection } from "../../redux/features/SettingsSlice";
import { useDispatch } from "react-redux";

const Sections = ({ currDevice, theme, activeSection, setShowContent }) => {

    const dispatch = useDispatch()

    return (
        <section className={`transition-colors duration-500 ease-out overflow-y-auto ${currDevice === 'Desktop' ? 'w-1/4 border-r' : 'w-full'} h-full  flex flex-col items-center ${theme !== 'dark' ? 'border-(--sec-light-clr)' : 'border-(--sec-dark-clr)'}`}>

                {SETTINGS_SECTIONS?.map(({ title, icon }, idx) => {
                    const Icon = Icons[icon]
                    return <div className={`relative cursor-default select-none py-3 w-full text-lg font-bold 
                            ${theme !== 'dark' ?
                            ' hover:bg-(--bg-light-window-header) active:bg-(--bg-light-window-header) text-(--primary-dark-clr)'
                            :
                            ' hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr) text-(--primary-light-clr)'
                        }                                
                            
                        `} key={idx}
                        onClick={() => {
                            dispatch(setSection({ section: title }));
                            setShowContent(true);
                        }}
                    >
                        <div className="relative w-full px-[3.5%] md:px-[4.5%] active:scale-97"> {/*JUST wrapper used to add scale during active so user feels the click*/}

                            {currDevice === 'Desktop' && activeSection === title &&
                                <div className={`duration-500 ease-out absolute ${theme !== 'dark' ? 'bg-(--color-dark-gray)' : 'bg-(--primary-light-clr)'} left-0 w-1 h-full`}>
                                </div>}

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