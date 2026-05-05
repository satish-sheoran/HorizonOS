import React from 'react'
import Toolbar from './Toolbar'
import { useSelector } from 'react-redux'

import AboutUs from './AllSections/About/AboutUs'
import Display from './AllSections/Display/Display'
import Apps from './AllSections/Apps/Apps'
import Additional from './AllSections/Additional/Additional'
import Feedback from './AllSections/Feedback/Feedback'

const Content = ({ currDevice, activeSection, setShowContent }) => {

    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <section className={`relative h-full  flex flex-col ${currDevice === 'Desktop' ? 'w-3/4' : 'w-full'}`}>

            {/* toolbar for back and save options */}
            {currDevice !== 'Desktop' && <Toolbar setShowContent={setShowContent} theme={theme} />}

            {/* display content based on current active section */}
            {activeSection === 'About OS' && <AboutUs theme={theme} />}

            {activeSection === 'Display' &&
            // Extra div is used bcz due to some issue on fullScreen,the DisplayOptions was overflowying even on w-[80%]
            <div className='relative grow'>
                <div className='absolute inset-0'>
                    <Display theme={theme} />
                </div>
            </div>
            }

            {activeSection === 'Apps' && <Apps theme={theme} />}
            {activeSection === 'Additional Settings' && <Additional theme={theme} />}
            {activeSection === 'Feedback' && <Feedback theme={theme} />}

        </section>
    )
}

export default Content