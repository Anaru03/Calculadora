"use client";
import KeyButton from '@/components/KeyButton';

const Keyboard = () => {
    const handleButtonClick = (value: string) => {
        console.log(`Botón de número presionado: ${value}`);
    }

    const handleOperationClick = (value: string) => {
        console.log(`Botón de operación presionado: ${value}`);
    }

    const handleEqualsClick = () => {
        console.log("Botón de igual presionado");
    }

    return (
        <div className="calculator-keyboard">
            <div className="calculator-keyboard_container_numbers">
                <KeyButton value="7" onClick={() => handleButtonClick("7")} />
                <KeyButton value="8" onClick={() => handleButtonClick("8")} />
                <KeyButton value="9" onClick={() => handleButtonClick("9")} />
                <KeyButton value="4" onClick={() => handleButtonClick("4")} />
                <KeyButton value="5" onClick={() => handleButtonClick("5")} />
                <KeyButton value="6" onClick={() => handleButtonClick("6")} />
                <KeyButton value="1" onClick={() => handleButtonClick("1")} />
                <KeyButton value="2" onClick={() => handleButtonClick("2")} />
                <KeyButton value="3" onClick={() => handleButtonClick("3")} />
                <KeyButton value="0" onClick={() => handleButtonClick("0")} />
                <KeyButton value="." onClick={() => handleButtonClick(".")} />
            </div>
            <div className="calculator-keyboard_container_operators">
                <KeyButton value="÷" onClick={() => handleOperationClick("÷")} />
                <KeyButton value="×" onClick={() => handleOperationClick("×")} />
                <KeyButton value="-" onClick={() => handleOperationClick("-")} />
                <KeyButton value="+" onClick={() => handleOperationClick("+")} />
                <KeyButton value="=" onClick={() => handleEqualsClick()} />
            </div>
        </div>
    );
}

export default Keyboard;
