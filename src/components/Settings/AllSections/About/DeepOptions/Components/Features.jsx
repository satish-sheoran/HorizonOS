import React from 'react'
import * as Icons from "lucide-react";
import { ClockFading, Expand, Layers, Star, MonitorSmartphone, LineSquiggle, MousePointer2 } from 'lucide-react'
import { SETTINGS_FEATURES } from '../../../../../../constants/Settings'

const Features = ({ Device, theme, fullScreen }) => {
  return (
    <div className={`features flex flex-col gap-4 p-[2.5%] rounded-2xl ${theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
      <div className={`flex gap-2 font-bold text-lg ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
        <Star className={`text-(--color-accent)`} strokeWidth={2.5} />
        <span>Features</span>
      </div>


      <div className={`grid ${Device !== 'Desktop' ? 'grid-cols-2' : 'grid-cols-3'} gap-3`}>


        {/* All features  */}
        {SETTINGS_FEATURES.map(({ Feat_Title, Feat_Desc, icon }, index) => {
          const Icon = Icons[icon]

          return <div key={index} className={`ease-out duration-500 hover:scale-105 active:scale-105 overflow-hidden border text-sm rounded-2xl flex gap-3 justify-center items-center 
        ${theme !== 'dark' ? `border-(--color-lightDarkish-white) text-(--primary-dark-clr) hover:bg-(--third-light-clr)  ${Device !=='Desktop'?'active:bg-(--third-light-clr)':'active:bg-(--primary-light-clr)'}` 
          :
           'border-(--bg-dark-app-body) text-(--sec-light-clr) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}
              ${Device !== 'Desktop' ? `py-2`
              :
              `py-1.5 font-semibold`}
              `}>
            <div className={`rounded-full p-2 bg-(--color-ultra-light-accent) text-(--color-accent)`}>
              {Icon && <Icon strokeWidth={2} className='shrink-0' />}

            </div>
            <div className='w-[60%]  flex flex-col items-start '>
              <span className='font-bold'>{Feat_Title.split(' ').map((word) => {
                return <>
                  <span>{word}</span>
                  <br />
                </>
              })}</span>
              <span className={`text-[0.545rem] ${theme !== 'dark' ? 'text-(--grayish-dark-clr)' : 'text-(--grayish-light-clr)'}`}> {Feat_Desc} </span>

            </div>
          </div>

        })}

      </div>
    </div>
  )
}

export default Features