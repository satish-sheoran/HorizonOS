import React from 'react'
import AppLock from './components/AppLock'
import AppsArea from './Sections/AppsArea'
import { SETTINGS_SECTIONS } from '../../../../constants/Settings'


const APPS_SECTIONS = {
    AppsArea
}

// SECTION MEANS TITLE : APPS/DISPLAY ETC.
const AppsOptions = ({ Section, theme, fullScreen, Device }) => {

    const currentSection = SETTINGS_SECTIONS.find(
        sec => sec.title === Section
    );

    return (
        <section className={`app-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 p-[2.5%]'}`}>

            {/* ALL SECTIONS OF APPS RENDRING HERE*/}

            {currentSection?.options?.map(({ Name, options, secName }, idx) => {
                const Component = APPS_SECTIONS[Name]; //option name 
                if (!Component) return null;

                return <div className='w-full flex flex-col gap-2' key={idx}>
                    <Component
                        options={options}
                        sectionName={secName}
                        theme={theme}
                        fullScreen={fullScreen}
                        Device={Device}
                    />
                    {/* HR */}
                    {idx < currentSection.options.length - 1 && (
                        <div className='mt-2  mx-auto w-9/10'>
                            <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--bg-dark-header)' : 'border-(--primary-light-clr)'}`} />
                        </div>
                    )}
                </div>
            })}


        </section>
    )
}

export default AppsOptions