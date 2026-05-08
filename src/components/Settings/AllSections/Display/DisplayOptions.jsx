import React from 'react'
import Theme from './Sections/Theme'
import Screen from './Sections/Screen'
import Font from './Sections/Font'

const DisplayOptions = ({ Device, theme, fullScreen }) => {


    return (
        <section className={`display-overflow-area flex flex-col gap-2.5 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto'}`}>


            {/* THEME RELATED  */}
            <Theme theme={theme} fullScreen={fullScreen} Device={Device} />

            {/* HR */}
            <div className='px-[6%] md:px-[3%]'>
                <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--sec-dark-clr)' : 'border-(--sec-light-clr)'}`} />
            </div>

            {/* SCREEN RELATED */}
            <Screen theme={theme} fullScreen={fullScreen} Device={Device} />

            {/* HR */}
            <div className='px-[6%] md:px-[3%]'>
                <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--sec-dark-clr)' : 'border-(--sec-light-clr)'}`} />
            </div>

            <Font theme={theme} fullScreen={fullScreen} Device={Device} />


            {/* HR */}
            <div className='px-[6%] md:px-[3%]'>
                <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--sec-dark-clr)' : 'border-(--sec-light-clr)'}`} />
            </div>

        </section>
    )
}

export default DisplayOptions