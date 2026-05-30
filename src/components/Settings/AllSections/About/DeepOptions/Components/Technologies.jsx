import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'


const Technologies = ({ Device, theme, Section }) => {
    return (
        <div className={`technologies flex flex-col gap-4`}>


            <div className={`flex gap-2 font-bold text-lg ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                <CodeXml strokeWidth={2.5} />
                <span>Built Using</span>
            </div>

            {Device === 'Desktop' ?
                <div className={`flex justify-center flex-wrap gap-3`}>

                    {/* 1 */}
                    <div className={` text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-1.5 font-semibold  rounded-lg   flex gap-3 justify-center items-center`}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            React.js
                        </span>
                    </div>

                    {/* 2 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-1.5 font-semibold rounded-lg flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            Redux Toolkit
                        </span>
                    </div>

                    {/* 3 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-1.5 font-semibold rounded-lg  flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            GSAP
                        </span>
                    </div>

                    {/* 4 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-1.5 font-semibold rounded-lg  flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            Tailwind CSS
                        </span>
                    </div>

                    {/* 5 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-1.5 font-semibold rounded-lg  flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            Vite
                        </span>
                    </div>

                    {/* 6 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-1.5 font-semibold rounded-lg  flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            JavaScript (ES6+)
                        </span>
                    </div>

                </div>
                :
                <div className={`flex justify-center flex-wrap gap-2`}>

                    {/* 1 */}
                    <div className={` text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-4 py-2  rounded-lg   flex gap-3 justify-center items-center`}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            React.js
                        </span>
                    </div>

                    {/* 2 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-4 py-2 rounded-lg  flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            GSAP
                        </span>
                    </div>

                    {/* 3 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-4 py-2 rounded-lg  flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            Vite
                        </span>
                    </div>

                    {/* 4 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-2 rounded-lg  flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            Tailwind CSS
                        </span>
                    </div>

                    {/* 5 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-2 rounded-lg   flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            Redux Toolkit
                        </span>
                    </div>



                    {/* 6 */}
                    <div className={`text-sm ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'} px-3 py-2 rounded-lg  flex gap-3 justify-center items-center `}>
                        <span>
                            <StarIcon />
                        </span>
                        <span>
                            JavaScript (ES6+)
                        </span>
                    </div>

                </div>
            }


        </div>
    )
}

export default Technologies