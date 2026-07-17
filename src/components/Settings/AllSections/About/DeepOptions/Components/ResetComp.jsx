import { Trash } from 'lucide-react'
import React from 'react'
import { COMMON_COLORS } from '../../../../../../constants/style'
import { CSS_EASING } from '../../../../../../constants/Settings'
import { useSelector } from 'react-redux'


const ResetComp = ({ Device, Theme, fullScreen, ThemeColors, AccentColors ,setopenResetOverlay}) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    return (
        <div style={{
           borderColor: ThemeColors.third, backgroundColor: ThemeColors.header, 
        }} className={`border Warning flex justify-between items-center  rounded-2xl p-[2.5%]`}>

            <div style={{
                
            }} className={`flex ${Device !== 'Desktop' ? 'gap-2' : 'gap-5'} items-center`}>

                <span style={{
                    color: COMMON_COLORS.Red, 
                }}>
                    <Trash strokeWidth={2} />
                </span>

                <div className={`flex flex-col `}>
                    <span style={{
                      fontSize : Sizes.Regular , fonFamily : Weights.SemiBold, color: ThemeColors.primaryText, 
                    }} className={`font-semibold`}>Reset HorizonOS</span>
                    <span style={{
                      fontSize : Sizes.ExtraSmall , fontFamily : Weights.Regular , color: ThemeColors.grayish, 
                    }} >Restore your device to its factory default state.</span>
                </div>
            </div>

            <button
            onClick={()=>setopenResetOverlay(true)}
            style={{
               fontSize : Sizes.Small , fontFamily : Weights.SemiBold ,backgroundColor: COMMON_COLORS.Red, color: COMMON_COLORS.White, 
            }} className={`active:scale-97  cursor-pointer rounded-xl font-semibold px-2 py-1.5`}>Reset Now</button>

        </div>
    )
}

export default ResetComp