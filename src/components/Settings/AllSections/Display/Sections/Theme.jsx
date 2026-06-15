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

const Theme = ({ options, sectionName, Theme, fullScreen, Device,ThemeColors,AccentColors }) => {

    const dispatch = useDispatch()
    const performAction = () => dispatch(setAutoTheme())
    const isAutoTheme = useSelector((store) => store.wallpaper.isAutoTheme)


    return (
        <div className={`flex flex-col w-full gap-2`}>

            <span className='text-(--grayish-dark-clr) text-sm font-bold select-none'>{sectionName}</span>
            
            {/* DISPLAYING ALL OPTIONS THEME,DARK  MODE OPTIONS AND AUTOMATIC THEME */}

            <div className={`p-[2.5%] flex flex-col rounded-2xl  gap-2 ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
            {
                options?.map(({ option, value }, idx) => {
                    const Component = ThemeComponent[option];

                    if (!Component) return null;
                    if (option === 'AutomaticTheme') {
                        return <ToggleButton
                            key={idx}
                            Theme={Theme}
                            action={value}
                            Device={Device}
                            performAction={performAction}
                            isActionActive={isAutoTheme}
                            ThemeColors={ThemeColors} AccentColors={AccentColors}
                        />
                    }

                    return <Component
                        key={idx}
                        Theme={Theme}
                        value={value}
                        fullScreen={fullScreen}
                        Device={Device}
                        ThemeColors={ThemeColors} AccentColors={AccentColors}
                    />
                })
            }
                        </div>


        </div>
    )
}

export default Theme