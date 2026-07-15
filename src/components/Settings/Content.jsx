import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Toolbar from '../UI/Toolbar'
import AboutUs from './AllSections/About/AboutUs'
import Display from './AllSections/Display/Display'
import Apps from './AllSections/Apps/Apps'
import AdditionalSettings from './AllSections/Additional/AdditionalSettings'
import { SECTIONS, CSS_EASING } from '../../constants/Settings'
import { setActivePanel } from '../../redux/features/SettingsSlice'

const SETTINGS_COMPONENTS = {
    AboutUs,
    Display,
    Apps,
    AdditionalSettings,
};

const Content = ({ currDevice, activeSection, setShowContent, Theme, ThemeColors, AccentColors, showContent }) => {

    const dispatch = useDispatch()
    const activePanel = useSelector((store) => store.Settings.activePanel)
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    const setShowContentFalse = () => setShowContent(false)
    const setActivePanelEmpty = () => dispatch(setActivePanel({ panel: '' }))

    return (
        <section style={{
            transitionProperty: 'color, background-color, border-color, font-size',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`relative h-full  flex flex-col ${(currDevice === 'Desktop' || currDevice === 'Tablet') ? 'grow' : 'w-full'}`}>


            {/* here activePanel is used to check if any option is opened in deep OR not */}
            {/* toolbar for back and save options */}
            {currDevice !== 'Desktop' && currDevice !== 'Tablet' && <Toolbar performAction={activePanel !== '' ? setActivePanelEmpty : setShowContentFalse} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />}

            {
                SECTIONS.map(({ Section, FileName, Queries, SubSections, DeepSection }) => {
                    const Component = SETTINGS_COMPONENTS[FileName];

                    if (!Component || activeSection !== Section) return null;

                    return <div key={Section}
                        className='relative grow'>
                        <div className='absolute inset-0'>
                            <Component
                                Section={Section}
                                Queries={Queries}
                                SubSections={SubSections}
                                Theme={Theme}
                                ThemeColors={ThemeColors}
                                AccentColors={AccentColors}
                                DeepSection={DeepSection}
                            />
                        </div>
                    </div>

                })
            }

        </section>
    )
}

export default Content