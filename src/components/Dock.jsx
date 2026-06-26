import { dockApps } from '../constants'
import { useWindowManager } from '../hooks/windowManager'
import { COMMON_COLORS } from '../constants/style';
import { useSelector } from 'react-redux'
import { CSS_EASING } from '../constants/Settings'
const Dock = () => {
    const { toggleApp } = useWindowManager();
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name

    return (
        <nav className='dock glass flex justify-between  rounded-3xl items-center' style={{ marginBottom: 'var(--padding-sm)' }}>

            {dockApps.map(({ id, name, icon, canOpen }) => {
                return <button style={{
                    backgroundColor: COMMON_COLORS.White, transitionProperty: 'color, background-color, border-color',
                    transitionDuration: Speed,
                    transitionTimingFunction: CSS_EASING[Animation]
                }}
                    key={id} className={`app-icon active:scale-90 ${canOpen ? 'opacity-100' : 'opacity-70'} overflow-hidden`}
                    onClick={() => toggleApp({ id, canOpen })} >


                    <img style={{
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className={`w-full h-full object-cover object-center rounded-(--border-radius-md) ${id == 'settings' || id == 'clock' ? 'scale-80' : 'scale-100'}`} src={icon} alt={name} />

                    {/* it is just to show blackish feel when app is clicked to opened */}
                    <div style={{
                        transitionProperty: 'color, background-color, border-color',
                        transitionDuration: Speed,
                        transitionTimingFunction: CSS_EASING[Animation]
                    }} className='absolute bg-black w-full h-full rounded-(--border-radius-md) top-0 left-0 opacity-0 active:opacity-40'></div>


                </button>

            })}
        </nav>
    )
}

export default Dock