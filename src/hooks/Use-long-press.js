import { useRef } from "react";

export default function useLongPress(onLongPress) {

    const timerRef = useRef(null);
    const isLongPressRef = useRef(false);
    const startXRef = useRef(0);
    const startYRef = useRef(0);

    const MOVE_THRESHOLD = 10; // px

    function startPress(clientX, clientY) {
        isLongPressRef.current = false;
        startXRef.current = clientX;
        startYRef.current = clientY;

        timerRef.current = setTimeout(() => {
            isLongPressRef.current = true;
            clearTimeout(timerRef.current);
            onLongPress?.();
        }, 1500);
    }

    function cancelPress() {
        clearTimeout(timerRef.current);
    }

    function onMouseDown(e) {
        startPress(e.clientX, e.clientY);
    }

    function onMouseUp() {
        cancelPress();
    }

    function onTouchStart(e) {
        const touch = e.touches[0];
        startPress(touch.clientX, touch.clientY);
    }

    function onTouchMove(e) {
        const touch = e.touches[0];

        const dx = Math.abs(touch.clientX - startXRef.current);
        const dy = Math.abs(touch.clientY - startYRef.current);

        // If user moves finger → it's scroll, cancel long press
        if (dx > MOVE_THRESHOLD || dy > MOVE_THRESHOLD) {
            cancelPress();
        }
    }

    function onTouchEnd() {
        cancelPress();
    }

    return {
        Handlers: {
            onMouseDown,
            onMouseUp,
            onTouchStart,
            onTouchMove,
            onTouchEnd
        },
        isLongPress: isLongPressRef
    };
}