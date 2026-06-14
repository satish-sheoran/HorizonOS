import React from "react";
import { CALC_BTNS } from "../../constants";
import { COMMON_COLORS } from "../../constants/style";

const CalcButtons = ({ ThemeColors, AccentColors, calcBtnClck, Device }) => {
    return (
        <>
            {
                CALC_BTNS.map(({ symbol, id }) => {
                    const isChange = ['AC', 'X', '%'].includes(symbol);
                    const isSymb = ['/', '*', '-', '+'].includes(symbol);

                    return <button key={id}
                        style={{
                            color: isChange || isSymb ? AccentColors.CODE : symbol === '=' ? COMMON_COLORS.White : ThemeColors.primaryText,
                            backgroundColor: symbol === '=' ? AccentColors.CODE : ThemeColors.header,
                            '--hover':  symbol === '=' ? AccentColors.Hover_Clr: ThemeColors.third,
                            '--active':  symbol === '=' ? AccentColors.Hover_Clr: ThemeColors.third,
                        }}
                        className={`${AccentColors.HOVER} transition-colors duration-500 ease-out  
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