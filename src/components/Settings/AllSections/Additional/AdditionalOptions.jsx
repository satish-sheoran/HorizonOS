import React from 'react'

const AdditionalOptions = ({theme,Device,fullScreen}) => {
    return (
        <section className={`border border-amber-400 additional-overflow-area flex flex-col gap-2 ${Device !== 'Desktop' ? 'w-full' : !fullScreen ? 'w-full' : 'w-7/10 h-full overflow-y-auto'}`}>
            Additional
        </section>)
}

export default AdditionalOptions