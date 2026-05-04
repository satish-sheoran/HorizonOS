import React from 'react'
import { useSelector } from 'react-redux'
import DisplayOptions from './DisplayOptions'
import ExtraQuery from '../../ExtraQuery'
const Display = ({ theme }) => {

    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const Device = useSelector((store) => store.Device.currDevice)


    return (
        <div className={`about-us-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

            <DisplayOptions theme={theme} fullScreen={fullScreen} Device={Device} />

            <ExtraQuery theme={theme} Device={Device} fullScreen={fullScreen} Section='Display' />

        </div>
    )
}

export default Display