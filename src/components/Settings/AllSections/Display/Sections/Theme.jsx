import React from 'react'
import { useDispatch } from 'react-redux'
import { setAutoTheme } from '../../../../../redux/features/wallpaper'
import ThemeSelection from '../components/ThemeSelection'
import DarkOptions from '../components/DarkOptions'
import ToggleButton from '../../../../UI/ToggleButton'

const Theme = ({ options,theme, fullScreen, Device }) => {

    const dispatch = useDispatch()
    const performAction = () => dispatch(setAutoTheme())

    return (
        <div className={`flex flex-col w-full pt-2.5 `}>

            {/* THEME SELECtION */}
            <ThemeSelection theme={theme} fullScreen={fullScreen} Device={Device} />


            {/* More Dark options to manage specifically add dark to spefic apps parmanently */}
            <DarkOptions theme={theme} />

            {/* Auto Set theme btn */}
            <ToggleButton theme={theme} action='Automatic theme' performAction={performAction} />
        </div>
    )
}

export default Theme