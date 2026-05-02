import React from 'react'
import AboutUs from './AllSections/About Us/AboutUs'
import Toolbar from './Toolbar'
import { useSelector } from 'react-redux'

const Content = ({ currDevice, activeSection, setShowContent }) => {

    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <section className={`overflow-hidden grow flex flex-col ${currDevice === 'Desktop' ? 'w-3/4' : 'w-full'}`}>

            {/* toolbar for back and save options */}
            {currDevice !== 'Desktop' && <Toolbar setShowContent={setShowContent} theme={theme} />}


            {/* <AboutUs /> */}
            {activeSection === 'About OS' && <AboutUs theme={theme} />}

        </section>
    )
}

export default Content