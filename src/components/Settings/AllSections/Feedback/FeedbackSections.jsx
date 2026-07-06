import React from 'react'
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../../../../constants/Settings'

const FeedbackSections = ({ Theme, fullScreen, Device, ThemeColors, AccentColors, ParentSection, Section }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <section style={{
           fontSize : Sizes.Small ,fontFamily : Weights.SemiBold, transitionProperty: 'color, background-color, border-color',
            transitionDuration: Speed,
            transitionTimingFunction: CSS_EASING[Animation]
        }} className={`font-semibold feedback-overflow-area flex flex-col gap-2 ${Device === 'Mobile' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  p-[2.5%]'}`}>
            Feature in Production! {ParentSection}
        </section>
    )
}

export default FeedbackSections