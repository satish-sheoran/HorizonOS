import { dockApps } from '../constants'
import { useWindowManager } from '../hooks/windowManager'

const Dock = () => {
    const { toggleApp } = useWindowManager();

    return (
        <nav className='dock glass flex justify-between   items-center' style={{ marginBottom: 'var(--padding-sm)' }}>

            {dockApps.map(({ id, name, icon, canOpen }) => {
                return <button
                    key={id} className={`app-icon active:scale-90 ${canOpen ? 'opacity-100' : 'opacity-70'} bg-(--bg-app-icon) overflow-hidden`}
                    onClick={() => toggleApp({ id, canOpen })} >


                    <img className={`w-full h-full object-cover object-center rounded-(--border-radius-md) ${id == 'settings' || id == 'clock' ? 'scale-80' : 'scale-100'}`} src={icon} alt={name} />

                    {/* it is just to show blackish feel when app is clicked to opened */}
                    <div className='absolute bg-black w-full h-full rounded-(--border-radius-md) top-0 left-0 opacity-0 active:opacity-40'></div>


                </button>

            })}
        </nav>
    )
}

export default Dock