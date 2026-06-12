import React from "react";
import { CALC_BTNS } from "../../constants";

const CalcButtons = ({ theme, calcBtnClck,Device }) => {
    return (
        <>
            {
                CALC_BTNS.map(({ symbol, id }) => {
                    const isChange = ['AC', 'X', '%'].includes(symbol);
                    const isSymb = ['/', '*', '-', '+'].includes(symbol);

                    return <button key={id}
                        className={`transition-colors duration-500 ease-out
                             ${theme != 'dark' ?
                                isChange || isSymb ? 'text-(--color-green)' :
                                    'text-(--primary-dark-clr)'
                                :
                                isChange || isSymb ? 'text-(--color-lime)' :
                                    'text-(--primary-light-clr)'}  

                               rounded-4xl md:rounded-2xl py-1 sm:rounded-xl font-bold  active:scale-95  


                            ${theme != 'dark' ?
                                `${symbol === '=' ? 'text-(--primary-light-clr) bg-(--color-green) active:bg-(--color-lime)' : 'bg-(--primary-light-clr) hover:bg-(--third-light-clr)'} ${Device !=='Desktop'?'active:bg-(--third-light-clr)':'active:bg-(--primary-light-clr)'}`
                                :
                                `${symbol === '=' ? 'text-(--primary-light-clr) bg-(--color-green) active:bg-(--color-lime)' : 'bg-(--bg-dark-header) hover:bg-(--third-dark-clr) active:bg-(--color-gray)'}`}

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