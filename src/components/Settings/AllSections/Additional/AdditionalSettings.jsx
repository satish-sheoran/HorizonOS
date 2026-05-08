import React from 'react'
import { useSelector } from 'react-redux'
import AdditionalOptions from './AdditionalOptions'
import ExtraQuery from '../../ExtraQuery'

const AdditionalSettings = ({Section,theme}) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)


  return (
    <div className={`additional-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

      <AdditionalOptions theme={theme} fullScreen={fullScreen} Device={Device} />

      <ExtraQuery theme={theme} Device={Device} fullScreen={fullScreen} Section='Additional Settings' />

    </div>)
}

export default AdditionalSettings