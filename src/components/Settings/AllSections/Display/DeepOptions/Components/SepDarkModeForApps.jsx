import React from 'react'
import { ALL_APPS } from '../../../../../../constants'
import { COMMON_COLORS, ACCENT_COLORS } from '../../../../../../constants/style'
import { CSS_EASING } from '../../../../../../constants/Settings'
import DetailedToggleButton from '../../../../../UI/DetailedToggleButton'
import { useDispatch, useSelector } from 'react-redux'
import { AddToAdvanceDarkMode, RemoveFromAdvanceDarkMode } from '../../../../../../redux/features/wallpaper'

const SepDarkModeForApps = ({ Name, Theme, ThemeColors, AccentColors, Device, fullScreen }) => {
  const dispatch = useDispatch()
  const AdvanceDarkMode = useSelector((store) => store.wallpaper.AdvanceDarkMode)
const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

  const AddToDarkMode = (App) => dispatch(AddToAdvanceDarkMode({ App : App}))
  const RemoveFromDarkMode = (App) => dispatch(RemoveFromAdvanceDarkMode({ App  : App}))

  return (
    <div className={`flex flex-col gap-2 `}>
      <div className='flex flex-col gap-0.5'>
        <span style={{ color: ThemeColors.primaryText ,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}} className={` text-[0.8rem] font-bold ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Dark mode for apps</span>
        <span style={{ color: ThemeColors.thirdText,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} className={` text-[0.6rem]  ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'}`}>Choose which apps should use dark mode.</span>
      </div>

      <div style={{ backgroundColor: ThemeColors.header,transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation] }} className={`flex flex-col gap-2 rounded-2xl  select-none ${Device !== 'Desktop' ? `p-3` : `p-2.5`}`} >

        {ALL_APPS.map(({ id, name, icon, desc, canOpen, }) => {
          return <div key={id}>
            {canOpen && name !=='Settings' && <DetailedToggleButton
              key={id}
              Device={Device}
              ThemeColors={ThemeColors}
              AccentColors={AccentColors}
              Logo={icon}
              Title={name}
              Detail={desc}
              Theme={Theme}
              isActionActive={AdvanceDarkMode.includes(name)}
              performAction={AdvanceDarkMode.includes(name) ? () => RemoveFromDarkMode(name) : () => AddToDarkMode(name )}
            />}
          </div>
        })}

      </div>
    </div>
  )
}

export default SepDarkModeForApps