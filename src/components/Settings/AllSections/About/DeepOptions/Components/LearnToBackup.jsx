import { ExternalLink, Info } from 'lucide-react'
import React from 'react'
import { toast } from "react-toastify";
import { ACCENT_COLORS, COMMON_COLORS } from '../../../../../../constants/style';
import { CSS_EASING } from '../../../../../../constants/Settings';
import { useSelector } from 'react-redux'

const LearnToBackup = ({ Device, Theme, fullScreen, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div style={{
           borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, 
        }} className={`border flex  items-center gap-3 rounded-2xl p-[2.5%]`}>

            <div style={{
                color: COMMON_COLORS.Blue, 
            }}>
                <Info strokeWidth={2} size={24} />
            </div>
            <div className={`flex flex-col`}>
                <span
                    style={{
                     fontSize : Sizes.Small ,  fontFamily : Weights.SemiBold , color: Theme !== 'dark' ? ThemeColors.primaryText : ThemeColors.secText, 
                    }}
                    className={`font-semibold`}>It's recommended to back up important files before proceeding.</span>

                <div style={{
                    color: COMMON_COLORS.Blue, 
                }} className='active:scale-97 cursor-pointer  flex gap-1 items-center'>
                    <span
                        onClick={() => toast.error('This link is currently unavailable')}
                        style={{
                          fontSize : Sizes.ExtraSmall,  fontFamily : Weights.Regular ,color: COMMON_COLORS.Blue,
                            '--hover': ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').Hover_Clr,
                            '--active': ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').Hover_Clr, 
                        }}
                        className={`HOVER_CLR_CLASS active:scale-97 cursor-pointer `}>Learn how to back up your data </span>
                    <ExternalLink strokeWidth={2} size={14} /></div>
            </div>

        </div>
    )
}

export default LearnToBackup