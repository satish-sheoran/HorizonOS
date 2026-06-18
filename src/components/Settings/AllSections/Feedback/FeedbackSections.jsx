import React from 'react'

const FeedbackSections = ({ Theme, fullScreen, Device,ThemeColors,AccentColors ,ParentSection, Section}) => {
    return (
        <section className={`feedback-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  p-[2.5%]'}`}>
            Feature in Production! {ParentSection}
        </section>
        )
}

export default FeedbackSections