import React from 'react'

const FeedbackOptions = ({ theme, fullScreen, Device }) => {
    return (
        <section className={`border border-amber-400 feedback-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto'}`}>
            Feedback
        </section>)
}

export default FeedbackOptions