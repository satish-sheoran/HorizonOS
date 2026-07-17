import React from 'react'
import AppLock from './components/AppLock'
import AppsArea from './Sections/AppsArea'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../constants/Settings'

const APPS_SECTIONS = {
    AppsArea
}

// SECTION MEANS TITLE : APPS/DISPLAY ETC.
const AppsOptions = ({ Theme, Device, fullScreen, ThemeColors, AccentColors, ParentSection, Section: CurrSection }) => {

    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <section style={{
            borderColor: ThemeColors.third, 
        }} className={`app-overflow-area flex flex-col gap-2 ${Device === 'Mobile' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto pb-5 p-[2.5%]'}`}>

            {/* ALL SECTIONS OF APPS RENDRING HERE*/}

            {CurrSection?.map(({ Section, FileName, Options }, idx) => {
                const Component = APPS_SECTIONS[FileName]; //option name 
                if (!Component) return null;

                return <div className='w-full flex flex-col gap-2' key={idx}>
                    <Component
                        Theme={Theme}
                        Device={Device}
                        fullScreen={fullScreen}
                        GrandParentSection={ParentSection} // Additional Settings Behave as Grand Parent for that Option of Sub Section (Device,Additional)
                        Options={Options}
                        Section={Section} // Section : Additional , Device (basically SubSection Name)
                        ThemeColors={ThemeColors}
                        AccentColors={AccentColors}
                    />

                    {/* HR */}
                    {idx < CurrSection.length - 1 && (
                        <div className='mt-2  mx-auto w-9/10'>
                            <hr
                                style={{
                                    borderColor: ThemeColors.third, 
                                }}
                                className={`w-full `} />
                        </div>
                    )}
                </div>
            })}


        </section>
    )
}

export default AppsOptions