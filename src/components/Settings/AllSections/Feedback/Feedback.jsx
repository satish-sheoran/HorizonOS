import React from 'react'
import { useSelector } from 'react-redux'
import SettingQueries from '../../SettingQueries'
import FeedbackSections from './FeedbackSections'

const Feedback = ({ Section , Theme, ThemeColors, AccentColors, Queries, SubSections,DeepSection }) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)


  return (
    <div className={`feedback-overflow-area w-full h-full grow flex ${fullScreen ? '' : 'overflow-y-auto p-[2.5%] gap-2'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

      <FeedbackSections Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} ParentSection={Section} Section={SubSections}/>

      <SettingQueries Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} Section={Section} Queries={Queries} />


    </div>
  )
}

export default Feedback