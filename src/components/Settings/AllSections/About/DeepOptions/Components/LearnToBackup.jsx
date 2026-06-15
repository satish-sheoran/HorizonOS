import { ExternalLink, Info } from 'lucide-react'
import React from 'react'
import { toast } from "react-toastify";

const LearnToBackup = ({ Device, Theme, fullScreen,ThemeColors,AccentColors }) => {
    return (
        <div className={`flex  items-center gap-3 rounded-2xl p-[2.5%] ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}
        `}>

            <div className={`text-(--color-accent)`}>
                <Info strokeWidth={2} size={24} />
            </div>
            <div className={`flex flex-col`}>
                <span className={`text-[0.68rem]  font-semibold ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--sec-light-clr)'}`}>It's recommended to back up important files before proceeding.</span>

                <div className='active:scale-97 cursor-pointer ease-out duration-500 flex gap-1 items-center text-(--color-accent)'>
                    <span
                    onClick={()=> toast.error('This link is currently unavailable')}
                    className={`active:scale-97 cursor-pointer ease-out duration-500 text-[0.63rem] text-(--color-accent) hover:text-(--color-light-accent) active:text-(--color-light-accent)`}>Learn how to back up your data </span>
                    <ExternalLink strokeWidth={2} size={14} /></div>
            </div>

        </div>
    )
}

export default LearnToBackup