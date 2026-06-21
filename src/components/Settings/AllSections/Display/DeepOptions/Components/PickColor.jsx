import React from 'react'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { Check, Palette, Pen } from 'lucide-react'
import { toast } from 'react-toastify'


const PickColor = ({Theme,Device,fullScreen,ThemeColors,AccentColors}) => {
    return (
        <div style={{
            borderColor: ThemeColors.bg,
            color: ThemeColors.primaryText,
        }} className={` border ${Device !== 'Desktop' ? `p-3` : `p-2.5`} rounded-2xl ease-out duration-500 flex justify-between items-center`}>
            <div className={`flex gap-3 items-center`}>
                <Palette size={30} style={{ color: AccentColors.CODE }} strokeWidth={2.5} />
                <p className='flex flex-col gap-0.5 max-w-[70%]'>
                    <span style={{ color: ThemeColors.primaryText }} className={`font-bold text-[0.8rem]`}>Custom Colour</span>
                    <span style={{ color: ThemeColors.thirdText }} className={`text-[0.6rem]`}>Pick a custom colour that reflects your style.</span>
                </p>
            </div>
            <div onClick={() => toast.info('Feature Coming Soon...')} style={{
                borderColor: ThemeColors.bg,
                color: AccentColors.CODE,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray
            }} className={`HOVER_CLASS p-2 cursor-pointer rounded-xl border-2 ease-out duration-500`}>
                <Pen size={22} strokeWidth={2} />
            </div>
        </div>
    )
}

export default PickColor