import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ACCENT_COLORS,COMMON_COLORS} from '../../constants/style'
import { toast } from "react-toastify";

const DeletePopUp = ({DeleteTitle,DeleteDesc, openDeletePopUp, setopenDeletePopUp,Theme, AccentColors, ThemeColors ,performAction}) => {

    const dispatch = useDispatch();
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const device = useSelector((store) => store.Device.currDevice);
    
    
    const DeletPopElem = useRef(null);
    useGSAP(() => {
        if (!DeletPopElem.current) return;

        gsap.to(DeletPopElem.current, {
            scale: openDeletePopUp ? 1 : 0,
            duration: 0.55,
            force3D: true, //to make animation a bit smooth as it deals with scales (forcw3D)
            ease:  'sine.out'
        })

    }, [openDeletePopUp])

    return (
        <div className={`${openDeletePopUp ? 'block' : 'hidden'}  absolute top-0 left-0 inset-0 flex flex-col`}>

            {/* overlay */}
            <div onClick={()=>setopenDeletePopUp(false)}
                className='relative overlay grow backdrop-blur-[0.5px] bg-[rgba(0,0,0,0.35)] flex justify-center items-end pb-5'>


                <div ref={DeletPopElem}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        backgroundColor: ThemeColors.bg,
                        borderColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Red')?.CODE
                    }}
                    className={`scale-0 border ${device === 'Mobile' ? 'w-[calc(100%-30px)] px-4' : 'w-75 px-3'} h-auto  rounded-2xl py-3.5  gap-2  flex flex-col items-center`}>

                    <span style={{
                        fontSize: `${((Sizes.Regular.slice(0, -3))) * 1.05}rem`,
                        color: ThemeColors.primaryText,
                        fontFamily: Weights.SemiBold,
                    }} className={`font-semibold `}>{DeleteTitle}</span>

                    <span style={{
                        fontSize: Sizes.Small,
                        color: ThemeColors.thirdText
                    }}>{DeleteDesc}</span>

                    <div className={`w-full flex items-center gap-2`}>

                        <button
                        onClick={()=>setopenDeletePopUp(false)}
                            style={{
                                color: COMMON_COLORS.White, fontSize: Sizes.Small,
                                fontFamily: Weights.Bold,
                                backgroundColor: Theme !== 'dark' ? COMMON_COLORS.LightWhite : ThemeColors.grayish,
                                '--hover': Theme !== 'dark' ? COMMON_COLORS.grayishDark : COMMON_COLORS.LightWhite,
                                '--active': Theme !== 'dark' ? COMMON_COLORS.grayishDark : COMMON_COLORS.LightWhite,

                            }}
                            className={`${device !== 'Desktop' ? 'py-3.5' : 'py-2.5'} HOVER_CLASS w-[calc(50%-2px)]   font-bold select-none  active:scale-96 rounded-lg 
                         `}>Cancel</button>

                        <button
                        onClick={()=>{
                            setopenDeletePopUp(false)
                            performAction()
                            // toast.info('Apps Reset Completed...')
                        }}
                            style={{
                                fontFamily: Weights.Bold,
                                fontSize: Sizes.Small,
                                backgroundColor: COMMON_COLORS.Red,
                                color: COMMON_COLORS.White,
                                '--hover': COMMON_COLORS.LightRed,
                                '--active': COMMON_COLORS.LightRed
                                ,
                            }}
                            className={`HOVER_CLASS grow ${device !== 'Desktop' ? 'py-3.5' : 'py-2.5'}   font-bold rounded-lg select-none   active:scale-96`}>
                                Restore Now
                        </button>
                    </div>


                </div>
            </div>
        </div >


    )
}

export default DeletePopUp
