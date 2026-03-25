import { useSelector } from "react-redux"
import { toast } from "react-toastify"

const AllNotes = () => {
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <>
            {activeTab === 'Notes' ?
                <div className="grow border border-amber-400">Notes area</div>
                :
                <div
                    onClick={() => toast.info("This will be available shortly")}
                    className={`select-none grow font-bold text-center flex items-center justify-center border border-amber-400
                         ${theme !== 'dark' ? 'text-(--sec-dark-clr)' : 'text-(--sec-light-clr)'}
                         `}>This functionality will be <br />available soon 😴 !</div>
            }
        </>
    )
}

export default AllNotes