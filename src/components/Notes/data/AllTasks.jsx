import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useSelector } from 'react-redux'
import { toast } from "react-toastify"


const AllTasks = ({Theme,AccentColors,ThemeColors}) => {
        
    const taskAnimRef = useRef(null);
    const isFirstRun = useRef(true);
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    useGSAP(() => {
        if (!taskAnimRef.current) return;

        // used to fix the animation on first load, because on first load it will animate from 0% to 0% which is not good, so we set it to the correct position without animation and then for subsequent changes we use animation
        // Also  the reason why it do not happen for Folders.jsx is bcz there we use transform-x-full which is 100% and in this we use 120% so it is not visible on first load but in this it is visible on first load because it is 0% so we need to set it to 120% on first load without animation
        if (isFirstRun.current) {
            gsap.set(taskAnimRef.current, { y: activeTab === 'Tasks' ? '0%' : '120%' });
            isFirstRun.current = false;
        } else {
            gsap.to(taskAnimRef.current, {
                y: activeTab === 'Tasks' ? '0%' : '120%',
                duration: 0.5,
                ease: 'expo.out'
            });
        }

    }, [activeTab])

    {/* it is absloute, on switching it will just come above the returnig div  */ }
    return (
        <button ref={taskAnimRef}
            onClick={() => toast.info("This will be available shortly")}
            style={{color : ThemeColors.grayish}}
            className={`transition-colors duration-500 ease-out absolute inset-0 select-none  font-bold text-center flex items-center justify-center outline-none
                          
                         `}> This functionality will be < br /> available soon 😴 !
        </button >
    )
}

export default AllTasks