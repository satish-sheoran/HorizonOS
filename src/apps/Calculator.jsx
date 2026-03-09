import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper"

const Calculator = () => {
    return (
        <>
            <div className='w-full'>
                <div className='window-header'>
                    <WindowControls id='calculator' />
                </div>
            </div>
        </>
    )
}

const CalculatorWindow = WindowWrapper(Calculator, 'calculator');

export default CalculatorWindow;