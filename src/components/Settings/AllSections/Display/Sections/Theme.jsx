import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAutoTheme } from '../../../../../redux/features/wallpaper'
import ThemeSelection from '../components/ThemeSelection'
import DarkOptions from '../components/DarkOptions'
import ToggleButton from '../../../../UI/ToggleButton'

const ThemeComponent = {
    ThemeSelection,
    DarkOptions,
    AutomaticTheme: ToggleButton
}

const Theme = ({ options, sectionName, theme, fullScreen, Device }) => {

    const dispatch = useDispatch()
    const performAction = () => dispatch(setAutoTheme())
    const isAutoTheme = useSelector((store) => store.wallpaper.isAutoTheme)


    return (
        <div className={`flex flex-col w-full pt-2.5 `}>

            <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>
            {/* DISPLAYING ALL OPTIONS THEME,DARK  MODE OPTIONS AND AUTOMATIC THEME */}
            {
                options?.map(({ option, value }, idx) => {
                    const Component = ThemeComponent[option];

                    if (!Component) return null;
                    if (option === 'AutomaticTheme') {
                        return <ToggleButton
                            key={idx}
                            theme={theme}
                            action={value}
                            performAction={performAction}
                            isActionActive={isAutoTheme}
                        />
                    }

                    return <Component
                        key={idx}
                        theme={theme}
                        value={value}
                        fullScreen={fullScreen}
                        Device={Device}
                    />
                })
            }

        </div>
    )
}

export default Theme