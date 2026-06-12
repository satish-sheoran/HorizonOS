import React from 'react'
import { CodeXml, Dot, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import { SETTINGS_TECHNOLOGIES } from '../../../../../../constants/Settings'


const Technologies = ({ Device, theme, Section }) => {
    return (
        <div className={`technologies flex flex-col gap-4 p-[2.5%] rounded-2xl ${theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>


            <div className={`flex gap-2 font-bold text-lg ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                <CodeXml className={`text-(--color-accent)`} strokeWidth={2.5} />
                <span>Built Using</span>
            </div>

            <div className={`flex justify-center flex-wrap gap-3 ${Device === 'Desktop' ? 'gap-3' : 'gap-2'}`}>

                {SETTINGS_TECHNOLOGIES.map(({ Tech_Name, icon }) => {
                    return <div
                        className={`ease-out duration-500 hover:scale-105 active:scale-105 overflow-hidden border text-sm 
                        ${theme !== 'dark' ? `border-(--color-lightDarkish-white) text-(--primary-dark-clr) hover:bg-(--third-light-clr)  ${Device !== 'Desktop' ? 'active:bg-(--third-light-clr)' : 'active:bg-(--primary-light-clr)'}`
                                :
                                'border-(--bg-dark-app-body) text-(--primary-light-clr) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'} 
                        px-3 py-1.5 font-semibold rounded-2xl  flex gap-2 justify-center items-center ${Device === 'Desktop' ? 'px-3 py-1' : 'px-4 py-2'}`}>

                        {icon ?
                            <img
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                onDragStart={(e) => e.preventDefault()}
                                className={`p-0.5 rounded object-cover object-center ${Device !== 'Desktop' ? 'w-5' : 'w-5.5'}`} src={icon} alt={Tech_Name} />
                            :
                            <span className={` ${Device !== 'Desktop' ? 'scale-150' : 'scale-200'} text-(--color-accent)`}>•</span>
                        }
                        <span>
                            {Tech_Name}
                        </span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Technologies  
