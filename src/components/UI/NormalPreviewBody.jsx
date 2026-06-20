import React from 'react'

const NormalPreviewBody = ({ThemeColors,Device}) => {
    return (
        <div style={{ backgroundColor: ThemeColors.header, borderColor: ThemeColors.bg }} className={`ease-out duration-500 w-full flex ${Device !== 'Desktop' ? 'h-20' : 'h-30'}  `}>
            <div style={{ backgroundColor: ThemeColors.bg, borderColor: ThemeColors.thirdText }} className={`ease-out duration-500 w-4/10 h-full flex flex-col  gap-2 items-center justify-center border-t-[0.5px]`}>

                <div className={`flex gap-1 items-center`}>
                    <div style={{ backgroundColor: ThemeColors.thirdText }} className='ease-out duration-500 rounded-full p-1'></div>
                    <div style={{ backgroundColor: ThemeColors.thirdText }} className={`ease-out duration-500 rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                </div>
                <div className={`flex gap-1 items-center`}>
                    <div style={{ backgroundColor: ThemeColors.thirdText }} className='ease-out duration-500 rounded-full p-1'></div>
                    <div style={{ backgroundColor: ThemeColors.thirdText }} className={`ease-out duration-500 rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                </div>
                <div className={`flex gap-1 items-center`}>
                    <div style={{ backgroundColor: ThemeColors.thirdText }} className='ease-out duration-500 rounded-full p-1'></div>
                    <div style={{ backgroundColor: ThemeColors.thirdText }} className={`ease-out duration-500 rounded-full ${Device !== 'Desktop' ? 'px-3' : 'px-7'} py-0.5`}></div>
                </div>
            </div>
            <div style={{ borderColor: ThemeColors.thirdText }} className={`ease-out duration-500 flex items-center pl-5 w-6/10 h-full border-t-[0.5px]`}>
                <div className={`flex flex-col w-full gap-1.5`}>

                    <div style={{ backgroundColor: ThemeColors.bg }} className={`ease-out duration-500 rounded w-4/5 ${Device !== 'Desktop' ? 'h-2' : 'h-3'} `}></div>
                    <div style={{ backgroundColor: ThemeColors.bg }} className={`ease-out duration-500 rounded-sm w-2/5 ${Device !== 'Desktop' ? 'h-2' : 'h-2.5'}`}></div>
                    <div style={{ backgroundColor: ThemeColors.bg }} className={`ease-out duration-500 rounded-md w-3/5 ${Device !== 'Desktop' ? 'h-2' : 'h-3'}`}></div>

                </div>
            </div>
        </div>
    )
}

export default NormalPreviewBody