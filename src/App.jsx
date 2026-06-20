import OSLayout from "./layout/OSLayout"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from "gsap/Draggable";
import { Slide, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useAutoTheme } from "./utils/AutoSetTheme";


gsap.registerPlugin(Draggable, useGSAP)
const App = () => {

  const isMdUp = window.matchMedia("(min-width: 768px)").matches;
  const theme = useSelector(store => store.wallpaper.theme.Settings)
  const ThemeColors = useSelector(store => store.wallpaper.ThemeColors.Settings)
  return (
    <>
      <OSLayout />
      {/* Toast msg like Feature Coming Soon ! */}
      <ToastContainer
        toastClassName="text-sm select-none md:w-fit"
        toastStyle={{
          width: isMdUp ? "340px" : "80vw",
          margin: "0 auto",
          top : '10px',
          backgroundColor : ThemeColors.bg
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
