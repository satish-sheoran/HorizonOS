import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import SettingQueries from '../Settings/SettingQueries';

const AnimationWrapper = ({ children, activePanel, Section, fullScreen, Device, Theme ,ThemeColors,AccentColors}) => {
    const Animref = useRef(null)

    useGSAP(() => {
        if (!Animref.current) return;

        gsap.to(Animref.current, {
            duration: 0.4,
            ease: 'expo.out'
        })
    }, [activePanel])


    return (
        <div 
        style={{backgroundColor : ThemeColors.bg}}
        className={`${activePanel !== '' ? '' : 'hidden'} overflow-hidden absolute flex inset-0 transition-colors duration-500 ease-out `} ref={Animref}>

            <div className={`settings-deepCommon-overflow-UI w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto px-[2.5%]'} ${(Device !== 'Desktop' || !fullScreen) ? 'flex-col' : ''}`}>

                {children}
                {/* QUERIES */}
                {fullScreen && Device === 'Desktop' && (
                    <SettingQueries Theme={Theme} Device={Device} fullScreen={fullScreen} Section={Section} ThemeColors={ThemeColors} AccentColors={AccentColors} />
                )}



            </div>
        </div>
    )
}

export default AnimationWrapper