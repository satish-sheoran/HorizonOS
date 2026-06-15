import React from 'react'

const FeedbackOptions = ({ Theme, fullScreen, Device,ThemeColors,AccentColors }) => {
    return (
        <section className={`feedback-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'border-r w-7/10 h-full overflow-y-auto  p-[2.5%]'}`}>
            Feature in Production!
        </section>
        )
}

export default FeedbackOptions