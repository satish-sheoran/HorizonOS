import React from 'react'
import { COMMON_COLORS } from '../../../../../constants/style';
import { CSS_EASING } from '../../../../../constants/Settings';
import { OS_Storage } from '../../../../../constants/index';
import { useSelector } from 'react-redux'

const Storage = ({ Theme, Option, fullScreen, Device, ThemeColors, AccentColors }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const { TotalStorage : UsedStorage} = useSelector(store => store.Settings)

    return (
        <div
            style={{
                borderColor: ThemeColors.bg,
                color: ThemeColors.primaryText,
                '--hover': ThemeColors.third,
                '--active': Theme !== 'dark' ?
                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                    :
                    COMMON_COLORS.Gray,
                transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`HOVER_CLASS active:scale-97 border rounded-2xl  select-none font-semibold flex items-center justify-between 
                                                   ${Device !== 'Desktop' ? `p-3` : `p-2.5`}
                                                   `}>

            <span style={{fontSize : Sizes.Small, fontFamily: Weights.SemiBold }} className={`font-semibold`}>{Option}</span>
            <span style={{
               fontSize : Sizes.Small, fontFamily: Weights.Regular, color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}>
                {UsedStorage>=1024?`${UsedStorage} GB`:`${UsedStorage} MB`} / {OS_Storage}
            </span>

        </div>
    )
}

export default Storage