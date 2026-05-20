import React from 'react'
import { useSelector } from 'react-redux'
import ExtraQuery from '../../ExtraQuery'
import FeedbackOptions from './FeedbackOptions'

const Feedback = ({ Section,theme }) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)


  return (
    <div className={`feedback-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto px-[2.5%]'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

      <FeedbackOptions theme={theme} fullScreen={fullScreen} Device={Device} />

      {Device ==='Desktop' && fullScreen && <ExtraQuery theme={theme} Device={Device} fullScreen={fullScreen} Section={Section} />}


    </div>
    )
}

export default Feedback