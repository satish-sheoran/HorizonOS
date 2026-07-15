import { useDispatch } from "react-redux"

//clock,calculator,Notes and settings slice
import { ResetCalculation } from '../redux/features/Calculator'
import { ResetClock } from '../redux/features/Clock'
import { ResetSettings } from '../redux/features/SettingsSlice'
import { ResetNotesApp } from '../redux/features/NotesStrorage'

import { ResetAll } from '../redux/features/DeviceSet'
import { ResetAllStyle } from '../redux/features/wallpaper'
import { CloseAllApp } from '../redux/features/windowApps'


export const FactoryReset = () => {
    localStorage.setItem('Calculation')
    localStorage.removeItem('Notes')
    localStorage.removeItem('Categories')
    localStorage.removeItem('storedSettings')
}

export const useDispatchResetAll = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(ResetCalculation())
        dispatch(ResetAll())
        dispatch(ResetNotesApp())
        dispatch(ResetAllStyle())
        dispatch(ResetClock())
        dispatch(ResetSettings())
        dispatch(CloseAllApp())
    }
}