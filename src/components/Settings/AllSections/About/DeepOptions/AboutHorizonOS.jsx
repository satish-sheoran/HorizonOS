import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import Technologies from './Components/Technologies'
import Details from './Components/Details'
import Features from './Components/Features'
import DevDetail from './Components/DevDetail'

const AboutHorizonOS = ({ Section, Device, fullScreen,theme }) => {


  return (
    <div className={`deep-about-us py-[2.5%]  select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto   px-[2.5%]'}`}>

      <div className={` flex flex-col gap-2 `}>

        {/* Details */}
        <Details Device={Device} theme={theme} fullScreen={fullScreen} />

        {/* Features */}
        <Features theme={theme} Device={Device} fullScreen={fullScreen} />

        {/* Technologies */}
        <Technologies Device={Device} theme={theme} Section={Section} fullScreen={fullScreen} />

        {/* developer */}
        <DevDetail theme={theme} Device={Device} fullScreen={fullScreen} />

      </div>

    </div>
  )
}

export default AboutHorizonOS
