import React from 'react'
import { ACCENT_COLORS } from '../../../../../../constants/style'
import { Check } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setAccentColor } from '../../../../../../redux/features/wallpaper'

const AllColors = ({ Theme, fullScreen, Device, ThemeColors, AccentColors }) => {
  const dispatch = useDispatch()
  return (
    <div className={`flex flex-wrap items-center justify-between  gap-3`}>

      {ACCENT_COLORS?.map(({ COLOR, CODE }) => {

        return <button key={COLOR}
          onClick={() => dispatch(setAccentColor({Color : COLOR}))}
          style={{ backgroundColor: CODE, outlineColor: CODE, borderColor: ThemeColors.header }} className={`ease-out duration-500 flex items-center justify-center ${Device !=='Desktop'?'size-13':'size-13'}  rounded-full ${AccentColors.COLOR === COLOR ? 'border-2 outline-3' : ''}`}>
          {AccentColors.COLOR === COLOR && <div style={{ color: ThemeColors.header }}
            className={`ease-out duration-500 rounded-full items-center justify-center`}>
            <Check strokeWidth={2.5} />
          </div>
          }
        </button>
      })}
    </div>
  )
}

export default AllColors