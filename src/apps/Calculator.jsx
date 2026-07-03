import { useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"
import { useEffect, useState } from "react";
import MobileCntrls from "../components/MobileCntrl";
import CalcButtons from "../components/Calculator/CalcButtons";
import CalcDisplay from "../components/Calculator/CalcDisplay";
import UseCalculator from "../hooks/UseCalculator";
import { CSS_EASING } from "../constants/Settings";

const Calculator = () => {
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Calculator)
    const Theme = useSelector((store) => store.wallpaper.theme.Calculator)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const currDevice = useSelector((store) => store.Device.currDevice);
    const data = useSelector((store) => store.windowApps.apps['calculator'].data);
    const {Speed } = useSelector(store => store.wallpaper.AnimationTypeNSpeed) //animation speed
    const {Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const [result, setResult] = useState(data ?? '0') //setting initally value from data of calculator app from its store


    // whenever data in store changes it executes to set the fresh value present in store
    useEffect(() => {
        setResult(data ?? '0')
    }, [data])

    const { inputRef, calcBtnClck } = UseCalculator(currDevice, result, setResult)


    return (
        <div 
        style={{backgroundColor : ThemeColors.bg , transitionProperty : 'color, background-color, border-color',
transitionDuration : Speed,
transitionTimingFunction : CSS_EASING[Animation]}}
        className={`w-full h-full flex flex-col`}>
            {/* header */}
            {currDevice === 'Desktop' ?
                <WindowControls id='calculator' Theme={Theme} ThemeColors={ThemeColors} />
                : <MobileCntrls id='calculator' Theme={Theme} ThemeColors={ThemeColors} result={result} />}


            {/* body  */}
            <div className={`calc-body`}>

                <CalcDisplay
                    inputRef={inputRef}
                    result={result}
                    calcBtnClck={calcBtnClck}
                    currDevice={currDevice}
                    ThemeColors={ThemeColors}
                    AccentColors={AccentColors}
                    Theme={Theme}
                />
                <div className={`calc-btns grow select-none`}>
                    <CalcButtons
                        ThemeColors={ThemeColors}
                        AccentColors={AccentColors}
                        calcBtnClck={calcBtnClck}
                        Device={currDevice}
                        Theme={Theme}
                    />
                </div>
            </div>

        </div >
    )
}

const CalculatorWindow = WindowWrapper(Calculator, 'calculator');

export default CalculatorWindow;
