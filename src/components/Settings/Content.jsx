import React from 'react'
import AboutUs from './AllSections/About Us/AboutUs'
import Toolbar from './Toolbar'
import { useSelector } from 'react-redux'

const Content = ({ currDevice, activeSection, setShowContent }) => {

    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <section className={`h-full ${currDevice === 'Desktop' ? 'w-3/4' : 'w-full'}`}>

            {/* toolbar for back and save options */}
            {currDevice !== 'Desktop' && <Toolbar setShowContent={setShowContent} theme={theme} />}

            <div className='about-us-overflow-area overflow-y-auto w-full h-full flex flex-col gap-5'>

                {/* <AboutUs /> */}
                {activeSection === 'About OS' && <AboutUs theme={theme} />}
                
            </div>

        </section>
    )
}

export default Content