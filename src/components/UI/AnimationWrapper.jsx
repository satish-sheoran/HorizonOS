import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import ExtraQuery from '../Settings/ExtraQuery';

const AnimationWrapper = ({ children, activePanel, Section, fullScreen, Device, theme }) => {
    const Animref = useRef(null)

    useGSAP(() => {
        if (!Animref.current) return;

        gsap.to(Animref.current, {
            duration: 0.4,
            ease: 'expo.out'
        })
    }, [activePanel])


    return (
        <div className={`${activePanel !== '' ? '' : 'hidden'} overflow-hidden absolute flex inset-0 transition-colors duration-500 ease-out ${theme != 'dark' ?
            'bg-(--sec-light-clr)'
            : 'bg-(--bg-dark-app-body)'}`} ref={Animref}>

            <div className={`settings-deepCommon-overflow-UI w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto px-[2.5%]'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

                {children}
                {/* QUERIES */}
                {fullScreen && Device === 'Desktop' && (
                    <ExtraQuery theme={theme} Device={Device} fullScreen={fullScreen} Section={Section} />
                )}



            </div>
        </div>
    )
}

export default AnimationWrapper