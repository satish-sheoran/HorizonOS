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

        const start =
            currDevice === 'Desktop'
                ? result.length
                : textarea.selectionStart ?? result.length;
        // starting point of selected text of input ex: seelcting no. from 456 in '12345689' also ?? result.length is writtne bcz sometime on desktop the cursor position misbehaved as cause issues

        const end =
            currDevice === 'Desktop'
                ? result.length
                : textarea.selectionEnd ?? result.length;
        //ending point of selected text of input 

        if (symbol === 'AC') {
            setResult(() => clearResult(textarea))
            return;
        }

        if (symbol === '=') {
            const { value, cursor } = calculate(result) || { value: 'Error', cursor: 5 };
            setResult(value);
            requestAnimationFrame(() => {
                textarea.selectionStart = textarea.selectionEnd = cursor;
                textarea.scrollTop = textarea.scrollHeight;
            });
            return;
        }

        if (symbol === 'X') {
            setResult(() => removeElem(result, start, end, textarea))
            return;
        }

        // Enty Cases
        const { value, cursor } = manageEntries(symbol, result, start, end);

        setResult(value);

        requestAnimationFrame(() => {
            textarea.selectionStart = textarea.selectionEnd = cursor;
            textarea.scrollTop = textarea.scrollHeight;

        });
        return;
    }


    return (
        <div className='w-full flex flex-col h-full'>
            {/* header */}
            {currDevice === 'Desktop' ? <WindowControls id='calculator' /> : <MobileCntrls id='calculator' result={result} />}

            {/* body  */}

            <div className={`calc-body  ${theme != 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

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
                    onFocus={(e) => {
                        if (currDevice === 'Desktop') {
                            e.target.blur();
                        }
                        const el = inputRef.current;
                        if (!el) return;

                        // Scroll to bottom (for multi-line)
                        el.scrollTop = el.scrollHeight; //scrollTop = current scroll position
                        const len = result.length;

                        requestAnimationFrame(() => {
                            el.selectionStart = el.selectionEnd = len;
                        });
                    }} // to prevent a bug which cause its input point to start
                    readOnly={currDevice === 'Desktop'} //user can not edit if he is not on phone
                    className={`${getFontClass(result.length)} calc-result ${currDevice === 'Desktop' ? 'no-cursor' : ''} ${theme != 'dark' ? 'text-(--color-black)' : 'text-(--color-white)'}`}></textarea>

                <div className={`calc-btns grow select-none`}>
                    {CALC_BTNS.map(({ symbol, id }) => {

                        return <button key={id} className={`${theme != 'dark' ? 'text-(--color-white)' : 'text-(--color-black)'} rounded-md py-1 grow transition-all active:scale-98
ease-in-out duration-0.3 ${theme != 'dark' ? 'bg-(--btn-light) hover:bg-(--btn-light-hover)' : 'bg-(--btn-dark) hover:bg-(--btn-dark-hover)'}`}
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