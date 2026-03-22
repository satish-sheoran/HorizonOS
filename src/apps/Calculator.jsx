import { useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"
import { CALC_BTNS } from "../constants";
import { useEffect, useRef, useState } from "react";
import { calculate, clearResult, getFontClass, manageEntries, removeElem } from "../utils/CalculatorFns";
import MobileCntrls from "../components/MobileCntrl";

const Calculator = () => {
    const theme = useSelector((store) => store.wallpaper.theme)
    const currDevice = useSelector((store) => store.Device.currDevice);
    const data = useSelector((store) => store.windowApps.apps['calculator'].data);
    const [result, setResult] = useState(data ?? '0') //setting initally value from data of calculator app from its store

    const inputRef = useRef(null);
    // whenever data in store changes it executes to set the fresh value present in store
    useEffect(() => {
        setResult(data ?? '0')
    }, [data])

    const calcBtnClck = (symbol) => {
        const textarea = inputRef.current;
        if (!textarea) return;

        let start = textarea.selectionStart; // starting point of selected text of input ex: seelcting no. from 456 in '12345689'
        let end = textarea.selectionEnd; //ending point of selected text of input 

        if (symbol === 'AC') {
            setResult(() => clearResult(textarea))
            return;
        }

        if (symbol === '=') {
            const { value, cursor } = calculate(result)
            setResult(value);
            setTimeout(() => {
                textarea.selectionStart = textarea.selectionEnd = cursor;
            }, 0);
            return;
        }

        if (symbol === 'X') {
            setResult(() => removeElem(result, start, end, textarea))
            return;
        }

        // Enty Cases
        const { value, cursor } = manageEntries(symbol, result, start, end);

        setResult(value);

        setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = cursor;
        }, 0);
        return;
    }


    return (
        <div className='w-full flex flex-col h-full'>
            {/* header */}
            {currDevice === 'Desktop' ? <WindowControls id='calculator' result={result} /> : <MobileCntrls id='calculator' result={result} />}

            {/* body  */}

            <div className={`grow flex flex-col justify-end app-body  ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

                <textarea
                    ref={inputRef}
                    value={result}
                    inputMode="none" //disable keyboard on mobile
                    onKeyDown={(e) => {
                        if (e.key === "Backspace") {
                            calcBtnClck('X');
                        } else {
                            e.preventDefault();
                        }
                    }} //prevent typing char ex: abc
                    onFocus={() => {
                        const el = inputRef.current;
                        if (!el) return;

                        const len = result.length;

                        setTimeout(() => {
                            el.selectionStart = el.selectionEnd = len;
                        }, 0);
                    }} // to prevent a bug which cause its input point to start
                    readOnly={window.innerWidth >= 768} //user can not edit if he is not on phone
                    className={`${getFontClass(result.length)} calc-result ${window.innerWidth >= 768 ? 'no-cursor' : ''} ${theme != 'dark' ? 'text-black' : 'text-white'}`}></textarea>

                <div className={`calc-btns grow select-none`}>
                    {CALC_BTNS.map(({ symbol, id }) => {

                        return <button key={id} className={`  ${theme != 'dark' ? 'text-white' : 'text-black'} rounded-md py-1 grow transition-all
ease-in-out duration-0.3 ${theme != 'dark' ? 'bg-(--bg-light-btn) hover:bg-(--bg-light-btn-hover)' : 'bg-(--bg-dark-btn) hover:bg-(--bg-dark-btn-hover)'}`}
                            onClick={() => calcBtnClck(symbol)}
                        >{symbol}
                        </button>
                    })}
                </div>
            </div>

        </div >
    )
}

const CalculatorWindow = WindowWrapper(Calculator, 'calculator');

export default CalculatorWindow;