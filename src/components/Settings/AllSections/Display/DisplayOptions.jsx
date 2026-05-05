import React from 'react'
import ThemeSelection from './ThemeSelection'
import DarkOptions from './DarkOptions'
import AutoThemeBtn from './AutoThemeBtn'

const DisplayOptions = ({ Device, theme, fullScreen }) => {


    return (
        <section className={`about-us-overflow-area flex flex-col gap-2.5 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto'}`}>

            {/* THEME SELECtION */}
            <ThemeSelection theme={theme} fullScreen={fullScreen} Device={Device} />


            {/* More Dark options to manage specifically add dark to spefic apps parmanently */}
            <DarkOptions theme={theme} />

            {/* Auto Set theme btn */}
            <AutoThemeBtn theme={theme} />


        </section>
    )
}

export default DisplayOptions