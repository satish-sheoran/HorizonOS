import React from 'react'
import { useSelector } from 'react-redux'

import DisplaySections from './DisplaySections'
import SettingQueries from '../../SettingQueries'
import AnimationWrapper from '../../../UI/AnimationWrapper'
import { SETTINGS_SECTIONS } from '../../../../constants/Settings'
import DarkmodeoptionsDeep from './DeepOptions/DarkmodeoptionsDeep'
import FontsettingsDeep from './DeepOptions/FontsettingsDeep'
import ColourSchemeDeep from './DeepOptions/ColourSchemeDeep'


const DEEP_OPTIONS = {
    DarkmodeoptionsDeep,
    FontsettingsDeep,
    ColourSchemeDeep
}

const Display = ({Section , Theme, ThemeColors, AccentColors, Queries, SubSections}) => {

    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const Device = useSelector((store) => store.Device.currDevice)
    const activePanel = useSelector((store) => store.Settings.activePanel)
    const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).DeepOptions;

    return (
        <div className={`display-overflow-area w-full h-full grow flex ${fullScreen ? '' : 'overflow-y-auto p-[2.5%] gap-2'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

            <DisplaySections Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} ParentSection={Section} Section={SubSections} />

            <SettingQueries Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} Section={Section} Queries={Queries} />


            {/* DEEP OPTIONS */}
            <AnimationWrapper activePanel={activePanel} Section={Section} Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} >
                {OPTIONS?.map(({ Name }) => {
                    const compName = Name.replaceAll(' ', '');
                    const Component = DEEP_OPTIONS[compName];

                    if (!Component || activePanel !== compName) return null;

                    return <Component Section={Section} Device={Device} fullScreen={fullScreen} Theme={Theme}  ThemeColors={ThemeColors} AccentColors={AccentColors} />
                })}
            </AnimationWrapper>


        </div>
    )
}

export default Display