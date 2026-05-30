import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'


const Details = ({Device,theme}) => {
    return (
        <div className={` about flex flex-col gap-4`}>
            <div className={`flex gap-2 font-bold text-lg ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                <Monitor strokeWidth={2.5} />
                <span>About HorizonOS</span>
            </div>
            <div className={`font-[450] text-sm flex flex-col gap-4 ${theme != 'dark' ? "text-(--sec-dark-clr)" : "text-(--sec-light-clr)"}`}>
                {Device !== 'Desktop' ?
                    <>
                        <span>
                            HorizonOS is a browser-based interactive OS experience inspired by modern desktop environments.
                        </span>

                        <span>
                            Built entirely with frontend technologies, it features responsive layouts, draggable windows, smooth animations, and multi-app interaction across desktop, tablet, and mobile devices.
                        </span>

                        <span>
                            It includes apps like Notes, Calculator, Settings, Clock, and Games Arena, focused on clean UI, smooth usability, and responsive design.
                        </span>

                        <span>
                            HorizonOS was created to explore advanced frontend engineering concepts such as state management, UI systems, animations, reusable architecture, and responsive application design.
                        </span>
                    </>
                    :
                    <>
                        <span> HorizonOS is a browser-based interactive operating system experience designed to stimulate the feel of a modern desktop environment.</span>
                        <span> Built entirely using frontend technologies, HorizonOS combines responsive layouts, draggable windows, smooth animations, and multi-app interaction to create sin immersive and realistic user interface experience across desktop, tablet, and mobile devices.</span>
                        <span> The operating system includes interactive applications such as Notes, Calculator, Settings, Clock, and Games Arena - all designed with a focus on smooth usability, clean UI architecture, and responsive behaviour.</span>
                        <span> HorizonOS was created as a frontend engineering project to explore advanced concepts inculding state management, UI systems, animations, reusable architecture, and responsive application design.
                        </span>
                    </>
                }
            </div>
        </div>)
}

export default Details