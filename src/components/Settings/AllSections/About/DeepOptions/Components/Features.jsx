import React from 'react'
import {  ClockFading,Expand, Layers, Star,MonitorSmartphone,LineSquiggle, MousePointer2 } from 'lucide-react'

const Features = ({ Device, theme, fullScreen }) => {
  return (
    <div className={`features flex flex-col gap-4 p-[2.5%] rounded-xl ${theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
      <div className={`flex gap-2 font-bold text-lg ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
        <Star className={`text-(--color-accent)`} strokeWidth={2.5} />
        <span>Features</span>
      </div>


      <div className={`grid ${Device !== 'Desktop' ? 'grid-cols-2' : 'grid-cols-3'} gap-3`}>

        {/* 1 */}
        <div className={`border text-sm rounded-lg flex gap-3 justify-center items-center 
        ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--sec-light-clr)'}
              ${Device !== 'Desktop' ? `py-2`
            :
            `py-1.5 font-semibold`}
              `}>
          <div className={`rounded-full p-2 bg-(--color-ultra-light-accent) text-(--color-accent)`}>
            <Expand strokeWidth={2} />
          </div>
          <div className='w-[60%]  flex flex-col items-start '>
            <span className='font-bold'>Draggable <br /> Windows</span>
            <span className={`text-[0.545rem] ${theme !=='dark'?'text-(--grayish-dark-clr)':'text-(--grayish-light-clr)'}`}> Move and organize elements seamlessly </span>

          </div>
        </div>

        {/* 2 */}
        <div className={`border text-sm rounded-lg flex gap-3 justify-center items-center 
        ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--sec-light-clr)'}
              ${Device !== 'Desktop' ? `py-2`
            :
            `py-1.5 font-semibold`}
              `}>
          <div className={`rounded-full p-2 bg-(--color-ultra-light-accent) text-(--color-accent)`}>
          <Layers strokeWidth={2} />
          </div>
          <div className='w-[60%]  flex flex-col items-start '>
            <span className='font-bold'>
              Multi-App <br /> Environment
            </span>
            <span className={`text-[0.545rem] ${theme !=='dark'?'text-(--grayish-dark-clr)':'text-(--grayish-light-clr)'}`}> Run multiple apps in one environment. </span>

          </div>
        </div>

        {/* 3 */}
        <div className={`border text-sm rounded-lg flex gap-3 justify-center items-center 
        ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--sec-light-clr)'}
              ${Device !== 'Desktop' ? `py-2`
            :
            `py-1.5 font-semibold`}
              `}>
          <div className={`rounded-full p-2 bg-(--color-ultra-light-accent) text-(--color-accent)`}>
            <MonitorSmartphone strokeWidth={2} />
          </div>
          <div className='w-[60%]  flex flex-col items-start '>
            <span className='font-bold'>
              Responsive <br /> Design
            </span>
            <span className={`text-[0.545rem] ${theme !=='dark'?'text-(--grayish-dark-clr)':'text-(--grayish-light-clr)'}`}>  Looks great across all devices and screens.   </span>

          </div>
        </div>

        {/* 4 */}
        <div className={`border text-sm rounded-lg flex gap-3 justify-center items-center 
        ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--sec-light-clr)'}
              ${Device !== 'Desktop' ? `py-2`
            :
            `py-1.5 font-semibold`}
              `}>
         <div className={`rounded-full p-2 bg-(--color-ultra-light-accent) text-(--color-accent)`}>
           <MousePointer2 strokeWidth={2} />
          </div>
          <div className='w-[60%]  flex flex-col items-start '>
            <span className='font-bold'>
              Interactive <br /> Applications
            </span>
            <span className={`text-[0.545rem] ${theme !=='dark'?'text-(--grayish-dark-clr)':'text-(--grayish-light-clr)'}`}> Engaging and dynamic user interactions. </span>

          </div>
        </div>

        {/* 5 */}
         <div className={`border text-sm rounded-lg flex gap-3 justify-center items-center 
        ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--sec-light-clr)'}
              ${Device !== 'Desktop' ? `py-2`
            :
            `py-1.5 font-semibold`}
              `}>
          <div className={`rounded-full p-2 bg-(--color-ultra-light-accent) text-(--color-accent)`}>
             <LineSquiggle strokeWidth={2} />
          </div>
          <div className='w-[60%]  flex flex-col items-start '>
            <span className='font-bold'>
            Smooth <br /> Animations
            </span>
            <span className={`text-[0.545rem] ${theme !=='dark'?'text-(--grayish-dark-clr)':'text-(--grayish-light-clr)'}`}> Fluid transitions and micro-interactions. </span>

          </div>
        </div>
       
      
        {/* 6 */}
         <div className={`border text-sm rounded-lg flex gap-3 justify-center items-center 
        ${theme !== 'dark' ? 'border-(--color-lightDarkish-white) text-(--primary-dark-clr)' : 'border-(--bg-dark-app-body) text-(--sec-light-clr)'}
              ${Device !== 'Desktop' ? `py-2`
            :
            `py-1.5 font-semibold`}
              `}>
          <div className={`rounded-full p-2 bg-(--color-ultra-light-accent) text-(--color-accent)`}>
            <ClockFading strokeWidth={2} />
          </div>
          <div className='w-[60%]  flex flex-col items-start '>
            <span className='font-bold'>
            Real-Time <br /> Utilities
            </span>
            <span className={`text-[0.545rem] ${theme !=='dark'?'text-(--grayish-dark-clr)':'text-(--grayish-light-clr)'}`}> Live data , quick actions , real results. </span>

          </div>
        </div>

      </div>
    </div>
    )
}

export default Features