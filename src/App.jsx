import OSLayout from "./layout/OSLayout"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from "gsap/Draggable";
import { Slide, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useAutoTheme } from "./utils/AutoSetTheme";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect, useState } from "react";
import {setDevice} from './redux/features/DeviceSet'
gsap.registerPlugin(Draggable, useGSAP)
gsap.registerPlugin(MotionPathPlugin)

const App = () => {

  const dispatch = useDispatch()

  const Device = useSelector(store => store.Device.currDevice)
 
  const theme = useSelector(store => store.wallpaper.theme.Settings)
  const ThemeColors = useSelector(store => store.wallpaper.ThemeColors.Settings)

  const useUpdateDevice = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])

    useEffect(() => {
      dispatch(setDevice({width : width}))
    }, [width])

  }
  useUpdateDevice();

  return (
    <>
      <OSLayout />
      {/* Toast msg like Feature Coming Soon ! */}
      <ToastContainer
        toastClassName="text-sm select-none md:w-fit"
        toastStyle={{
          width: Device === 'Desktop' ? "340px" : "80vw",
          margin: "0 auto",
          top: '10px',
          backgroundColor: ThemeColors.bg
        }}
        position="top-center"
        autoClose={2500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme={theme}
        transition={Slide} />


      {/* Auto set theme fn */}
      {useAutoTheme()}
    </>
  )
}

export default App
