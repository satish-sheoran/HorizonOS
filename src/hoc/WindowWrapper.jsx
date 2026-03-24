import {  useSelector } from 'react-redux'
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {

    const Wrapped = () => {
        const apps = useSelector((store) => store.windowApps.apps);
        const { isOpen, zIndex, windowRatio, fullScreen } = apps[windowKey]; //windowRatio is key present in all app which has height and width of app is written inside and when user click the fullScreen button then its width and height changes by a reducer fn of store 
        const ref = useRef(null);
        const draggableref = useRef(null);

        /*  animation */
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            gsap.fromTo(el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
            )
        }, [isOpen])


        /* Make window draggable and bring it to front when dragging starts */
        useGSAP(() => {
            const el = ref.current;
            const handler = el.querySelector('.window-header'); //if we do not use it then all open app will drag together 
            // Draggable.create() returns an array of draggable instances.
            // Since we are creating only one draggable element, we extract the first instance.
            const [instance] = Draggable.create(el, {
                type: "x,y", //direction in which element can be dragged
                bounds: '.appsArea', // prevents window from leaving this container
                edgeResistance: 0.5,
                handle: handler,
                dragClickables: false,
            });
            draggableref.current = instance; //taking its refrence so that we can set position of app 

            // Cleanup draggable instance when component unmounts
            // This removes event listeners and prevents memory leaks
            return () => instance.kill();
        }, [])

        /* Settings app Postion based on Fullscreen and enable/disable dragging */
        useEffect(() => {
            const el = ref.current;
            const instance = draggableref.current;

            if (!el || !instance) return;
            if (fullScreen) {
                // disbale dragging
                instance.disable();
                gsap.set(el, { x: 0, y: 0 })
            } else {
                instance.enable();
            }
        }, [fullScreen])

        // Toggle window visibility immediately after DOM mutations but before paint
        // useLayoutEffect prevents visual flicker when opening/closing the window
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen])


        return <section ref={ref} className={`${fullScreen ? `${windowKey}-full` : windowKey} ${windowRatio.width} ${windowRatio.height} transition-all duration-(--transition-fast) ease-out `} style={{ zIndex }}>
            <Component />
        </section>
    }

    /**
     * Set a readable name for the wrapped component so React DevTools shows
    something like "WindowWrapper(ComponentName)" instead of just "Wrapped"
    **/
    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
}

export default WindowWrapper
