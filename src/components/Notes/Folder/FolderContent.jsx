import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateFolder from './CreateFolder'
import FolderCategory from './FolderCategory'
import { setWidthOfFolderContent } from '../../../redux/features/NotesStrorage'


const FolderContent = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.wallpaper.theme)
    const { isOpen, fullScreen } = useSelector((store) => store.windowApps.apps['notes'])
    const isFolderManagerOpen = useSelector((store) => store.Notes.openManageFolder)


    // fn which will update the width of folder content in the store, it will be used in folder category component to decide if categories should be shown in one column or more based on the width of folder content
    const updateFolderContentWidth = (folderContent) => {
        if (!folderContent || !isOpen) return;

        const width = Math.round(folderContent.getBoundingClientRect().width);
        if (!Number.isFinite(width) || width <= 0) return; //if width is not a number or less than or equal to 0 then do not update the width in the store

        dispatch(setWidthOfFolderContent({ width }));
        console.log('FolderContent width', { fullScreen, width });
    }

    useEffect(() => {
        const folderContent = document.querySelector('.folder-content');
        if (!folderContent) return;

        const measure = () => updateFolderContentWidth(folderContent);

        // 1) requestAnimationFrame: schedule run in next paint cycle after DOM updates.
        //    Important because fullScreen toggle may change CSS/size but that may not be final
        //    until next frame.
        // 2) setTimeout(..., 250): a second measure after 250ms to catch any transitions/animations
        //    that change layout after the count is rendered. This prevents stale width in store.
        requestAnimationFrame(() => {
            measure();
            setTimeout(measure, 250);
        });

        // 3) window resize: track manual browser resize, so component width is kept current.
        window.addEventListener('resize', measure);

        // cleanup listener when component unmounts or dependencies change
        return () => window.removeEventListener('resize', measure);

    }, [isFolderManagerOpen, fullScreen, isOpen, dispatch]);


    return (
        <div className={`folder-content ${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

            {/* categories */}
            <FolderCategory />

            {/* create folder btn */}
            <CreateFolder />
        </div>
    )
}

export default FolderContent