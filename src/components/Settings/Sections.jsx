import * as Icons from "lucide-react";
import { SETTINGS_SECTIONS } from '../../constants/Settings';
import { ChevronRight, Info } from "lucide-react";

const Sections = ({ currDevice, theme }) => {
    return (
        <section className={`overflow-y-auto ${currDevice === 'Desktop' ? 'w-1/4 border-r border-gray-400' : 'w-full'} h-full  flex flex-col items-center`}>

            {SETTINGS_SECTIONS?.map(({ title, icon }, idx) => {
                const Icon = Icons[icon]
                return <div className={`cursor-default select-none px-[2.5%] py-3 w-full text-lg font-bold 
                            ${theme !== 'dark' ? 'bg-(--primary-light-clr) hover:bg-(--bg-light-app-body) active:bg-(--bg-light-app-body) text-(--primary-dark-clr)'
                        :
                        'bg-(--bg-dark-app-body) hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr) text-(--primary-light-clr)'
                    }                                
                            
                        `} key={idx}>
                    <div className="w-full active:scale-97"> {/*JUST wrapper used to add scale during active so user feels the click*/}
                        <div className="flex w-full items-center justify-between">
                            <div className='flex gap-1.5 items-center'>
                                {Icon && <Icon />}
                                {title}
                            </div>
                            <div>
                                <ChevronRight />
                            </div>
                        </div>
                    </div>

                </div>
            })}
        </section>)
}

export default Sections