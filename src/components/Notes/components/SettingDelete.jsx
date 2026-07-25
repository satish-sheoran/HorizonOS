import { Check, X } from 'lucide-react'
import React from 'react'
import { ACCENT_COLORS } from '../../../constants/style'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { deleteTasks, removeNotes, removeTask } from '../../../redux/features/NotesStrorage'

const SettingDelete = ({ Type, Theme, AccentColors, ThemeColors, deletionNType, setdeletionNType }) => {

    const dispatch = useDispatch()
    const Device = useSelector(store => store.Device.currDevice)
    const Tasks = useSelector(store => store?.Notes?.Tasks)
    const Notes = useSelector(store => store.Notes.Notes)

    return (
        <div className='w-full h-full flex justify-between gap-3'>
            <button onClick={(e) => {
                e.stopPropagation();
                Type === 'Notes' ?
                    setdeletionNType({ ...deletionNType, NotesDeleteopen: false })
                    :
                    setdeletionNType({ ...deletionNType, TasksDeleteopen: false })

            }} style={{
                borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').Hover_Clr,
                color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Red').CODE,

            }} className={`border-2 rounded-full ${Device === 'Mobile' ? 'p-0.5' : 'p-1'}`}><X size={18} strokeWidth={2} /></button>
            <button onClick={(e) => {
                e.stopPropagation();
                if (Type === 'Notes') {
                    if (Notes.length <= 0) {
                        toast.info('Already all Notes are deleted')
                        setdeletionNType({ ...deletionNType, NotesDeleteopen: false })
                        return;
                    }
                    dispatch(removeNotes({ NotesIds: 'Empty Trash' }))
                    toast.info('All Notes are deleted')
                    setdeletionNType({ ...deletionNType, NotesDeleteopen: false })
                    return;
                }

                if (Tasks.length <= 0) {
                    toast.info('Already all Tasks are deleted')
                    setdeletionNType({ ...deletionNType, TasksDeleteopen: false })
                    return;
                }
                dispatch(deleteTasks({ Id: 'Empty Trash' }))
                toast.info('All Tasks are deleted')
                setdeletionNType({ ...deletionNType, TasksDeleteopen: false })

            }} style={{
                borderColor: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE,
                color: ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Green').CODE,

            }} className={`border-2 rounded-full ${Device === 'Mobile' ? 'p-0.5' : 'p-1'}`}>
                <Check size={18} strokeWidth={2} />
            </button>
        </div>
    )
}

export default SettingDelete