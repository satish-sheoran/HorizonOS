import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import Technologies from './Components/Technologies'
import Details from './Components/Details'
import Features from './Components/Features'
import DevDetail from './Components/DevDetail'

const AboutHorizonOS = ({ Section, Device, fullScreen }) => {

  const theme = useSelector((store) => store.wallpaper.theme)

  return (
    <div className={`deep-about-us py-[2.5%]  select-none ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto   px-[2.5%]'}`}>

      <div className={`p-[2.5%] flex flex-col gap-6 ${Device !== 'Desktop' ? '' :`rounded-xl  
        ${theme !=='dark'?'bg-(--third-light-clr)':'bg-(--third-dark-clr) '} `}`}>

        {/* Details */}
        <Details Device={Device} theme={theme} />


        <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--sec-dark-clr)' : 'border-(--sec-light-clr)'}`} />


        {/* Features */}
        <Features theme={theme} Device={Device} />


        <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--sec-dark-clr)' : 'border-(--sec-light-clr)'}`} />


        {/* Technologies */}
        <Technologies Device={Device} theme={theme} Section={Section} />


        <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--sec-dark-clr)' : 'border-(--sec-light-clr)'}`} />


        {/* developer */}
        <DevDetail theme={theme} Device={Device} />

      </div>

    </div>
  )
}

export default AboutHorizonOS
