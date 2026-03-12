import { useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"
import { CALC_BTNS } from "../constants";
import { useState } from "react";
import { appendVal, CalcRes } from "../utils/CalculatorFns";

const Calculator = () => {
    // change text-white as per theme
    // implement minimzie and maximize app basede on its fullScreen variable value and use changeWindowScreenSize fn for it of store
    const theme = useSelector((store) => store.wallpaper.theme)
    const [result, setResult] = useState('0')

    const calcBtnClck = (symbol) => {
        if (symbol == 'AC') {
            setResult('0');
        } else if (symbol == '=') {
            setResult(() => CalcRes(result))
        } else {
            setResult(() => appendVal(symbol, result))
        }
    }

    return (
        <>
            <div className='w-full flex flex-col'>

                <div className={`window-header border-b ${theme != 'dark' ? 'bg-(--bg-light-window-header) border-(--bg-light-border)' : 'bg-(--bg-dark-window-header) border-(--bg-dark-border)'}`}>
                    <WindowControls id='calculator' />
                    <p>Calculator</p>
                </div>

                <div className={`app-body  ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

                    <p className={`calc-result min-h-7.5   ${theme != 'dark' ? 'text-black' : 'text-white'}`}>{result}</p>

                    <div className="calc-btns">
                        {CALC_BTNS.map(({ symbol, id }) => {

                            return <button key={id} className={`  ${theme != 'dark' ? 'text-white' : 'text-black'} rounded-md py-1 grow transition-all
ease-in-out duration-0.3 ${theme != 'dark' ? 'bg-(--bg-light-btn) hover:bg-(--bg-light-btn-hover)' : 'bg-(--bg-dark-btn) hover:bg-(--bg-dark-btn-hover)'}`}
                                onClick={() => calcBtnClck(symbol)}
                            >{symbol}
                            </button>
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

const CalculatorWindow = WindowWrapper(Calculator, 'calculator');

export default CalculatorWindow;