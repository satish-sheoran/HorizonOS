import { useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"
import { CALC_BTNS } from "../constants";
import { useState } from "react";
import { appendVal, CalcRes } from "../utils/CalculatorFns";

const Calculator = () => {
    // chanfe text-white as per theme
    // ISSUE : btns clickings activates dragging and gives error as it was passed to HOC
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
            <div className='w-full flex flex-col text-white'>

                <div className={`window-header border-b ${theme != 'dark' ? 'bg-(--bg-light-window-header) border-(--bg-light-border)' : 'bg-(--bg-dark-window-header) border-(--bg-dark-border)'}`}>
                    <WindowControls id='calculator' />
                    <p>Calculator</p>
                </div>

                <div className={`app-body  ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

                    <p className="calc-result min-h-7.5">{result}</p>

                    <div className="calc-btns">
                        {CALC_BTNS.map(({ symbol, id }) => {

                            return <button key={id} className={` rounded-md py-1 grow transition-all
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