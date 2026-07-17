import React from "react";
import { CALC_BTNS } from "../../constants";
import { COMMON_COLORS } from "../../constants/style";
import { CSS_EASING } from "../../constants/Settings";
import { useSelector } from "react-redux";

const CalcButtons = ({ ThemeColors, AccentColors, calcBtnClck, Device, Theme }) => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    return (
        <>
            {
                CALC_BTNS.map(({ symbol, id }) => {
                    const isChange = ['AC', 'X', '%'].includes(symbol);
                    const isSymb = ['/', '*', '-', '+'].includes(symbol);

                    return <button key={id}
                        style={{
                            borderColor: ThemeColors.third,
                            fontFamily: Weights.Bold,
                            fontSize: Sizes.Large,
                            color: isChange || isSymb ? AccentColors.CODE : symbol === '=' ? COMMON_COLORS.White : ThemeColors.primaryText,
                            backgroundColor: symbol === '=' ? AccentColors.CODE : ThemeColors.header,
                            '--hover': symbol === '=' ? AccentColors.Hover_Clr : ThemeColors.third,
                            '--active': symbol === '=' ? AccentColors.Hover_Clr : ThemeColors.third,
                            
                        }}
                        className={`${AccentColors.HOVER}  
                              ${Device === 'Mobile' ? 'sm:rounded-xl rounded-4xl' : Device === 'Tablet' ? 'rounded-3xl' : 'rounded-2xl'}  py-1  font-bold  active:scale-95  
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