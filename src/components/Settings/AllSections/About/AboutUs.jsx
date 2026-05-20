import React from 'react'
import { useSelector } from 'react-redux'

import { OS_NAME, OS_VERSION, SETTINGS_SECTIONS } from '../../../../constants/Settings'
import AboutOptions from './AboutOptions'
import AnimationWrapper from '../../../UI/AnimationWrapper'
import AboutHorizonOS from './DeepOptions/AboutHorizonOS'
import Certification from './DeepOptions/Certification'
import Factoryreset from './DeepOptions/Factoryreset'

const DEEP_OPTIONS = {
  AboutHorizonOS,
  Factoryreset,
  Certification
}

const AboutUs = ({ Section, theme }) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)
  const activePanel = useSelector((store) => store.Settings.activePanel)
  const OPTIONS = SETTINGS_SECTIONS.find(sec => sec.title === Section).DeepOptions;


  return (
    <div className={`px-[2.5%] about-us-overflow-area overflow-y-auto w-full h-full grow flex  flex-col gap-5 `}>

      <div className='shrink-0 w-full h-[35%] flex flex-col items-center justify-center gap-2'>

        <span className={`duration-500 ease-out select-none cursor-default text-4xl md:text-4xl lg:text-5xl font-semibold ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>{OS_NAME}
        </span>

        <span className='select-none cursor-default text-(--grayish-light-clr)'>{OS_VERSION} </span>
      </div>


      <AboutOptions Section={Section} theme={theme} OS_NAME={OS_NAME} Device={Device} fullScreen={fullScreen} />


      <AnimationWrapper activePanel={activePanel}>
        {OPTIONS?.map(({ Name }) => {
          const compName = Name.replaceAll(' ', '');
          const Component = DEEP_OPTIONS[compName];

          if (!Component || activePanel !== compName) return null;

          return <Component Section={Section} fullScreen={fullScreen} Device={Device} />
        })}
      </AnimationWrapper>


    </div>
  )
}

export default AboutUs