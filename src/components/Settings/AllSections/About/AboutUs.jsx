import React from 'react'
import { useSelector } from 'react-redux'

import { OS_NAME, CSS_EASING } from '../../../../constants/Settings'
import AboutSections from './AboutSections'
import AnimationWrapper from '../../../UI/AnimationWrapper'
import AboutHorizonOS from './DeepOptions/AboutHorizonOS'
import Factoryreset from './DeepOptions/Factoryreset'
import SettingQueries from '../../SettingQueries'
import VersionDetails from './DeepOptions/VersionDetails'

const DEEP_OPTIONS = {
  AboutHorizonOS,
  Factoryreset,
  VersionDetails
}

const AboutUs = ({ Section, Theme, ThemeColors, AccentColors, Queries, SubSections, DeepSection }) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)
  const activePanel = useSelector((store) => store.Settings.activePanel)
  const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  return (
    <div style={{
      
    }} className={`about-us-overflow-area  w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto  p-[2.5%] gap-2'} ${(Device === 'Mobile' || !fullScreen) ? 'flex-col' : ''}`}>



      <AboutSections Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} ParentSection={Section} Section={SubSections} />

      <SettingQueries Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} Section={Section} Queries={Queries} />


      <AnimationWrapper activePanel={activePanel} Section={Section} Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} >

        {DeepSection?.map(({ Section: Deep, FileName, Options },idx) => {
          const Component = DEEP_OPTIONS[FileName];

          if (!Component || activePanel !== Deep) return null;
          // Section prop here represent Grandparent section (Display,About,Additional Settings etc.)
          return <Component key={idx} Name={Deep} Section={Section} Options={Options} Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} />
        })}
      </AnimationWrapper>


    </div>
  )
}

export default AboutUs