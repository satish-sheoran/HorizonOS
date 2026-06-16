import React from 'react'
import { useSelector } from 'react-redux'

import { OS_NAME, OS_VERSION, SETTINGS_SECTIONS } from '../../../../constants/Settings'
import AboutOptions from './AboutOptions'
import AnimationWrapper from '../../../UI/AnimationWrapper'
import AboutHorizonOS from './DeepOptions/AboutHorizonOS'
import Factoryreset from './DeepOptions/Factoryreset'

const DEEP_OPTIONS = {
  AboutHorizonOS,
  Factoryreset,
}

const AboutUs = ({ Section, Theme ,ThemeColors,AccentColors}) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)
  const activePanel = useSelector((store) => store.Settings.activePanel)
  const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).DeepOptions;


  return (
    <div className={`p-[2.5%] about-us-overflow-area overflow-y-auto w-full h-full grow flex  flex-col gap-2 `}>

      <div style={{backgroundColor : ThemeColors.header }} className={`active:scale-97 ease-out duration-500 shrink-0 w-full ${Device !== 'Desktop' ? 'h-[40%]' : 'h-[45%]'} flex flex-col items-center justify-center gap-2 rounded-2xl`}>

        <span style={{color : ThemeColors.primaryText}} className={`duration-500 ease-out select-none cursor-default text-4xl md:text-4xl lg:text-5xl font-semibold `}>{OS_NAME}
        </span>

        <span style={{color : ThemeColors.grayish}} className='select-none cursor-default '>{OS_VERSION} </span>
      </div>


      <AboutOptions Section={Section} Theme={Theme} OS_NAME={OS_NAME} Device={Device} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />


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