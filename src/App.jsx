import OSLayout from "./layout/OSLayout"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(Draggable, useGSAP)
const App = () => {

  return (
    <OSLayout />
  )
}

export default App
