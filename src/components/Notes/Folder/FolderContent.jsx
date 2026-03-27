import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CreateFolder from './CreateFolder'

const FolderContent = () => {
    const theme = useSelector((store) => store.wallpaper.theme)

    useEffect(() => {
        const folderContent = document.querySelector('.folder-content');
        if (folderContent) {
            console.log(folderContent.clientWidth)
        }
    })

    return (
        <div className={` folder-content ${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>


            {/* create folder btn */}
          <CreateFolder />
        </div>
    )
}

export default FolderContent