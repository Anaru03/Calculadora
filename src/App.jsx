import { useState } from 'react'
import './App.css'


function App() {
  const [result, setResult] = useState("")
  const handleClick = e => setResult(result.concat(e.target.id))
  const clear = () => setResult("")
  const deleteEl = () => setResult(result.slice(0, -1))
  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={result} disabled/>
      <div className="buttons">
        <button id="1"  className='operator' onClick={handleClick}>1</button>
        <button id="2"  className='operator' onClick={handleClick}>2</button>
        <button id="3"  className='operator' onClick={handleClick}>3</button>
        <button id="4"  className='operator' onClick={handleClick}>4</button>
        <button id="5"  className='operator' onClick={handleClick}>5</button>
        <button id="6"  className='operator' onClick={handleClick}>6</button>
        <button id="7"  className='operator' onClick={handleClick}>7</button>
        <button id="8"  className='operator' onClick={handleClick}>8</button>
        <button id="9"  className='operator' onClick={handleClick}>9</button>
        <button id="0"  className='operator' onClick={handleClick}>0</button>
        <button id="+"  className='operator' onClick={handleClick}>+</button>
        <button id="-"  className='operator' onClick={handleClick}>-</button>
        <button id="*"  className='operator' onClick={handleClick}>*</button>
        <button id="/"  className='operator' onClick={handleClick}>/</button>
        <button id="."  className='operator' onClick={handleClick}>.</button>
        <button id="="  className='operator' onClick={calculate}>=</button>
        <button  className='operator' onClick={clear}>C</button>
        <button  className='operator' onClick={deleteEl}>DEL</button>
      </div>
    </div>      
  )
}

export default App
