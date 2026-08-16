import React, { useState } from 'react'
import { ACCENT_COLORS, COMMON_COLORS } from '../../../constants/style'
import { useDispatch, useSelector } from 'react-redux';
import ConfirmDeletePopUp from '../Folder/ConfirmDeletePopUp';
import { ChevronRight } from 'lucide-react';

const ResetSetting = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch();
    const Device = useSelector(store => store.Device.currDevice)
    const { Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes, SizeType } = useSelector(store => store.wallpaper.FontSize) //font sizes

    const [openDeletePopUp, setOpenDeletePopUp] = useState(false);


    return (
        <>

            <div
                onClick={() => setOpenDeletePopUp(true)}
                style={{
                    borderColor: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Red')?.Hover_Clr,
                    backgroundColor: ThemeColors.header,
                    '--hover': ThemeColors.third,
                    '--active': Theme !== 'dark' ?
                        Device !== 'Desktop' ? ThemeColors.third : COMMON_COLORS.White
                        :
                        COMMON_COLORS.Gray,
                }}
                className={`mb-4 HOVER_CLASS active:scale-95 border rounded-2xl  select-none font-semibold flex items-center justify-between ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`}>

                <p className={`w-fit flex flex-col gap-0.5 font-semibold`}>
                    <span style={{
                        color: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Red')?.CODE,
                        fontSize: Sizes.Small,
                        fontFamily: Weights.SemiBold
                    }}>Reset App Settings</span>
                    <span style={{
                        fontSize: Sizes.ExtraSmall,
                        fontFamily: Weights.Regular,
                        color: ThemeColors.thirdText
                    }}>Reset all settings to default</span>

                </p>
                <span className='w-fit flex gap-0.5 items-center' style={{
                    fontSize: `${(Sizes.Small.slice(0, -3)) * 0.9}rem`,
                    fontFamily: Weights.Regular,
                    color: ACCENT_COLORS?.find(({ COLOR }) => COLOR === 'Red')?.Hover_Clr,
                }}>
                    <ChevronRight size={Device !== 'Desktop' ? 20 : 15} strokeWidth={2} />
                </span>

            </div>

            {openDeletePopUp === true && <ConfirmDeletePopUp openDeletePopUp={openDeletePopUp} setOpenDeletePopUp={setOpenDeletePopUp} WorkingOn={'Reset Note Settings'} Theme={Theme} ThemeColors={ThemeColors} AccentColors={AccentColors} />}

        </>
    )
}

export default ResetSetting