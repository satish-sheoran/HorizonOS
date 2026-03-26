import React from 'react'
import { useSelector } from 'react-redux'

const FolderContent = () => {

    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <div className={`border grow ${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>
            FolderContent
        </div>
    )
}

export default FolderContent