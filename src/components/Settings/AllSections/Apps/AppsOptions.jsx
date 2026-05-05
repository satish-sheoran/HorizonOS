import React from 'react'

const AppsOptions = ({ fullScreen, Device }) => {
    return (
        <section className={`border border-amber-400 app-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto'}`}>
            Apps
        </section>
    )
}

export default AppsOptions