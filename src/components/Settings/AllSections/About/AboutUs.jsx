import React from 'react'
import { OS_NAME } from '../../../../constants'
import AboutOptions from './AboutOptions'

const AboutUs = ({ theme }) => {

  return (
    <div className='about-us-overflow-area overflow-y-auto w-full grow flex flex-col gap-5'>
      
      <div className='shrink-0 w-full h-[40%] px-[2.5%] flex flex-col items-center justify-center gap-2'>

        <span className={`duration-500 ease-out select-none cursor-default text-4xl md:text-4xl lg:text-5xl font-semibold ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>{OS_NAME}
        </span>

        <span className='select-none cursor-default text-(--sec-light-clr)'> 1.0.10.0 HRZNNV</span>
      </div>

      <AboutOptions theme={theme} OS_NAME={OS_NAME} />
    </div>
  )
}

export default AboutUs