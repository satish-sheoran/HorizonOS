import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { CSS_EASING } from '../../../constants/Settings'
import { COMMON_COLORS } from '../../../constants/style';
import { setopenTaskManager } from '../../../redux/features/NotesStrorage'
import { Plus } from 'lucide-react';

const AllTasks = ({ Theme, AccentColors, ThemeColors }) => {

    const dispatch = useDispatch()

    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
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
                ease: Animation ?? 'expo.out'
            });
        }

    }, [activeTab])

    {/* it is absloute, on switching it will just come above the returnig div  */ }
    return (
        <section ref={taskAnimRef}
            style={{
                fontSize: Sizes.Small,
                fontFamily: Weights.SemiBold,
                color: ThemeColors.grayish, transitionProperty: 'color, background-color, border-color, font-size',
                transitionDuration: Speed,
                transitionTimingFunction: CSS_EASING[Animation]
            }}
            className={`absolute inset-0 select-none flex
                          
                         `}>

            <div className={`w-full h-full grow overflow-y-auto overflow-x-hidden`}>
                <button
                    onClick={() => dispatch(setopenTaskManager({ shouldOpen: true }))}
                    style={{
                        color: COMMON_COLORS.White,
                        backgroundColor: AccentColors.CODE,
                        '--hover': AccentColors.Hover_Clr,
                        '--active': AccentColors.Active_Clr,
                        transition: `all ${Speed} ${CSS_EASING[Animation]}`
                    }}

                    className={`${AccentColors.HOVER} fixed z-100 rounded-full p-3.5 md:p-2 right-6 bottom-7  active:scale-96 `}>
                    <Plus strokeWidth={2.5} />
                </button>
            </div>

        </section >
    )
}

export default AllTasks

