import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Toolbar from '../UI/Toolbar'
import AboutUs from './AllSections/About/AboutUs'
import Display from './AllSections/Display/Display'
import Apps from './AllSections/Apps/Apps'
import AdditionalSettings from './AllSections/Additional/AdditionalSettings'
import Feedback from './AllSections/Feedback/Feedback'
import { SETTINGS_SECTIONS } from '../../constants/Settings'
import { setActivePanel } from '../../redux/features/SettingsSlice'

const SETTINGS_COMPONENTS = {
    AboutUs,
    Display,
    Apps,
    AdditionalSettings,
    Feedback,
};

const Content = ({ currDevice, activeSection, setShowContent,Theme,ThemeColors,AccentColors }) => {
    const dispatch = useDispatch()
    const activePanel = useSelector((store) => store.Settings.activePanel)

    const setShowContentFalse = () => setShowContent(false)
    const setActivePanelEmpty = () => dispatch(setActivePanel({ panel: '' }))

    return (
        <section className={`relative h-full  flex flex-col ${currDevice === 'Desktop' ? 'w-3/4' : 'w-full'}`}>

            {/* toolbar for back and save options */}
            {currDevice !== 'Desktop' && <Toolbar performAction={activePanel !== '' ? setActivePanelEmpty : setShowContentFalse} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors}/>}

            {
                SETTINGS_SECTIONS.map(({ title }) => {
                    const compName = title.replaceAll(' ', '');
                    const Component = SETTINGS_COMPONENTS[compName];

                    if (!Component || activeSection !== title) return null;

                    return <div key={title}
                        className='relative grow'>
                        <div className='absolute inset-0'>
                            <Component
                                Section={title}
                                Theme={Theme} 
                                ThemeColors={ThemeColors} AccentColors={AccentColors}
                                />
                        </div>
                    </div>

                })
            }

        </section>
    )
}

export default Content