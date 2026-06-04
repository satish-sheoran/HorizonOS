import React from 'react'
import Theme from './Sections/Theme'
import Screen from './Sections/Screen'
import Font from './Sections/Font'
import { SETTINGS_SECTIONS } from '../../../../constants/Settings'

const DISPLAY_SECTIONS = {
    Theme,
    Screen,
    Font
}

// SECTION MEANS TITLE : APPS/DISPLAY ETC.
const DisplayOptions = ({ Section, Device, theme, fullScreen }) => {

    const currentSection = SETTINGS_SECTIONS.find(
        sec => sec.title === Section
    );

    return (
        <section className={`display-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  p-[2.5%]'}`}>


            {/* ALL SECTIONS OF DISPLAY RENDRING HERE*/}
            {currentSection?.options?.map(({ Name, options,secName}, idx) => {
                const Component = DISPLAY_SECTIONS[Name];
                if (!Component) return null;

                return <div className={`flex flex-col gap-2`} key={idx}>
                   
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

export default DisplayOptions