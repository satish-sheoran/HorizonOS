import React from 'react'

const FeedbackOptions = ({ theme, fullScreen, Device }) => {
    return (
        <section className={`feedback-overflow-area flex flex-col gap-2 items-center justify-center ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto pb-5 px-[2.5%]'} ${theme !=='dark'?'text-(--primary-dark-clr)':'text-(--primary-light-clr)'}`}>
            Feature in Production!
        </section>)
}

export default FeedbackOptions