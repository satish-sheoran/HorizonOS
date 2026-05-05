import React from 'react'
import { ChevronRight, Store } from 'lucide-react'
import ThemeSelection from './ThemeSelection'
import { toast } from 'react-toastify'

const DisplayOptions = ({ Device, theme, fullScreen }) => {


    return (
        <section className={`about-us-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto'}`}>

            {/* THEME SELECtION */}
            <ThemeSelection theme={theme} fullScreen={fullScreen} Device={Device} />


            {/* More Dark options to manage specifically add dark to spefic apps parmanently */}
            <div
                onClick={() => {
                    toast.info('Coming Soon !')
                }
                }
                className={`select-none  px-5 py-4 md:px-4 md:py-3 font-semibold ${theme !== 'dark' ? 'text-(--primary-dark-clr) hover:bg-(--bg-light-app-body) active:bg-(--bg-light-app-body)' : 'text-(--primary-light-clr) hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr)'}`}>
                <div className='active:scale-98 flex items-center justify-between'>
                    <span>Dark mode options</span>
                    <span className={`'text-(--sec-light-clr)'}`}>
                        <ChevronRight />
                    </span>
                </div>
            </div>


        </section>
        )
}

export default DisplayOptions