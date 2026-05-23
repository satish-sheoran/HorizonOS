import React from 'react'
import { useSelector } from 'react-redux'
import ExtraQuery from '../../ExtraQuery'
import AppsOptions from './AppsOptions'
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

const Apps = ({ Section, theme }) => {

    const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
    const Device = useSelector((store) => store.Device.currDevice)
    const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).DeepOptions;
const activePanel = useSelector((store)=>store.Settings.activePanel);

    return (
        <div className={`app-overflow-area w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto px-[2.5%]'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

            <AppsOptions Section={Section} theme={theme} fullScreen={fullScreen} Device={Device} />

            <ExtraQuery theme={theme} Device={Device} fullScreen={fullScreen} Section='Apps' />

            <AnimationWrapper activePanel={activePanel} Section={Section} Device={Device} theme={theme} fullScreen={fullScreen}>
                {OPTIONS?.map(({ Name }) => {
                    const compName = Name.replaceAll(' ', '');
                    const Component = DEEP_OPTIONS[compName];

                    if (!Component || activePanel !== compName) return null;

                    return <Component Section={Section} Device={Device} fullScreen={fullScreen} />
                })}
            </AnimationWrapper>




        </div>
    )
}

export default Apps