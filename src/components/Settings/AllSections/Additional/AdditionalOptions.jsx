import React from 'react'
import { SETTINGS_SECTIONS } from '../../../../constants/Settings'

import AdditionalSection from './Sections/AdditionalSection'
import DeviceSection from './Sections/DeviceSection'

const ADDITIONAL_SECTIONS = {
    AdditionalSection,
    DeviceSection
}


const AdditionalOptions = ({ Section, theme, Device, fullScreen }) => {

    const currentSection = SETTINGS_SECTIONS.find(
        sec => sec.title === Section
    );
    return (
        <section className={`additional-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 p-[2.5%]'}`}>

            {
                currentSection?.options?.map(({ options, Name, secName, }, idx) => {
                    const Component = ADDITIONAL_SECTIONS[Name];
                    if (!Component) return null;

                    return <div className='w-full flex flex-col gap-2' key={idx}>
                        <Component
                            theme={theme}
                            Device={Device}
                            fullScreen={fullScreen}
                            options={options}
                            sectionName={secName}
                        />

                        {/* HR */}
                       {idx < currentSection.options.length - 1 && (
                        <div className='mt-2  mx-auto w-9/10'>
                            <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--bg-dark-header)' : 'border-(--primary-light-clr)'}`} />
                        </div>
                    )}
                    </div>
                })
            }


        </section>)
}

export default AdditionalOptions