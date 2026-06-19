import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import React from 'react'
import Technologies from './Components/Technologies'
import Details from './Components/Details'
import Features from './Components/Features'
import DevDetail from './Components/DevDetail'

const AboutHorizonOS = ({ Name,Section, Device, fullScreen,Theme ,ThemeColors,AccentColors}) => {


  return (
    <div style={{
            borderColor: ThemeColors.third
        }} className={`deep-about-us py-[2.5%]  select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  px-[2.5%]'}`}>

      <div className={` flex flex-col gap-2 `}>

        {/* Details */}
        <Details Device={Device} Theme={Theme} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        {/* Features */}
        <Features Theme={Theme} Device={Device} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        {/* Technologies */}
        <Technologies Device={Device} Theme={Theme} Section={Section} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

        {/* developer */}
        <DevDetail Theme={Theme} Device={Device} fullScreen={fullScreen} ThemeColors={ThemeColors} AccentColors={AccentColors} />

      </div>

    </div>
  )
}

export default AboutHorizonOS
