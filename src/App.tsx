import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


enum CalculationType {
    Add = "add",
    Subtract = "subtract",
    Multiply = "multiply",
    Divide = "divide"
}

function App() {
    const [currentSolution, setCurrentSolution] = useState<number | null>(null)

    const [displayNumber, setDisplayNumber] = useState("");

    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");

    const [calculationType, setCalculationType] = useState<CalculationType | null>(null);



    useEffect(() => {
        console.log("number change")
        if(firstNumber == "" && secondNumber == "" && currentSolution !== null) {
            setDisplayNumber("" + currentSolution);
        }
        else if(calculationType != null) {
            setDisplayNumber(secondNumber);
        }
        else {
            setDisplayNumber(firstNumber);
        }

    }, [firstNumber, secondNumber, currentSolution])

    function calculateSolution() {
        console.log("firstnumber: " + firstNumber);
        console.log("secondnumber: " + secondNumber);
        if(calculationType != null && secondNumber != "" && firstNumber != "") {
            switch(calculationType) {
                case CalculationType.Add:
                    setCurrentSolution(parseFloat(firstNumber) + parseFloat(secondNumber));
                    break;
                case CalculationType.Subtract:
                    setCurrentSolution(parseFloat(firstNumber) - parseFloat(secondNumber));
                    break;
                case CalculationType.Multiply:
                    setCurrentSolution(parseFloat(firstNumber) * parseFloat(secondNumber));
                    break;
                case CalculationType.Divide:
                    setCurrentSolution(parseFloat(firstNumber) / parseFloat(secondNumber));
                    break;
            }
            setFirstNumber("");
            setSecondNumber("");
            setCalculationType(null);
        }
        else {
            alert("no calculation")
        }
    }

    function enterCalculationType(type: CalculationType) {
        if(firstNumber === "") {
            setFirstNumber("" + currentSolution);
        }

        setCalculationType(type);
    }

    function enterNumber(addNumber: string) {
        if(calculationType === null) {
            setFirstNumber(firstNumber + addNumber);

        }
        else {
            setSecondNumber(secondNumber + addNumber);
        }
    }



    function reset() {
        setCurrentSolution(null);
        setFirstNumber("");
        setSecondNumber("");
        setCalculationType(null);
        setDisplayNumber("");
    }

    function deleteLastNumber() {
        if(calculationType === null) {
            setFirstNumber(firstNumber.slice(0, -1))
            setDisplayNumber(firstNumber.slice(0, -1));
        }
        else {
            setSecondNumber(secondNumber.slice(0, -1))
            setDisplayNumber(secondNumber.slice(0, -1));
        }
    }

    return (
        <main>
            <section>
                <h1>Calc</h1>
                <div className="theme-container">
                    <div>THEME</div>
                    <div>
                        <div>
                            1 2 3
                        </div>
                        <div>Switcher</div>
                    </div>
                </div>
            </section>
            <section className="solution">
                <div>{displayNumber}</div>
                <div>{calculationType}</div>
                
            </section>
            <section>
                <button onClick={() =>{enterNumber("7")}}>7</button>
                <button onClick={() =>{enterNumber("8")}}>8</button>
                <button onClick={() =>{enterNumber("9")}}>9</button>
                <button onClick={() =>{deleteLastNumber()}}>DEL</button>
                <br />
                <button onClick={() =>{enterNumber("4")}}>4</button>
                <button onClick={() =>{enterNumber("5")}}>5</button>
                <button onClick={() =>{enterNumber("6")}}>6</button>
                <button onClick={() =>{enterCalculationType(CalculationType.Add)}}>+</button>
                <br />
                <button onClick={() =>{enterNumber("1")}}>1</button>
                <button onClick={() =>{enterNumber("2")}}>2</button>
                <button onClick={() =>{enterNumber("3")}}>3</button>
                <button onClick={() =>{enterCalculationType(CalculationType.Subtract)}}>-</button>
                <br />
                <button onClick={() =>{enterNumber(".")}}>.</button>
                <button onClick={() =>{enterNumber("0")}}>0</button>
                <button onClick={() =>{enterCalculationType(CalculationType.Divide)}}>/</button>
                <button onClick={() =>{enterCalculationType(CalculationType.Multiply)}}>x</button>
                <br />
                <button onClick={reset}>RESET</button>
                <button onClick={calculateSolution}>=</button>
            </section>
        </main>
    )
}

export default App
