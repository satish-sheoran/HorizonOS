import { useSelector } from 'react-redux'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FolderNav from './FolderNav';
import FolderContent from './FolderContent';

const Folders = () => {
  const theme = useSelector((store) => store.wallpaper.theme)
  const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used apply animation on this returning div
  const elem = useRef(null);

  useGSAP(() => {
    if (!elem.current) return;

    gsap.to(elem.current, {
      x: isOpen ? '0%' : '100%',
      duration: 0.5,
      ease: 'expo.out'
    })
  }, [isOpen])

  return (
    <div ref={elem} className={`transition-colors duration-500 ease-out absolute gap-4 all-folders transform-x-full ${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

      <FolderNav />
      <FolderContent />

    </div>
  )
}

export default Folders