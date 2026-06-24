import React from 'react'
import {useSelector} from 'react-redux'
import {CSS_EASING} from '../../../../constants/Settings'

const FeedbackSections = ({ Theme, fullScreen, Device,ThemeColors,AccentColors ,ParentSection, Section}) => {
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    
    
    return (
        <section style={{transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={`feedback-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  p-[2.5%]'}`}>
            Feature in Production! {ParentSection}
        </section>
        )
}

export default FeedbackSections