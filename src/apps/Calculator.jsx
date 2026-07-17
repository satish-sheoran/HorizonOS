import { useDispatch, useSelector } from "react-redux";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"
import { useEffect, useState } from "react";
import MobileCntrls from "../components/MobileCntrl";
import CalcButtons from "../components/Calculator/CalcButtons";
import CalcDisplay from "../components/Calculator/CalcDisplay";
import UseCalculator from "../hooks/UseCalculator";
import { useDebounce } from "../utils/UseDebounce";
import { updateCalculation } from "../redux/features/Calculator";

const Calculator = () => {

    const dispatch = useDispatch()

    //redux values
    const currDevice = useSelector((store) => store.Device.currDevice);
    const ThemeColors = useSelector((store) => store.wallpaper.ThemeColors.Calculator)
    const Theme = useSelector((store) => store.wallpaper.theme.Calculator)
    const AccentColors = useSelector((store) => store.wallpaper.AccentColors)
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const Calculation = useSelector(store => store.Calculator.Calculation) //getting data from calculator app from its store
    

    const [result, setResult] = useState(Calculation??'0') //setting initally value from data of calculator app from its store
    const debouncedResult = useDebounce(result, 500) //debouncing result to avoid too many updates to store
    const { inputRef, calcBtnClck } = UseCalculator(currDevice, result, setResult)

    useEffect(() => {
        if (Calculation !== undefined && Calculation !== null) setResult(Calculation) //updating result when data of calculator app from its store changes
    }, [])


    useEffect(() => {
        if (debouncedResult !== undefined && debouncedResult !== null) {
            dispatch(updateCalculation({ result: debouncedResult })) //updating store when debounced result changes
        }
    }, [debouncedResult, dispatch]) //updating store when debounced result changes

    return (
        <div
            style={{
                backgroundColor: ThemeColors.bg, 
            }}
            className={`w-full h-full flex flex-col`}>
            {/* header */}
            {currDevice === 'Desktop' || currDevice === 'Tablet' ?
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
