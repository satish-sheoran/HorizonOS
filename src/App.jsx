import OSLayout from "./layout/OSLayout"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from "gsap/Draggable";
import { Slide, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";


gsap.registerPlugin(Draggable, useGSAP)
const App = () => {

  const theme = useSelector(store => store.wallpaper.theme)
  return (
    <>
      <OSLayout />

      {/* Toast msg like Feature Coming Soon ! */}
      <ToastContainer
        toastClassName="text-sm select-none"
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
    </>
  )
}

export default App
