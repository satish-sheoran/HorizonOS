import { useSelector } from 'react-redux'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FolderNav from './FolderNav';
import FolderContent from './FolderContent';
import {CSS_EASING} from '../../../constants/Settings'

const Folders = ({Theme,AccentColors,ThemeColors}) => {
  const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used apply animation on this returning div
      const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
  const elem = useRef(null);

  useGSAP(() => {
    if (!elem.current) return;

    gsap.to(elem.current, {
      x: isOpen ? '0%' : '100%',
      duration: 0.5,
      ease: Animation ?? 'expo.out'
    })
  }, [isOpen])

  return (
    <div ref={elem}
      style={{ backgroundColor: ThemeColors.bg }}
      className={`absolute gap-4 all-folders transform-x-full `}>

      <FolderNav Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors}/>
      <FolderContent Theme={Theme} AccentColors={AccentColors} ThemeColors={ThemeColors}/>

    </div>
  )
}

export default Folders