import React from 'react'
import { useSelector } from 'react-redux'
import AdditionalOptions from './AdditionalOptions'
import ExtraQuery from '../../ExtraQuery'
import { SETTINGS_SECTIONS } from '../../../../constants/Settings'
import ChangewallpaperDeep from './DeepOptions/ChangewallpaperDeep'
import DeveloperoptionsDeep from './DeepOptions/DeveloperoptionsDeep'
import ResetsettingsDeep from './DeepOptions/ResetsettingsDeep'
import AnimationWrapper from '../../../UI/AnimationWrapper'

const DEEP_OPTIONS = {
   ChangewallpaperDeep,
   DeveloperoptionsDeep,
   ResetsettingsDeep,
}

const AdditionalSettings = ({ Section, Theme,ThemeColors,AccentColors }) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)
  const activePanel = useSelector((store) => store.Settings.activePanel);
  const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).DeepOptions;



  return (
    <div className={`additional-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto  p-[2.5%] gap-2'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

      <AdditionalOptions Theme={Theme} fullScreen={fullScreen} Device={Device} Section={Section} ThemeColors={ThemeColors} AccentColors={AccentColors} />

      <ExtraQuery Theme={Theme} Device={Device} fullScreen={fullScreen} Section={Section} ThemeColors={ThemeColors} AccentColors={AccentColors} />

      {/* DEEP OPTIONS */}

      <AnimationWrapper activePanel={activePanel} Section={Section} Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} >
        {OPTIONS?.map(({ Name }) => {
          const compName = Name.replaceAll(' ', '');
          const Component = DEEP_OPTIONS[compName];

          if (!Component || activePanel !== compName) return null;

          return <Component Section={Section} Device={Device} fullScreen={fullScreen} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
        })}
      </AnimationWrapper>


    </div>)
}

export default AdditionalSettings