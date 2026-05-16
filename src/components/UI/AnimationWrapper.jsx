import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const AnimationWrapper = ({ children, activePanel }) => {
    const Animref = useRef(null)

    useGSAP(() => {
        if (!Animref.current) return;

        gsap.to(Animref.current, {
            duration : 0.4,
            ease : 'expo.out'
        })
    }, [activePanel])


    return (
        <div className={`${activePanel !== '' ? '' : 'hidden'} border border-amber-300 absolute inset-0 bg-red-400`} ref={Animref}>
            HII
            {children}
            </div>
    )
}

export default AnimationWrapper