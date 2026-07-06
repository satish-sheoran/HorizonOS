import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import SettingQueries from '../Settings/SettingQueries';
import { SECTIONS ,CSS_EASING} from '../../constants/Settings';
import { useSelector } from 'react-redux'

const AnimationWrapper = ({ children, activePanel, Section, fullScreen, Device, Theme, ThemeColors, AccentColors }) => {

    const Animref = useRef(null)
    const Queries = SECTIONS.find(({ Section : Sec }) => Sec === Section).Queries;
const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name


    useGSAP(() => {
        if (!Animref.current) return;

        gsap.to(Animref.current, {
            duration: 0.4,
            ease: Animation ?? 'expo.out'
        })
    }, [activePanel])


    return (
        <div
            style={{ backgroundColor: ThemeColors.bg ,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}}
            className={`${activePanel !== '' ? '' : 'hidden'} overflow-hidden absolute flex inset-0 `} ref={Animref}>

            <div className={`settings-deepCommon-overflow-UI w-full h-full grow flex  ${fullScreen ? '' : 'overflow-y-auto px-[2.5%]'} ${(Device === 'Mobile' || !fullScreen) ? 'flex-col' : ''}`}>
                {children}
                {/* QUERIES */}
                {fullScreen && Device !== 'Mobile' && (
                    <SettingQueries Theme={Theme} Device={Device} fullScreen={fullScreen} Section={Section} ThemeColors={ThemeColors} AccentColors={AccentColors} Queries={Queries} />
                )}

            </div>
        </div>
    )
}

export default AnimationWrapper