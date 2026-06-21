import React from 'react'

const AnimationPreview = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {
    return (
        <div className={`mt-2 flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{ color: ThemeColors.primaryText }} className={`ease-out duration-500 text-[0.8rem] font-bold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{ color: ThemeColors.thirdText }} className={`ease-out duration-500 text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Experience your chosen animation stylr and speed.</span>
            </div>

            <div style={{ backgroundColor: ThemeColors.header }} className={`flex flex-col gap-2 rounded-2xl duration-500 ease-out select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`} >
                {Name} will be added here
            </div>
        </div>
    )
}

export default AnimationPreview