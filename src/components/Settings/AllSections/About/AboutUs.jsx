import React from 'react'
import { OS_NAME, OS_VERSION } from '../../../../constants/Settings'
import AboutOptions from './AboutOptions'
import { useSelector } from 'react-redux'

const AboutUs = ({ Section, theme }) => {

  const { fullScreen } = useSelector((store) => store.windowApps.apps['settings'])
  const Device = useSelector((store) => store.Device.currDevice)


  return (
    <div className={`about-us-overflow-area overflow-y-auto w-full h-full grow flex  flex-col gap-5 `}>

      <div className='shrink-0 w-full h-[40%] px-[2.5%] flex flex-col items-center justify-center gap-2'>

        <span className={`duration-500 ease-out select-none cursor-default text-4xl md:text-4xl lg:text-5xl font-semibold ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>{OS_NAME}
        </span>

        <span className='select-none cursor-default text-(--grayish-light-clr)'>{OS_VERSION} </span>
      </div>


      <AboutOptions Section={Section} theme={theme} OS_NAME={OS_NAME} Device={Device} fullScreen={fullScreen} />
    </div>
  )
}

export default AboutUs