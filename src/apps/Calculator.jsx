import { useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"
import { useEffect, useState } from "react";
import MobileCntrls from "../components/MobileCntrl";
import CalcButtons from "../components/Calculator/CalcButtons";
import CalcDisplay from "../components/Calculator/CalcDisplay";
import UseCalculator from "../hooks/useCalculator";

const Calculator = () => {
    const theme = useSelector((store) => store.wallpaper.theme)
    const currDevice = useSelector((store) => store.Device.currDevice);
    const data = useSelector((store) => store.windowApps.apps['calculator'].data);
    const [result, setResult] = useState(data ?? '0') //setting initally value from data of calculator app from its store


    // whenever data in store changes it executes to set the fresh value present in store
    useEffect(() => {
        setResult(data ?? '0')
    }, [data])

    const { inputRef, calcBtnClck } = UseCalculator(currDevice, result, setResult)


    return (
        <div className={`w-full h-full flex flex-col transition-colors duration-500 ease-out ${theme != 'dark' ?
                    'bg-(--sec-light-clr)'
                    : 'bg-(--bg-dark-app-body)'}`}>
            {/* header */}
            {currDevice === 'Desktop' ?
                <WindowControls id='calculator' />
                : <MobileCntrls id='calculator' result={result} />}


            {/* body  */}
            <div className={`calc-body`}>

                <CalcDisplay
                    inputRef={inputRef}
                    result={result}
                    calcBtnClck={calcBtnClck}
                    currDevice={currDevice}
                    theme={theme}
                />
                <div className={`calc-btns grow select-none`}>
                    <CalcButtons
                        theme={theme}
                        calcBtnClck={calcBtnClck}
                    />
                </div>
            </div>

        </div >
    )
}

const CalculatorWindow = WindowWrapper(Calculator, 'calculator');

export default CalculatorWindow;