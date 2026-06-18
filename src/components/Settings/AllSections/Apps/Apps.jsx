import React from 'react'
import { useSelector } from 'react-redux'

import SettingQueries from '../../SettingQueries'
import AppsSections from './AppsSections'
import AnimationWrapper from '../../../UI/AnimationWrapper'
import { SETTINGS_SECTIONS } from '../../../../constants/Settings'
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

const Apps = ({ Section, Theme ,ThemeColors,AccentColors,Queries, SubSections}) => {

    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const Device = useSelector((store) => store.Device.currDevice)
    const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).DeepOptions;
const activePanel = useSelector((store)=>store.Settings.activePanel);

    return (
        <div className={`app-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto p-[2.5%] gap-2'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

            <AppsSections Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} ParentSection={Section} Section={SubSections} />

            <SettingQueries Theme={Theme} fullScreen={fullScreen} Device={Device} ThemeColors={ThemeColors} AccentColors={AccentColors} Section={Section} Queries={Queries} />

            <AnimationWrapper activePanel={activePanel} Section={Section} Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} >
                {OPTIONS?.map(({ Name }) => {
                    const compName = Name.replaceAll(' ', '');
                    const Component = DEEP_OPTIONS[compName];

                    if (!Component || activePanel !== compName) return null;

                    return <Component Section={Section} Device={Device} fullScreen={fullScreen} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                })}
            </AnimationWrapper>




        </div>
    )
}

export default Apps