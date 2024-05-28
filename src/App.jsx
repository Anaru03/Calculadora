import React, { useState } from 'react';
import CalculatorButton from '@components/CalculatorButton'; 

function App() {
  const [result, setResult] = useState("");

  const handleClick = e => setResult(result.concat(e.target.id));
  const clear = () => setResult("");
  const deleteEl = () => setResult(result.slice(0, -1));
  
  const calculate = () => {
    try {
      const expression = result;
      const regex = /[0-9+/*-.]+/g;
      const validExpression = expression.match(regex);
      
      if (!validExpression || validExpression.join('') !== expression) {
        setResult('Error');
        return;
      }

      const resultValue = eval(expression);
      setResult(resultValue.toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={result} disabled/>
      <div className="buttons">
        <CalculatorButton id="AC" className="operator" onClick={clear}>AC</CalculatorButton>
        <CalculatorButton id="DE" className="operator" onClick={deleteEl}>DE</CalculatorButton>
        <CalculatorButton id="." className="operator" onClick={handleClick}>.</CalculatorButton>
        <CalculatorButton id="/" className="operator" onClick={handleClick}>/</CalculatorButton>
        <CalculatorButton id="7" className="number" onClick={handleClick}>7</CalculatorButton>
        <CalculatorButton id="8" className="number" onClick={handleClick}>8</CalculatorButton>
        <CalculatorButton id="9" className="number" onClick={handleClick}>9</CalculatorButton>
        <CalculatorButton id="*" className="operator" onClick={handleClick}>*</CalculatorButton>
        <CalculatorButton id="4" className="number" onClick={handleClick}>4</CalculatorButton>
        <CalculatorButton id="5" className="number" onClick={handleClick}>5</CalculatorButton>
        <CalculatorButton id="6" className="number" onClick={handleClick}>6</CalculatorButton>
        <CalculatorButton id="-" className="operator" onClick={handleClick}>-</CalculatorButton>
        <CalculatorButton id="1" className="number" onClick={handleClick}>1</CalculatorButton>
        <CalculatorButton id="2" className="number" onClick={handleClick}>2</CalculatorButton>
        <CalculatorButton id="3" className="number" onClick={handleClick}>3</CalculatorButton>
        <CalculatorButton id="+" className="operator" onClick={handleClick}>+</CalculatorButton>
        <CalculatorButton id="00" className="number" onClick={handleClick}>00</CalculatorButton>
        <CalculatorButton id="0" className="number" onClick={handleClick}>0</CalculatorButton>
        <CalculatorButton id="=" className="operator col-span-2" onClick={calculate}>=</CalculatorButton>
      </div>
    </div>
  );
}

export default App;
