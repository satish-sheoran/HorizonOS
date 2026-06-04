import React from 'react'
import { CodeXml, Dot, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'


const Technologies = ({ Device, theme, Section }) => {
    return (
        <div className={`technologies flex flex-col gap-4 p-[2.5%] rounded-2xl ${theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>


            <div className={`flex gap-2 font-bold text-lg ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                <CodeXml className={`text-(--color-accent)`} strokeWidth={2.5} />
                <span>Built Using</span>
            </div>

            <div className={`flex justify-center flex-wrap gap-3 ${Device === 'Desktop' ? 'gap-3' : 'gap-2'}`}>

                {/* 1 */}
                <div
                    className={`overflow-hidden border text-sm ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--primary-light-clr)'} px-3 py-1.5 font-semibold rounded-2xl  flex gap-3 justify-center items-center ${Device === 'Desktop' ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
                    <span className={` ${Device !=='Desktop' ? 'scale-150' : 'scale-200'} text-(--color-accent)`}    >
                        •
                    </span>
                    <span>
                        React.js
                    </span>
                </div>

                {/* 2 */}
                <div 
                className={`overflow-hidden border text-sm ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--primary-light-clr)'} px-3 py-1.5 font-semibold rounded-2xl  flex gap-3 justify-center items-center ${Device === 'Desktop' ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
                    <span className={` ${Device !=='Desktop' ? 'scale-150' : 'scale-200'} text-(--color-accent)`}>
                        •
                    </span>
                    <span>
                        Redux Toolkit
                    </span>
                </div>

                {/* 3 */}
                <div
                    className={`overflow-hidden border text-sm ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--primary-light-clr)'} px-3 py-1.5 font-semibold rounded-2xl  flex gap-3 justify-center items-center ${Device === 'Desktop' ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
                    <span className={` ${Device !=='Desktop' ? 'scale-150' : 'scale-200'} text-(--color-accent)`}>
                        •
                    </span>
                    <span>
                        GSAP
                    </span>
                </div>

                {/* 4 */}
                <div
                    className={`overflow-hidden border text-sm ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--primary-light-clr)'} px-3 py-1.5 font-semibold rounded-2xl  flex gap-3 justify-center items-center ${Device === 'Desktop' ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
                    <span className={` ${Device !=='Desktop' ? 'scale-150' : 'scale-200'} text-(--color-accent)`}>
                        •
                    </span>
                    <span>
                        Tailwind CSS
                    </span>
                </div>

                {/* 5 */}
                <div
                    className={`overflow-hidden border text-sm ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body)   text-(--primary-light-clr)'} px-3 py-1.5 font-semibold rounded-2xl  flex gap-3 justify-center items-center ${Device === 'Desktop' ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
                    <span className={` ${Device !=='Desktop' ? 'scale-150' : 'scale-200'} text-(--color-accent)`}>
                        •
                    </span>
                    <span>
                        Vite
                    </span>
                </div>

                {/* 6 */}
                <div 
                className={`overflow-hidden border text-sm ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--primary-light-clr)'} px-3 py-1.5 font-semibold rounded-2xl  flex gap-3 justify-center items-center ${Device === 'Desktop' ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
                    <span className={` ${Device !=='Desktop' ? 'scale-150' : 'scale-200'} text-(--color-accent)`}>
                        •
                    </span>
                    <span>
                        JavaScript (ES6+)
                    </span>
                </div>

            </div>



        </div>
    )
}

export default Technologies