import React from 'react'
import { useSelector } from 'react-redux'
import DisplayOptions from './DisplayOptions'
import ExtraQuery from '../../ExtraQuery'
const Display = ({ Section,theme }) => {

    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const Device = useSelector((store) => store.Device.currDevice)


    return (
        <div className={`display-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

            <DisplayOptions Section={Section} theme={theme} fullScreen={fullScreen} Device={Device} />

            <ExtraQuery theme={theme} Device={Device} fullScreen={fullScreen} Section={Section} />

        </div>
    )
}

export default Display