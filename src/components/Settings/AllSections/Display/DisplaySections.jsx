import React from 'react'
import Theme from './Sections/Theme'
import Screen from './Sections/Screen'
import Font from './Sections/Font'
import { useSelector } from 'react-redux'
import {CSS_EASING} from '../../../../constants/Settings'

const DISPLAY_SECTIONS = {
    Theme,
    Screen,
    Font
}

// SECTION MEANS TITLE : APPS/DISPLAY ETC.
const DisplaySections = ({ Theme, Device, fullScreen, ThemeColors, AccentColors, ParentSection, Section: CurrSection}) => {

    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <section style={{
            borderColor: ThemeColors.third,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]
            
        }} className={`display-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  p-[2.5%]'}`}>


            {/* ALL SECTIONS OF DISPLAY RENDRING HERE*/}
            {CurrSection?.map(({ Section,FileName,Options}, idx) => {
                const Component = DISPLAY_SECTIONS[FileName];
                if (!Component) return null;

                return <div className={`flex flex-col gap-2`} key={idx}>
                   
                    <Component
                    Theme={Theme}
                            Device={Device}
                            fullScreen={fullScreen}
                            GrandParentSection = {ParentSection} // Display Settings Behave as Grand Parent for that Option of Sub Section (Font,Colour Scheme etc.)
                            Options={Options}
                            Section={Section} // Section : Font , Colour Scheme (basically SubSection Name)
                            ThemeColors={ThemeColors}
                            AccentColors={AccentColors}
                    />

                    {/* HR */}
                    {idx < CurrSection.length - 1 && (
                        <div className='mt-2  mx-auto w-9/10'>
                            <hr 
                            style={{borderColor : ThemeColors.grayish,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]
                            }}
                            className={` w-full`} />
                        </div>
                    )}
                </div>
            })}



        </section>
    )
}

export default DisplaySections