import React from 'react'
import { getFontClass } from '../../utils/CalculatorFns';

const CalcDisplay = ({inputRef,result,calcBtnClck,currDevice,theme}) => {
    return (
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
            className={`duration-500 ease-out ${getFontClass(result.length)} calc-result ${currDevice === 'Desktop' ? 'no-cursor' : ''} ${theme != 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>

            </textarea >)
}

export default CalcDisplay