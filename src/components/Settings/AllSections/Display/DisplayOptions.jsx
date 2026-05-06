import React from 'react'
import ThemeSelection from './ThemeSelection'
import DarkOptions from './DarkOptions'
import ToggleButton from '../../ToggleButton'
import { useDispatch } from 'react-redux'
import { setAutoTheme } from '../../../../redux/features/wallpaper'

const DisplayOptions = ({ Device, theme, fullScreen }) => {

    const dispatch = useDispatch()
    const performAction = () => dispatch(setAutoTheme())

    return (
        <section className={`about-us-overflow-area flex flex-col gap-2.5 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto'}`}>

            {/* THEME SELECtION */}
            <ThemeSelection theme={theme} fullScreen={fullScreen} Device={Device} />


            {/* More Dark options to manage specifically add dark to spefic apps parmanently */}
            <DarkOptions theme={theme} />

            {/* Auto Set theme btn */}
            <ToggleButton theme={theme} action='Automatic theme' performAction={performAction} />

        </section>
    )
}

export default DisplayOptions