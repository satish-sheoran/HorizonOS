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
        <section className={`additional-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5'}`}>

            {
                currentSection?.options?.map(({ options, Name, secName, }, idx) => {
                    const Component = ADDITIONAL_SECTIONS[Name];
                    if (!Component) return null;

                    return <div className='w-full flex flex-col gap-2.5' key={idx}>
                        <Component
                            theme={theme}
                            Device={Device}
                            fullScreen={fullScreen}
                            options={options}
                            sectionName={secName}
                        />

                        {/* HR */}
                        {idx < currentSection.options.length - 1 && <div className='mb-2.5 px-[6%] md:px-[3%]'>
                            <hr className={`transition-colors duration-500 ease-out w-full ${theme !== 'dark' ? 'border-(--sec-dark-clr)' : 'border-(--sec-light-clr)'}`} />
                        </div>}
                    </div>
                })
            }


        </section>)
}

export default AdditionalOptions