import React from "react";
import { CALC_BTNS } from "../../constants";
import { COMMON_COLORS } from "../../constants/style";
import { CSS_EASING } from "../../constants/Settings";
import { useSelector } from "react-redux";

const CalcButtons = ({ ThemeColors, AccentColors, calcBtnClck, Device, Theme }) => {
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    return (
        <>
            {
                CALC_BTNS.map(({ symbol, id }) => {
                    const isChange = ['AC', 'X', '%'].includes(symbol);
                    const isSymb = ['/', '*', '-', '+'].includes(symbol);

                    return <button key={id}
                        style={{
                            fontFamily: Weights.Bold,
                            color: isChange || isSymb ? AccentColors.CODE : symbol === '=' ? COMMON_COLORS.White : ThemeColors.primaryText,
                            backgroundColor: symbol === '=' ? AccentColors.CODE : ThemeColors.header,
                            '--hover': symbol === '=' ? AccentColors.Hover_Clr : ThemeColors.third,
                            '--active': symbol === '=' ? AccentColors.Hover_Clr : ThemeColors.third,
                            transitionProperty: 'color, background-color, border-color',
                            transitionDuration: Speed,
                            transitionTimingFunction: CSS_EASING[Animation]
                        }}
                        className={`${AccentColors.HOVER}  
                               rounded-4xl md:rounded-2xl py-1 sm:rounded-xl font-bold  active:scale-95  
`}
                        onClick={() => calcBtnClck(symbol)}
                    >{symbol}
                    </button>
                })
            }
        </>
    )
}

export default React.memo(CalcButtons)