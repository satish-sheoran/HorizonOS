import { ChevronDown, ChevronUp, Database, Dot, RotateCw, TriangleAlert } from 'lucide-react';
import { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { COMMON_COLORS, ACCENT_COLORS } from '../../../../../../constants/style'
import { CSS_EASING } from '../../../../../../constants/Settings';
import { RESET_DETAILS } from '../../../../../../constants';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { toast } from 'react-toastify';
import DeletePopUp from '../../../../DeletePopUp';
import { FactoryReset, useDispatchResetAll } from '../../../../../../utils/Reset';
import { ResetCalculation, updateCalculation } from '../../../../../../redux/features/Calculator';
import { RemoveFromAdvanceDarkMode, ResetAllStyle } from '../../../../../../redux/features/wallpaper';
import { ResetNotesApp, ResetNotesSettings } from '../../../../../../redux/features/NotesStrorage';
import { ResetSettings as ResetSettingApp } from '../../../../../../redux/features/SettingsSlice'
import { ResetClock } from '../../../../../../redux/features/Clock';
import { CloseAllApp } from '../../../../../../redux/features/windowApps';

const ResetSettings = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {

    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const EnableDebugLogs = useSelector(store => store.Settings.EnableDebugLogs)

    //states
    const [selectedApps, setselectedApps] = useState([]);
    const [openDetails, setOpenDetails] = useState(() => {
        return RESET_DETAILS.reduce((acc, app) => {
            acc[app.App] = acc[app.App] || false;
            return acc;
        }, {})
    }); //used to show/hide reset details
    const [openDeletePopUp, setopenDeletePopUp] = useState(false);
    const [DeleteTitle, setDeleteTitle] = useState('')

    //refs
    const selectedAppsDetailRef = useRef({}); //used to show/hide reset details

    //fns
    const ResetFn = useDispatchResetAll();

    const ResetAllApps = () => {
        ResetFn()
        FactoryReset()
        dispatch(CloseAllApp())
        setselectedApps([])
        if (EnableDebugLogs) console.log(`All Apps Are Being Reset`)
    }
    const ResetSpecificApps = () => {

        // calculator
        if (selectedApps.includes('Calculator')) {
            dispatch(updateCalculation({ result: '0' }))
            dispatch(RemoveFromAdvanceDarkMode({ App: 'Calculator' }))
            localStorage.removeItem('Calculation')
            if (EnableDebugLogs) console.log(`[App] Calculator is Being Reset`)

        }
        // Notes
        if (selectedApps.includes('Notes')) {
            dispatch(RemoveFromAdvanceDarkMode({ App: 'Notes' }))
            dispatch(ResetNotesApp())
            dispatch(ResetNotesSettings())
            localStorage.removeItem('Notes')
            localStorage.removeItem('Tasks')
            localStorage.removeItem('Categories')
            if (EnableDebugLogs) console.log(`[App] Notes is Being Reset`)

        }
        // settings
        if (selectedApps.includes('Settings')) {
            localStorage.removeItem('storedSettings')
            dispatch(ResetSettingApp())
            dispatch(ResetAllStyle())
            if (EnableDebugLogs) console.log(`[App] Settings is Being Reset`)

        }
        // clock
        if (selectedApps.includes('Clock')) {
            dispatch(ResetClock())
            if (EnableDebugLogs) console.log(`[App] Clock is Being Reset`)

        }

        dispatch(CloseAllApp())
        setselectedApps([])
    }


    return (
        <div className={`flex flex-col gap-2 `}>
            <div className='flex flex-col gap-0.5'>
                <span style={{
                    fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
                }} className={`font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>{Name}</span>
                <span style={{
                    fontSize: Sizes.ExtraSmall, fontFamily: Weights.Regular, color: ThemeColors.thirdText,
                }} className={`${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Reset app data and restore to default settings.</span>
            </div>

            {/* yellow warn msg */}
            <div
                style={{
                    backdropFilter: 'blur(16px)',
                    borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').Hover_Clr,
                    backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').Bg_Clr,
                }}
                className={`active:scale-95 border flex items-center gap-4 px-[2.5%] py-[1%] rounded-2xl backdrop-blur-lg
        `}
            >
                <div style={{
                    color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE,
                }} className={`h-full flex items-center`}>
                    <TriangleAlert size={40} strokeWidth={2} />
                </div>

                <div className={`flex flex-col gap-1`}>
                    <span style={{
                        fontSize: `${(Sizes.Regular.slice(0, -3)) * 0.95}rem`, fontFamily: Weights.SemiBold, color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE,
                    }} className={`font-semibold `}>Reset app data</span>
                    <span style={{
                        fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 0.95}rem`, fontFamily: Weights.Regular, color: ThemeColors.secText,
                    }} >This will delete app specific data and restore it to its original state. This action cannot be undone.</span>
                </div>
            </div>

            <span style={{
                fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText,
            }} className={`mt-2 font-semibold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose apps to reset</span>


            {/* apps and reset details */}
            {RESET_DETAILS.map(({ App, Logo, Description, ResetsDetail, DataSize }, index) => {
                return <div
                    key={index}
                    style={{
                        borderColor: ThemeColors.third,
                    }}
                    className={`active:scale-95 border w-full flex flex-col rounded-2xl select-none overflow-hidden`} >

                    <div
                        onClick={() => {
                            if (openDetails[App]) {
                                gsap.to(selectedAppsDetailRef.current[App], {
                                    height: 'auto',
                                    paddingTop: Device !== 'Desktop' ? '0.75rem' : '0.625rem',
                                    paddingBottom: Device !== 'Desktop' ? '0.75rem' : '0.625rem',
                                    opacity: 1,
                                    duration: 0.3,
                                    ease: 'power2.out'
                                })
                                setOpenDetails((prevState) => ({ ...prevState, [App]: false }));

                            } else {
                                gsap.to(selectedAppsDetailRef.current[App], {
                                    height: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    opacity: 0,
                                    duration: 0.3,
                                    ease: 'power2.out'
                                })
                                setOpenDetails((prevState) => ({ ...prevState, [App]: true }));

                            }
                        }}
                        style={{ backgroundColor: ThemeColors.header }} className={`w-full flex items-center justify-between gap-2 ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
                        <div className={`w-6/10 flex items-center gap-4`}>
                            <img
                                style={{
                                    borderColor: ThemeColors.thirdText,
                                    transition: `width 0.3s ${CSS_EASING[Animation]} , height 0.3s ${CSS_EASING[Animation]}`
                                }}
                                className={`border rounded-2xl p-1 ${fullScreen ? 'w-10 h-10' : 'w-11.5 h-11.5'} object-cover object-center `} src={Logo}
                                alt={App}
                            />
                            <div className={`max-w-7/10 flex flex-col gap-0.5`}>
                                <span style={{ fontSize: Sizes.Small, fontFamily: Weights.SemiBold, color: ThemeColors.primaryText, }}>{App}</span>
                                <span style={{ fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`, fontFamily: Weights.Regular, color: ThemeColors.thirdText, }}>{Description}</span>
                            </div>
                        </div>

                        <div className={`flex gap-4 items-center `}>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (selectedApps.includes(App)) {
                                        setselectedApps((selectedApps) => selectedApps.filter((app) => app !== App))
                                    } else {
                                        setselectedApps([...selectedApps, App])
                                    }
                                }}
                                style={{
                                    backgroundColor: selectedApps.includes(App) ? Theme !== 'dark' ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE : COMMON_COLORS.Blue : ThemeColors.bg,
                                }}
                                className={`outline-none cursor-pointer relative  w-14 h-7 p-1.5  rounded-full `}>

                                <div style={{
                                    backgroundColor: COMMON_COLORS.White,
                                    transition: `transform 0.3s ${CSS_EASING[Animation]}`,
                                    transform: `${selectedApps.includes(App) ? 'translateX(1.5rem)' : 'translateX(0)'}`
                                }} className={`w-5 h-5 absolute top-1  rounded-full `}></div>

                            </button>

                            <span>
                                {!openDetails[App] ? <ChevronUp size={16} strokeWidth={2} /> : <ChevronDown size={16} strokeWidth={2} />}
                            </span>
                        </div>
                    </div>


                    {/* changes details */}
                    <div
                        ref={(el) => {
                            if (el) {
                                selectedAppsDetailRef.current[App] = el
                            } else {
                                delete selectedAppsDetailRef.current[App];
                            }
                        }} style={{ backgroundColor: ThemeColors.header, borderColor: ThemeColors.third }}
                        className={`overflow-hidden border-t  flex gap-2 justify-between items-center ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>
                        <div style={{
                            fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`,
                            fontFamily: Weights.Regular,
                            color: ThemeColors.thirdText,
                        }} className={`max-w-[65%] flex flex-col gap-1`}>
                            <span style={{
                                fontSize: Sizes.Small,
                                fontFamily: Weights.SemiBold,
                                color: ThemeColors.primaryText,
                            }}>Will reset the following :</span>

                            <div className={`flex flex-col gap-0`}>
                                {ResetsDetail.map((detail, index) => {
                                    return <p key={index} className={`flex gap-0 items-center`}>
                                        <Dot style={{ color: ACCENT_COLORS.find(({ COLOR }) => COLOR == 'Blue').CODE }} strokeWidth={2} />
                                        <span>{detail}</span>
                                    </p>
                                })}
                            </div>

                        </div>
                        <div onClick={(e) => e.stopPropagation()}
                            style={{
                                borderColor: ThemeColors.third,
                                backgroundColor: ThemeColors.bg,
                                '--hover': ThemeColors.third,
                                '--active': Theme !== 'dark' ?
                                    Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                                    :
                                    COMMON_COLORS.Gray,
                            }}
                            className={`HOVER_CLASS active:scale-95 flex items-center gap-2 border rounded-xl px-2 py-1`}>
                            <Database
                                style={{
                                    color: ACCENT_COLORS.find(({ COLOR }) => COLOR == 'Blue').CODE,
                                }}
                                size={20}
                                strokeWidth={2} />
                            <p className={`flex flex-col gap-0.5`}>
                                <span
                                    style={{
                                        fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.1}rem`,
                                        fontFamily: Weights.SemiBold,
                                        color: ThemeColors.thirdText,
                                    }}
                                >
                                    Data size</span>
                                <span
                                    style={{
                                        fontSize: `${(Sizes.ExtraSmall.slice(0, -3)) * 1.2}rem`,
                                        fontFamily: Weights.Bold,
                                        color: ThemeColors.primaryText,
                                    }}>
                                    ~ {DataSize}</span>
                            </p>

                        </div>
                    </div>
                </div>
            })}


            {/* reset btns */}
            <div className={`mt-2 flex gap-2 items-center justify-center`}>
                <p
                    onClick={() => {
                        setopenDeletePopUp(true)
                        setDeleteTitle('Resetting All Apps?')
                    }}
                    style={{
                        backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').CODE,
                        color: COMMON_COLORS.White,
                        fontFamily: Weights.SemiBold,
                        fontSize: Sizes.Small,
                        borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Orange').Hover_Clr
                    }}
                    className={`active:scale-95 flex items-center justify-center gap-2 border rounded-2xl ${Device !== 'Mobile' ? 'w-fit py-1.5 px-2.5' : 'py-2.5 grow max-w-1/2'}`}>
                    <RotateCw size={18} strokeWidth={2.5} />
                    <span>Reset all apps</span>
                </p>
                <p
                    onClick={() => {
                        if (selectedApps.length < 1) {
                            toast.info('Select atleast one app!')
                        } else {
                            setopenDeletePopUp(true)
                            setDeleteTitle('Resetting selecting Apps?')
                        }
                    }}
                    style={{
                        backgroundColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,
                        color: COMMON_COLORS.White,
                        fontFamily: Weights.SemiBold,
                        fontSize: Sizes.Small,
                        borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr
                    }}
                    className={`active:scale-95 flex items-center justify-center gap-2 border rounded-2xl ${Device !== 'Mobile' ? 'w-fit py-1.5 px-2.5' : 'py-2.5 grow max-w-1/2'}`}>
                    <TriangleAlert size={18} strokeWidth={2.5} />
                    <span>Reset selected apps</span>
                </p>
            </div>


            {openDeletePopUp === true && <DeletePopUp
                openDeletePopUp={openDeletePopUp}
                setopenDeletePopUp={setopenDeletePopUp}
                Theme={Theme}
                ThemeColors={ThemeColors}
                AccentColors={AccentColors}
                DeleteTitle={DeleteTitle}
                DeleteDesc="This can't be undone"
                performAction={DeleteTitle === 'Resetting All Apps?' ? ResetAllApps : ResetSpecificApps}
            />}



        </div>
    )
}

export default ResetSettings