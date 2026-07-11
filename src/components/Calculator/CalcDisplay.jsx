import React from 'react'
import { useSelector } from 'react-redux';
import { CSS_EASING } from '../../constants/Settings'

const CalcDisplay = ({ inputRef, result, calcBtnClck, currDevice, ThemeColors, AccentColors, Theme }) => {

    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

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
            className={` calc-result ${currDevice === 'Desktop' ? 'no-cursor' : ''}`}
            style={{
                fontSize: result.length <= 25 ? Sizes.ExtraLarge : Sizes.Large,
                fontFamily: Weights.SemiBold,
                color: ThemeColors.primaryText, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
        >
        </textarea >
    )
}

export default CalcDisplay