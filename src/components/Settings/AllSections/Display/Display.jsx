import React from 'react'
import { useSelector } from 'react-redux'

import DisplaySections from './DisplaySections'
import SettingQueries from '../../SettingQueries'
import AnimationWrapper from '../../../UI/AnimationWrapper'
import DarkmodeoptionsDeep from './DeepOptions/DarkmodeoptionsDeep'
import FontsettingsDeep from './DeepOptions/FontsettingsDeep'
import ColourSchemeDeep from './DeepOptions/ColourSchemeDeep'
import ControlAnimationsDeep from './DeepOptions/ControlAnimationsDeep'
import {CSS_EASING} from '../../../../constants/Settings'

const DEEP_OPTIONS = {
    DarkmodeoptionsDeep,
    FontsettingsDeep,
    ColourSchemeDeep,
    ControlAnimationsDeep
}

const Display = ({Section , Theme, ThemeColors, AccentColors, Queries, SubSections,DeepSection}) => {

    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const Device = useSelector((store) => store.Device.currDevice)
    const activePanel = useSelector((store) => store.Settings.activePanel)
const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <div style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]
        }} className={`display-overflow-area w-full h-full grow flex ${fullScreen ? '' : 'overflow-y-auto p-[2.5%] gap-2'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

            <DisplaySections Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} ParentSection={Section} Section={SubSections} />

            <SettingQueries Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} Section={Section} Queries={Queries} />


            {/* DEEP OPTIONS */}
             <AnimationWrapper activePanel={activePanel} Section={Section} Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} >
                    {DeepSection?.map(({  Section : Deep, FileName,Options, SubSections : DeepSubSection}) => {
                      const Component = DEEP_OPTIONS[FileName];
            
                      if (!Component || activePanel !== Deep) return null;
             // Section prop here represent Grandparent section (Display,About,Additional Settings etc.)
                      return <Component key={Deep} Name={Deep} DeepSubSection={DeepSubSection} Section={Section} Options={Options} Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                    })}
                  </AnimationWrapper>


        </div>
    )
}

export default Display