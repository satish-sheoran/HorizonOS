import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Icons from 'lucide-react'

import { CSS_EASING } from '../../../../../../constants/Settings'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../../../../constants/style'
import { setEnableDebugLogs, setExperimentalFeatures, setInspectReduxDevTool, setshowFPSCounter } from '../../../../../../redux/features/SettingsSlice'
import { setAnimationTypeNSpeed } from '../../../../../../redux/features/wallpaper'


const DevOpsSectionAndOptions = ({ Theme, ThemeColors, AccentColors, DevOptionsParentRef, Device }) => {

    const dispatch = useDispatch()
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const AnimationTypeNSpeed = useSelector(store => store.wallpaper.AnimationTypeNSpeed);
    const DevOps = useSelector(store => store.Settings)

    //FNS
    const UseshowFPSCounter = () => {
        dispatch(setshowFPSCounter())
    }
    const UseDisableAnimation = () => {
        dispatch(setAnimationTypeNSpeed({ DisableManageDevOps: 'perform' }))
    }
    const UseEnableDebugLogs = () => {
        dispatch(setEnableDebugLogs())
    }

    const UseInspectReduxDevTool = () => {
        dispatch(setInspectReduxDevTool())
    }
    const UseEnableExperimentalFeatures = () => {
        dispatch(setExperimentalFeatures())

    }




    return (
        <>
            {
                [
                    {
                        Section: 'Interface',
                        options: [
                            {
                                icon: 'ChartLine', iconColor: 'Green', option: 'Show FPS Counter', desc: 'Display frames per second in the top-left corner.', key: 'showFPSCounter', performAction: UseshowFPSCounter
                            },
                            {
                                icon: 'SquareDashed', iconColor: 'Purple', option: 'Disable Animations', desc: 'Disable all system animations and transitions.', key: 'DisableAnimations', performAction: UseDisableAnimation
                            },
                        ]
                    },
                    {
                        Section: 'Logging & Debug',
                        options: [
                            {
                                icon: 'SquareChevronRight', iconColor: 'Blue', option: 'Enable Debug Logs', desc: 'Logs important system events to console.', key: 'EnableDebugLogs', performAction: UseEnableDebugLogs
                            },
                            {
                                icon: 'Store', iconColor: 'Purple', option: 'Redux DevTools ', desc: 'Inspect and debug Redux store.', key: 'InspectReduxDevTool', performAction: UseInspectReduxDevTool

                            },
                        ]
                    },
                    {
                        Section: 'Experiments',
                        options: [
                            {

                                icon: 'FlaskConical', iconColor: 'Orange', option: 'Enable Experimental Features', desc: 'Turn on features that are in development.', key: 'ExperimentalFeatures', performAction: UseEnableExperimentalFeatures
                            }
                        ]
                    }
                ].map(({ Section, options }, idx) => {
                    return <div
                        key={idx}
                        ref={(el) => {
                            if (el) {
                                DevOptionsParentRef.current[Section] = el
                            } else {
                                delete DevOptionsParentRef.current[Section]
                            }
                        }}
                        style={{
                            backgroundColor: ThemeColors.header,
                            borderColor: ThemeColors.third
                        }}
                        className={`flex flex-col gap-2 border rounded-2xl overflow-hidden ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'}`}>
                        <span style={{
                            fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.8}rem`, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                        }} className={`font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Section}</span>

                        {options.map(({ icon, option, desc, iconColor, performAction, key: OpKey }, idx) => {
                            const ICON = Icons[icon]
                            return ICON && <div key={idx}
                                style={{
                                    borderColor: ThemeColors.third,
                                    '--hover': ThemeColors.third,
                                    '--active': Theme !== 'dark' ?
                                        Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                        :
                                        COMMON_COLORS.Gray,
                                }}
                                className={`HOVER_CLASS active:scale-95 flex border items-center justify-between rounded-2xl ${Device !== 'Desktop' ? 'p-3' : 'p-2.5'} overflow-hidden`}
                            >
                                <div
                                    className={`flex gap-1.5 items-center max-w-[83%]`}
                                >
                                    <p
                                        style={{
                                            color: ACCENT_COLORS?.find(({ COLOR }) => COLOR === iconColor)?.CODE ?? ThemeColors.primaryText,
                                            // backgroundColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === iconColor)?.Bg_Clr ?? ThemeColors.header,
                                            borderColor: ThemeColors.third
                                        }}
                                        className={`shrink-0  flex items-center justify-center p-1.5 rounded-lg overflow-hidden`}>
                                        <ICON size={22} strokeWidth={2.5} />
                                    </p>
                                    <p className={`flex flex-col gap-0.5`}>
                                        <span style={{
                                            fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText
                                        }}>{option}</span>
                                        <span style={{
                                            fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText
                                        }}>{desc}</span>
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        performAction()
                                    }}
                                    style={{
                                        backgroundColor: OpKey !== 'DisableAnimations' ?
                                            DevOps[OpKey] ? Theme !== 'dark' ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE : COMMON_COLORS.Blue : ThemeColors.bg
                                            :
                                            AnimationTypeNSpeed.Name == 'Disabled' ? Theme !== 'dark' ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE : COMMON_COLORS.Blue : ThemeColors.bg
                                    }}
                                    className={`outline-none cursor-pointer relative  w-14 h-7 p-1.5  rounded-full `}>

                                    <div style={{
                                        backgroundColor: COMMON_COLORS.White,
                                        transition: `transform 0.3s ${CSS_EASING[Animation]}`,
                                        transform: `${OpKey !== 'DisableAnimations' ? DevOps[OpKey] ? 'translateX(1.5rem)' : 'translateX(0)'
                                            :
                                            AnimationTypeNSpeed.Name == 'Disabled' ? 'translateX(1.5rem)' : 'translateX(0)'
                                            }`
                                    }} className={`w-5 h-5 absolute top-1  rounded-full `}></div>

                                </button>
                            </div>
                        })
                        }
                    </div >
                })
            }
        </>
    )
}

export default DevOpsSectionAndOptions