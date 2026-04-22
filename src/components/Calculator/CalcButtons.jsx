import React from "react";
import { CALC_BTNS } from "../../constants";

const CalcButtons = ({theme , calcBtnClck}) => {
    return (
        <>
            {
                CALC_BTNS.map(({ symbol, id }) => {
                    const isOperator = ['AC', 'X', '%', '/', '*', '-', '+'].includes(symbol);

                    return <button key={id}
                        className={` ${theme != 'dark' ?
                            `${isOperator ? 'text-(--clr-orange)' : 'text-(--primary-dark-clr)'}`
                            : `${isOperator ? 'text-(--clr-orange)' : 'text-(--primary-light-clr)'}`}  
                                rounded-2xl py-1 sm:rounded-xl font-bold  transition-all active:scale-95 ease-in-out duration-0.3 

                            ${theme != 'dark' ?
                                `${symbol === '=' ? 'bg-(--bg-orange) hover:bg-(--bg-orange-hover)' : 'bg-(--btn-light) hover:bg-(--btn-light-hover)'}`
                                : `${symbol === '=' ? 'bg-(--bg-orange) hover:bg-(--bg-orange-hover)' : 'bg-(--btn-dark) hover:bg-(--btn-dark-hover)'}`}  

                            ${['AC', 'X', '%', '/', '*', '-', '+'].includes(symbol) ? 'text-(--clr-orange)' : ''}`}
                        onClick={() => calcBtnClck(symbol)}
                    >{symbol}
                    </button>
                })
            }
        </>
    )
}

export default React.memo(CalcButtons)