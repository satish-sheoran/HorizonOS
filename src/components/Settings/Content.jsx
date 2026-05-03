import React from 'react'
import Toolbar from './Toolbar'
import { useSelector } from 'react-redux'
import AboutUs from './AllSections/About/AboutUs'

const Content = ({ currDevice, activeSection, setShowContent }) => {

    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <section className={`h-full flex flex-col ${currDevice === 'Desktop' ? 'w-3/4' : 'w-full'}`}>

            {/* toolbar for back and save options */}
            {currDevice !== 'Desktop' && <Toolbar setShowContent={setShowContent} theme={theme} />}

            <div className='about-us-overflow-area overflow-y-auto w-full grow flex flex-col gap-5'>
                {/* <AboutUs /> */}
                {activeSection === 'About OS' && <AboutUs theme={theme} />}
                
            </div>

        </section>
    )
}

export default Content