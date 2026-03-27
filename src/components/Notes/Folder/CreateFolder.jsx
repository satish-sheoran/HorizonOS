import { toast } from "react-toastify";
import { Plus } from 'lucide-react'
import { useSelector } from 'react-redux'

const CreateFolder = () => {
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <button
            onClick={() => toast.info("This feature is coming soon !")}
            className={`create-folder
                 ${theme !== 'dark' ?
                    'bg-(--bg-light-window-header) text-(--primary-dark-clr) hover:bg-(--primary-light-clr) active:bg-(--primary-light-clr)'
                    : 'bg-(--primary-dark-clr) text-(--primary-light-clr) hover:bg-(--sec-light-clr) active:bg-(--sec-light-clr)'
                }
                `}>
            <p className='plus-icon-div bg-amber-400 rounded-full p-1 flex items-center justify-center text-(--primary-light-clr)'>
                <Plus strokeWidth={3.5} size={14} />
            </p>
            <span className='select-none text-sm'>New Folder</span>
        </button>
    )
}

export default CreateFolder