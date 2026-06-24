import React from 'react'
import { useSelector } from 'react-redux'

import SettingQueries from '../../SettingQueries'
import AppsSections from './AppsSections'
import AnimationWrapper from '../../../UI/AnimationWrapper'
import {CSS_EASING} from '../../../../constants/Settings'
import ApplockDeep from './DeepOptions/ApplockDeep'
import ManageappsDeep from './DeepOptions/ManageappsDeep'
import SystemappsDeep from './DeepOptions/SystemappsDeep'
import UninstallappsDeep from './DeepOptions/UninstallappsDeep'

const DEEP_OPTIONS = {
   ApplockDeep,
   ManageappsDeep,
   SystemappsDeep,
   UninstallappsDeep 
}

const Apps = ({ Section, Theme ,ThemeColors,AccentColors,Queries, SubSections,DeepSection}) => {

    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const Device = useSelector((store) => store.Device.currDevice)
const activePanel = useSelector((store)=>store.Settings.activePanel);
const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`app-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto p-[2.5%] gap-2'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

            <AppsSections Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} ParentSection={Section} Section={SubSections} />

            <SettingQueries Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} Section={Section} Queries={Queries} />

             <AnimationWrapper activePanel={activePanel} Section={Section} Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} >
                    {DeepSection?.map(({  Section : Deep, FileName,Options}) => {
                      const Component = DEEP_OPTIONS[FileName];
            
                      if (!Component || activePanel !== Deep) return null;
             // Section prop here represent Grandparent section (Display,About,Additional Settings etc.)
                      return <Component Name={Deep} Section={Section} Options={Options} Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                    })}
                  </AnimationWrapper>




        </div>
    )
}

export default Apps