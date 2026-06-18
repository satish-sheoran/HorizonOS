import React from 'react'
import { useSelector } from 'react-redux'

import { OS_NAME, OS_VERSION, SETTINGS_SECTIONS } from '../../../../constants/Settings'
import AboutSections from './AboutSections'
import AnimationWrapper from '../../../UI/AnimationWrapper'
import AboutHorizonOS from './DeepOptions/AboutHorizonOS'
import Factoryreset from './DeepOptions/Factoryreset'
import SettingQueries from '../../SettingQueries'

const DEEP_OPTIONS = {
  AboutHorizonOS,
  Factoryreset,
}

const AboutUs = ({ Section, Theme, ThemeColors, AccentColors, Queries, SubSections }) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)
  const activePanel = useSelector((store) => store.Settings.activePanel)
  const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).DeepOptions;


  return (
    <div className={`p-[2.5%] about-us-overflow-area overflow-y-auto w-full h-full grow flex  flex-col gap-2 `}>



      <AboutSections Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} ParentSection={Section} Section={SubSections} />

      <SettingQueries Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} Section={Section} Queries={Queries} />


      <AnimationWrapper activePanel={activePanel} Section={Section} Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} >
        {OPTIONS?.map(({ Name }) => {
          const compName = Name.replaceAll(' ', '');
          const Component = DEEP_OPTIONS[compName];

          if (!Component || activePanel !== compName) return null;

          return <Component Section={Section} Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} />
        })}
      </AnimationWrapper>


    </div>
  )
}

export default AboutUs