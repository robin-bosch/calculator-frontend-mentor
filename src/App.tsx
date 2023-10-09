import { useEffect, useState } from 'react'
import './styles/main.scss'
import Button from './Button'


enum OperandType {
    Add = "+",
    Subtract = "-",
    Multiply = "x",
    Divide = "/"
}

enum Themes {
    Blue = "blue",
    Violet = "violet",
    Light = "light"
}

function App() {
    const themeList = Object.values(Themes);
    const [theme, setTheme] = useState<Themes>(Themes.Blue);

    // Saved to show on the display and reuse it for another calculation
    const [currentSolution, setCurrentSolution] = useState<number | null>(null)

    const [displayNumber, setDisplayNumber] = useState("");

    // Numbers saved as string to convert it for the display and 
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [operand, setOperand] = useState<OperandType | null>(null);
    const [secondNumber, setSecondNumber] = useState<string>("");

    

    
    /**
     * Watch for changes in the with numbers and show the correct number on the display
     */
    useEffect(() => {
        if(firstNumber == "" && secondNumber == "" && currentSolution !== null) {
            setDisplayNumber(formatNumber("" + currentSolution));
        }
        else if(operand != null) {
            setDisplayNumber(formatNumber(secondNumber));
        }
        else {
            setDisplayNumber(formatNumber(firstNumber));
        }

    }, [firstNumber, secondNumber, currentSolution])


    /**
     * Converts the given input number as string into a displayable number.
     * @param input - number as string
     * @returns 
     */
    function formatNumber(input: string): string {      
        const parts = input.split('.');
        const integerPart = parts[0];
        const decimalPart = parts[1] || '';

        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      
        return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
    }

    /**
     * Calculates the solution for the current set of numbers.
     * 
     * Does not calculate anything if something is missing.
     * Also does a small reset for a new calculation.
     */
    function calculateSolution() {
        if(operand != null && secondNumber != "" && firstNumber != "") {
            switch(operand) {
                case OperandType.Add:
                    setCurrentSolution(parseFloat(firstNumber) + parseFloat(secondNumber));
                    break;
                case OperandType.Subtract:
                    setCurrentSolution(parseFloat(firstNumber) - parseFloat(secondNumber));
                    break;
                case OperandType.Multiply:
                    setCurrentSolution(parseFloat(firstNumber) * parseFloat(secondNumber));
                    break;
                case OperandType.Divide:
                    setCurrentSolution(parseFloat(firstNumber) / parseFloat(secondNumber));
                    break;
            }
            setFirstNumber("");
            setSecondNumber("");
            setOperand(null);
        }
    }

    /**
     * Adds a number to the correct storage (first number if there isn't an operand set yet).
     * 
     * @param addNumber - number as string for easier display
     */
    function enterNumber(addNumber: string) {
        if(operand === null) {
            setFirstNumber(firstNumber + addNumber);

        }
        else {
            setSecondNumber(secondNumber + addNumber);
        }
    }

    /**
     * Set the operand by the given operand
     * Sets the last solution as the first number if there isn't a number set yet
     * @param type 
     */
    function enterOperand(type: OperandType) {
        if(firstNumber === "" && currentSolution != null) {
            setFirstNumber("" + currentSolution);
        }

        setOperand(type);
    }

    /**
     * Hard reset of the calculator
     */
    function reset() {
        setCurrentSolution(null);
        setFirstNumber("");
        setOperand(null);
        setSecondNumber("");
        setDisplayNumber("");
    }

    /**
     * Delete the last number of the current number on the display
     */
    function deleteLastNumber() {
        if(operand === null) {
            setFirstNumber(firstNumber.slice(0, -1))
        }
        else {
            setSecondNumber(secondNumber.slice(0, -1))
        }
    }

    /**
     * Select the next theme. Adding more themes would need an extension of the switch statement
     */
    function nextTheme() {
        switch(themeList.indexOf(theme)) {
            case 1:
                setTheme(Themes.Violet);
                break;
            case 2:
                setTheme(Themes.Light);
                break;
            default:
                setTheme(Themes.Blue);
                break;
        }
    }

    /**
     * Calculates the CSS position for the switch depending on the current theme.
     * Makes sure the switch handle doesn't overflow to the left or right
     * @returns - string with the css margin to the left
     */
    function calculateSwitchPosition() {
        const currentIndex = themeList.indexOf(theme);

        if(currentIndex == 0) {
            return "0px";
        }
        else if(currentIndex+1 == themeList.length) {
            return "calc(100% - 20px)";
        }
        else {
            return `calc(${(currentIndex / (themeList.length - 1)) * 100}% - 10px)`;
        }
    }

    return (
        <main className={`main ${theme}-theme`}>

            <article className="calculator">
                <section className="header">
                    <h1>calc</h1>
                    <div className="theme-container">
                        <div>THEME</div>

                        <div className="theme-selection">
                            <div className="theme-switch-numbers">
                                {
                                    themeList.map((theme, index) => {
                                        return(
                                            <p key={`theme-${index+1}`}>{index+1}</p>
                                        );
                                    })
                                }
                            </div>
                            
                            <div className="theme-switch" onClick={nextTheme}>
                                <div className="theme-switch-handle"  style={{ marginLeft: calculateSwitchPosition() }}></div>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <section className="display">
                    <div className="display-operator">{operand}</div>
                    <div className="display-number">{displayNumber ? displayNumber : ""}</div>
                </section>
                <section className="keypad">
                    <Button value="7" className="number-button" onClick={() =>{enterNumber("7")}}/>
                    <Button value="8" className="number-button" onClick={() =>{enterNumber("8")}}/>
                    <Button value="9"  className="number-button"onClick={() =>{enterNumber("9")}}/>
                    <Button value="DEL" className="reset-button" onClick={() =>{deleteLastNumber()}}/>

                    <Button value="4" className="number-button" onClick={() =>{enterNumber("4")}}/>
                    <Button value="5" className="number-button" onClick={() =>{enterNumber("5")}}/>
                    <Button value="6" className="number-button" onClick={() =>{enterNumber("6")}}/>
                    <Button value="+" className="number-button" onClick={() =>{enterOperand(OperandType.Add)}}/>

                    <Button value="1" className="number-button" onClick={() =>{enterNumber("1")}}/>
                    <Button value="2" className="number-button" onClick={() =>{enterNumber("2")}}/>
                    <Button value="3" className="number-button" onClick={() =>{enterNumber("3")}}/>
                    <Button value="-" className="number-button" onClick={() =>{enterOperand(OperandType.Subtract)}}/>

                    <Button value="." className="number-button" onClick={() =>{enterNumber(".")}}/>
                    <Button value="0" className="number-button" onClick={() =>{enterNumber("0")}}/>
                    <Button value="/" className="number-button" onClick={() =>{enterOperand(OperandType.Divide)}}/>
                    <Button value="x" className="number-button" onClick={() =>{enterOperand(OperandType.Multiply)}}/>

                    <Button value="RESET" className="reset-button wide-button" onClick={reset}/>
                    <Button value="=" className="equals-button wide-button" onClick={calculateSolution}/>
                </section>
            </article>
            
        </main>
    )
}

export default App
