import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

const AllNotes = () => {
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const theme = useSelector((store) => store.wallpaper.theme)
    const taskAnimRef = useRef(null);
    const notesAnimRef = useRef(null);
    useGSAP(() => {
        if (!taskAnimRef.current || !notesAnimRef.current) return;

        gsap.to(taskAnimRef.current, {
            y: activeTab === 'Tasks' ? '0%' : '130%',
            duration: 0.5,
            ease: 'expo.out'
        });

        gsap.to(notesAnimRef.current, {
            y: activeTab==='Notes'?'0%':'130%',
            duration : 0.5,
            ease : 'expo.out'
        })


    }, [activeTab])

    return (
        <div className="relative grow">
            {/* {activeTab === 'Notes' ? */}
                <div ref={notesAnimRef} className="absolute inset-0 translate-y-0 grow border border-amber-400">Notes area</div>
                {/* : */}
                <button ref={taskAnimRef}
                    onClick={() => toast.info("This will be available shortly")}
                    className={`absolute inset-0 translate-y-[130%] select-none grow font-bold text-center flex items-center justify-center border border-amber-400 outline-none
                         ${theme !== 'dark' ? 'text-(--sec-dark-clr)' : 'text-(--sec-light-clr)'}
                         `}>This functionality will be <br />available soon 😴 !</button>
            {/* } */}
        </div>
    )
}

export default AllNotes