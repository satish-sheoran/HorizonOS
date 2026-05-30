import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'


const Features = ({ Device, theme }) => {
  return (
    <div className={`features flex flex-col gap-4`}>
      <div className={`flex gap-2 font-bold text-lg ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
        <Star strokeWidth={2.5} />
        <span>Features</span>
      </div>

      <div className={`grid ${Device !== 'Desktop' ? 'grid-cols-2' : 'grid-cols-3'} gap-3`}>

        {/* 1 */}
        <div className={` text-sm  rounded-lg  flex gap-3 justify-center items-center 
              ${Device !== 'Desktop' ? `py-2 ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'}` 
                : 
                `py-1.5 font-semibold ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--bg-dark-app-body) text-(--sec-light-clr)'}`}
              `}>
          <span>
            <StarIcon />
          </span>
          <span>
            Draggable <br /> Windows
          </span>
        </div>

        {/* 2 */}
        <div className={`text-sm  rounded-lg   flex gap-3 justify-center items-center 
          ${Device !== 'Desktop' ? `py-2 ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'}` 
                : 
                `py-1.5 font-semibold ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--bg-dark-app-body) text-(--sec-light-clr)'}`}
          `}>
          <span>
            <StarIcon />
          </span>
          <span>
            Multi-App <br /> Environment
          </span>
        </div>

        {/* 3 */}
        <div className={`text-sm rounded-lg  flex gap-3 justify-center items-center 
          ${Device !== 'Desktop' ? `py-2 ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'}` 
                : 
                `py-1.5 font-semibold ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--bg-dark-app-body) text-(--sec-light-clr)'}`}
          `}>
          <span>
            <StarIcon />
          </span>
          <span>
            Responsive <br /> Design
          </span>
        </div>

        {/* 4 */}
        <div className={`text-sm rounded-lg  flex gap-3 justify-center items-center 
          ${Device !== 'Desktop' ? `py-2 ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'}` 
                : 
                `py-1.5 font-semibold ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--bg-dark-app-body) text-(--sec-light-clr)'}`}
          `}>
          <span>
            <StarIcon />
          </span>
          <span>
            Interactive <br /> Applications
          </span>
        </div>

        {/* 5 */}
        <div className={`text-sm  rounded-lg  flex gap-3 justify-center items-center 
           ${Device !== 'Desktop' ? `py-2 ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'}` 
                : 
                `py-1.5 font-semibold ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--bg-dark-app-body) text-(--sec-light-clr)'}`}
          `}>
          <span>
            <StarIcon />
          </span>
          <span>
            Smooth <br /> Animations
          </span>
        </div>

        {/* 6 */}
        <div className={`text-sm  rounded-lg  flex gap-3 justify-center items-center 
           ${Device !== 'Desktop' ? `py-2 ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--third-dark-clr) text-(--sec-light-clr)'}` 
                : 
                `py-1.5 font-semibold ${theme !=='dark'?'bg-(--primary-light-clr) text-(--primary-dark-clr)':'bg-(--bg-dark-app-body) text-(--sec-light-clr)'}`}
          `}>
          <span>
            <StarIcon />
          </span>
          <span>
            Real-Time <br /> Utilities
          </span>
        </div>

      </div>
    </div>)
}

export default Features