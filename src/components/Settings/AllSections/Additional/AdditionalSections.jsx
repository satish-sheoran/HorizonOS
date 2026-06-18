import React from 'react'

import AdditionalSection from './Sections/AdditionalSection'
import DeviceSection from './Sections/DeviceSection'

const ADDITIONAL_SECTIONS = {
    AdditionalSection,
    DeviceSection
}


const AdditionalSections = ({ Theme, Device, fullScreen, ThemeColors, AccentColors, ParentSection, Section: CurrSection }) => {


    return (
        <section className={`additional-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 p-[2.5%]'}`}>

            {
                CurrSection?.map(({ Section, FileName, Options }, idx) => {
                    const Component = ADDITIONAL_SECTIONS[FileName];
                    if (!Component) return null;

                    return <div className='w-full flex flex-col gap-2' key={idx}>
                        <Component
                            Theme={Theme}
                            Device={Device}
                            fullScreen={fullScreen}
                            GrandParentSection = {ParentSection} // Additional Settings Behave as Grand Parent for that Option of Sub Section (Device,Additional)
                            Options={Options}
                            Section={Section} // Section : Additional , Device (basically SubSection Name)
                            ThemeColors={ThemeColors}
                            AccentColors={AccentColors}
                        />

                        {/* HR */}
                        {idx < CurrSection.length - 1 && (
                            <div className='mt-2  mx-auto w-9/10'>
                                <hr
                                    style={{ borderColor: ThemeColors.grayish }}
                                    className={`transition-colors duration-500 ease-out w-full `} />
                            </div>
                        )}
                    </div>
                })
            }


        </section>)
}

export default AdditionalSections