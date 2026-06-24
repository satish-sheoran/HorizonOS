import React from 'react'
import { useSelector } from 'react-redux'
import SettingQueries from '../../SettingQueries'
import {CSS_EASING} from '../../../../constants/Settings'
import FeedbackSections from './FeedbackSections'

const Feedback = ({ Section , Theme, ThemeColors, AccentColors, Queries, SubSections,DeepSection }) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)
const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


  return (
    <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`feedback-overflow-area w-full h-full grow flex ${fullScreen ? '' : 'overflow-y-auto p-[2.5%] gap-2'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

      <FeedbackSections Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} ParentSection={Section} Section={SubSections}/>

      <SettingQueries Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} Section={Section} Queries={Queries} />


    </div>
  )
}

export default Feedback