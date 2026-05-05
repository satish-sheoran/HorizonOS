import React from 'react'
import { useSelector } from 'react-redux'
import ExtraQuery from '../../ExtraQuery'
import AppsOptions from './AppsOptions'

const Apps = ({theme}) => {

    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const Device = useSelector((store) => store.Device.currDevice)


    return (
        <div className={`app-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

            <AppsOptions theme={theme} fullScreen={fullScreen} Device={Device} />

            <ExtraQuery theme={theme} Device={Device} fullScreen={fullScreen} Section='Apps' />

        </div>
        )
}

export default Apps