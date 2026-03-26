import { ArrowLeft, Trash2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { setOpenManageFolder } from "../../redux/features/NotesStrorage";
import { toast } from 'react-toastify'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Folders = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.wallpaper.theme)
  const isOpen = useSelector(store => store.Notes.openManageFolder) //it is used apply animation on this returning div
  const elem = useRef(null);

  useGSAP(() => {
    if (!elem.current) return;

    gsap.to(elem.current, {
      x: isOpen?'0%':'100%',
      duration : 0.5,
      ease : 'expo.out'
    })
  }, [isOpen])

  return (
    <div ref={elem} className={`absolute  all-folders transform-x-full ${theme !== 'dark' ? 'bg-(--bg-light-app-body)' : 'bg-(--bg-dark-app-body)'}`}>

      <div className={` nav ${theme !== 'dark' ? 'text-(--sec-dark-clr)' : 'text-(--primary-light-clr)'}`}>

        <button onClick={() => {
          dispatch(setOpenManageFolder({ open: false }));
        }} className='active:scale-95'>
          <ArrowLeft strokeWidth={2} />
        </button>
        <span>Folders</span>
        <button onClick={() => toast.info("This functionality will be available soon.")} className='active:scale-95'>
          <Trash2 strokeWidth={2} />
        </button>
      </div>

    </div>
  )
}

export default Folders