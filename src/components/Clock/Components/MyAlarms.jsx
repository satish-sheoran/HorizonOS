import React from 'react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../constants/style'
import { CSS_EASING } from '../../../constants/Settings'
import { useSelector } from 'react-redux';

const MyAlarms = () => {

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const Device = useSelector((store) => store.Device.currDevice);
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const Theme = useSelector((store) => store.wallpaper.theme.Clock);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Clock)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const ExperimentalFeatures = useSelector(store => store.Settings.ExperimentalFeatures)

    return (
        <section className={`flex flex-col gap-2 w-full `}>
            <div
                style={{
                    borderColor: ThemeColors.third,
                    backgroundColor: ThemeColors.header
                }}
                className={`border overflow-hidden  rounded-2xl ${Device !== 'Desktop' ? `px-3 py-3` : `px-2.5 py-3`}`}>
                <div
                    style={{
                        borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE
                    }}
                    className={`border-l-2 rounded pl-2 flex gap-4 items-center justify-between`}> {/*wrapper*/}
                    <div className='flex flex-col gap-0.5  grow'>
                        <p className={`flex items-end gap-1`}>
                            <span style={{
                                color: ThemeColors.primaryText,
                                fontFamily: Weights.SemiBold,
                                fontSize: `${(Sizes.ExtraLarge.slice(0, -3)) * 1.2}rem`
                            }}>09 : 41</span>
                            <p style={{
                                color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Purple').CODE,
                                fontFamily: Weights.SemiBold,
                                fontSize: Sizes.Small
                            }} className={`mb-1`}>AM</p>

                        </p>
                        <span
                            style={{
                                color: ThemeColors.thirdText,
                                fontFamily: Weights.SemiBold,
                                fontSize: `${(Sizes.Small.slice(0, -3)) * 0.85}rem`
                            }}
                        >Everyday</span>{/* day of alarm play */}
                    </div>

                    {/* right side ,toggle  */}
                    <div>
                        <button
                            style={{
                                backgroundColor: true ? Theme !== 'dark' ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE : COMMON_COLORS.Blue
                                    :
                                    ThemeColors.bg,

                            }}
                            className={`outline-none cursor-pointer relative  w-14 h-7 p-1.5  rounded-full `}>

                            <div style={{
                                backgroundColor: COMMON_COLORS.White,
                                transition: `transform 0.3s ${CSS_EASING[Animation]}`,
                                transform: `${true ? 'translateX(1.5rem)' : 'translateX(0)'}`
                            }} className={`theme-toggle-circle w-5 h-5 absolute top-1  rounded-full 
                        `}></div>

                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAlarms