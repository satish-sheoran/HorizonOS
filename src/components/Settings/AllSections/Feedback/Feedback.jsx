import React from 'react'
import { useSelector } from 'react-redux'
import ExtraQuery from '../../ExtraQuery'
import FeedbackOptions from './FeedbackOptions'

const Feedback = ({ Section,Theme ,ThemeColors,AccentColors}) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)


  return (
    <div className={`feedback-overflow-area w-full h-full grow flex ${fullScreen ? '' : 'overflow-y-auto p-[2.5%] gap-2'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

      <FeedbackOptions Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} />

      {Device ==='Desktop' && fullScreen && <ExtraQuery Theme={Theme} Device={Device} fullScreen={fullScreen} Section={Section} ThemeColors={ThemeColors} AccentColors={AccentColors} />}


    </div>
    )
}

export default Feedback