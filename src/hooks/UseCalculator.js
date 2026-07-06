import { useRef } from "react";
import { calculate, clearResult, manageEntries, removeElem } from "../utils/CalculatorFns";

function UseCalculator(currDevice,result,setResult) {
    const inputRef = useRef(null);

    const calcBtnClck = (symbol) => {
        const textarea = inputRef.current;
        if (!textarea) return;

        const start =
            currDevice === 'Desktop' || currDevice === 'Tablet'
                ? result.length
                : textarea.selectionStart ?? result.length;
        // starting point of selected text of input ex: seelcting no. from 456 in '12345689' also ?? result.length is writtne bcz sometime on desktop the cursor position misbehaved as cause issues

        const end =
            currDevice === 'Desktop' || currDevice === 'Tablet'
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

        // Entry Cases
        const { value, cursor } = manageEntries(symbol, result, start, end);

        setResult(value);

        requestAnimationFrame(() => {
            textarea.selectionStart = textarea.selectionEnd = cursor;
            textarea.scrollTop = textarea.scrollHeight;

        });
        return;
    }

    
return {inputRef, calcBtnClck}
}

export default UseCalculator;