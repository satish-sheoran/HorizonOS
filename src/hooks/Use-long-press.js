// it has the code which trigger the event when user press a button for long time

import { useRef } from "react";

// target defines if it used on notes/categories
export default function useLongPress(onLongPress) {

    const timerRef = useRef(null);
    const isLongPressRef = useRef(false)

    function onMouseDown() {
        isLongPressRef.current = false;
        timerRef.current = setTimeout(() => {
            isLongPressRef.current = true;
            onMouseUp(); // clear timer after long press is triggered to prevent memory leaks
            onLongPress?.();
        }, 700)
    }

    function onMouseUp() {
        clearTimeout(timerRef.current);
    }

    function onTouchStart() {
        isLongPressRef.current = false;
        timerRef.current = setTimeout(() => {
            isLongPressRef.current = true;
            onTouchEnd(); // clear timer after long press is triggered to prevent memory leaks
            onLongPress?.();
        }, 700)
    }

    function onTouchEnd() {
        clearTimeout(timerRef.current);
    }

    return {
        Handlers: {
            onMouseUp,
            onMouseDown,
            onTouchStart,
            onTouchEnd
        },
        isLongPress: isLongPressRef
    }
}