import * as Icons from "lucide-react";
import { SETTINGS_SECTIONS } from '../../constants/Settings';
import { ChevronRight, Info } from "lucide-react";
import { setSection } from "../../redux/features/SettingsSlice";
import { useDispatch } from "react-redux";

const Sections = ({ currDevice, theme, activeSection, setShowContent }) => {

    const dispatch = useDispatch()

    return (
        <section className={`py-1 transition-colors duration-500 ease-out overflow-y-auto ${currDevice === 'Desktop' ? 'w-1/4 border-r' : 'w-full'} h-full  flex flex-col items-center ${theme !== 'dark' ? 'border-(--primary-light-clr)' : 'border-(--sec-dark-clr)'}`}>

            {SETTINGS_SECTIONS?.map(({ title, icon }, idx) => {
                const Icon = Icons[icon]
                return <div className={`relative cursor-default select-none py-1 w-full text-lg font-bold px-2 
                        `} key={idx}
                    onClick={() => {
                        dispatch(setSection({ section: title }));
                        setShowContent(true);
                    }}
                >

              
                    <div className={`duration-500 ease-out ${currDevice === 'Desktop' && activeSection === title ?
                    'bg-(--color-light-accent) text-(--primary-light-clr) hover:bg-(--color-accent) active:bg-(--color-accent)'
                        :
                       theme !== 'dark' ?
                            ' hover:bg-(--third-light-clr) active:bg-(--third-light-clr) text-(--primary-dark-clr)'
                            :
                            ' hover:bg-(--color-gray) active:bg-(--color-gray) text-(--primary-light-clr)'
                        }
                    py-2 relative w-full rounded-2xl px-[3.5%] md:px-[4.5%] active:scale-97`}>
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