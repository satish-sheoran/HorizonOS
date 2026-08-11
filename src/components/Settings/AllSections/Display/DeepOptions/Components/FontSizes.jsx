import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSS_EASING, FONT_SIZES } from '../../../../../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../../../../constants/style'
import { setFontSize } from '../../../../../../redux/features/wallpaper'
import { Check } from 'lucide-react'

const FontSizes = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

    const dispatch = useDispatch()
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const { SizeType: SizeName, Sizes } = useSelector(store => store.wallpaper.FontSize) //animation name
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)

    return (
        <div className={`mt-2 flex flex-col gap-2`}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold,
                    color: ThemeColors.primaryText,
                }} className={`  font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{
                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular,
                    color: ThemeColors.thirdText,
                }} className={` ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose your preferred font size.</span>
            </div>

            <div style={{
                borderColor: ThemeColors.third, backgroundColor: ThemeColors.header,
            }} className={`border flex flex-col gap-4 rounded-2xl  select-none ${Device !== 'Desktop' ? `px-3 py-4` : `p-2.5`}`} >
                {FONT_SIZES.map(({ SizeType, Details }, idx) => {

                    return <button key={idx}
                        onClick={() => {
                            dispatch(setFontSize({ Size: SizeType }))
                        if(EnableDebugLogs) console.log(`Font Size Changed to ${SizeType}`)
                        }}
                        style={{
                            borderColor: SizeType === SizeName ? AccentColors.CODE : ThemeColors.third,
                            color: ThemeColors.primaryText,
                            '--hover': ThemeColors.third,
                            '--active': Theme !== 'dark' ?
                                Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                :
                                COMMON_COLORS.Gray,

                        }}
                        className={`outline-none overflow-hidden HOVER_CLASS active:scale-97 border rounded-2xl  select-none flex justify-between items-center ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}
                    >
                        <div className={`flex flex-col gap-0.5 text-left`}>
                            <span style={{ fontSize: Sizes.Small, fontFamily: Weights.Bold }} className={`font-bold `}>{SizeType}</span>
                            <span style={{
                                fontSize: Sizes.ExtraSmall, fontFamily: Weights.SemiBold,
                                color: ThemeColors.grayish,
                            }} className={`font-semibold`}>{Details}</span>
                        </div>

                        <div style={{
                            fontFamily: Weights.Bold,
                            borderColor: ThemeColors.bg, backgroundColor: SizeType === SizeName ? AccentColors.CODE : ThemeColors.bg,
                        }} className={`border  w-6 h-6 rounded-full  flex justify-center items-center`}>
                            {SizeType === SizeName && <Check style={{

                            }} strokeWidth={3} size={Device !== 'Desktop' ? 15 : 20} />}
                        </div>

                    </button>
                })}

            </div>
        </div>
    )
}

export default FontSizes