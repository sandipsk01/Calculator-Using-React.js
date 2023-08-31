import React, {useState} from 'react';
import * as math from 'mathjs';   // mathjs library to parse and evaluate the input string as an expression
import '../styles/calculator.css';      // CSS file for styling

export default function Calculator() {
    const [input, setInput] = useState('');

    // Function to handle appending input value
    const handleInput = (value) => {
        setInput(input + value);
      };

    // Function to clear input
    function clear() {
        setInput('');
    }

    // Function to calculate percentage
    function percentage() {
        setInput(input / 100);
    }

    // Function to change sign
    function changeSign() {
        if(input > 0) {
            setInput(-input);
        } else {
            setInput(Math.abs(input));
        }
    }

    // Function to calculate the result
    const calculateResult = () => {
        try {
          const calculatedResult = math.evaluate(input);
          setInput(calculatedResult);
        } catch (error) {
          setInput('Error');
        }
      };

    
    return (
        <div className='wrapper'>
            <h1 className='result'>{input}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={percentage}>%</button>
            <button className='orange' onClick={() => handleInput('/')}>/</button>
            <button className='grey' onClick={() => handleInput('7')}>7</button>
            <button className='grey' onClick={() => handleInput('8')}>8</button>
            <button className='grey' onClick={() => handleInput('9')}>9</button>
            <button className='orange' onClick={() => handleInput('*')}>X</button>
            <button className='grey' onClick={() => handleInput('4')}>4</button>
            <button className='grey' onClick={() => handleInput('5')}>5</button>
            <button className='grey' onClick={() => handleInput('6')}>6</button>
            <button className='orange' onClick={() => handleInput('-')}>-</button>
            <button className='grey' onClick={() => handleInput('1')}>1</button>
            <button className='grey' onClick={() => handleInput('2')}>2</button>
            <button className='grey' onClick={() => handleInput('3')}>3</button>
            <button className='orange' onClick={() => handleInput('+')}>+</button>
            <button className='grey zero' onClick={() => handleInput('0')}>0</button>
            <button className='grey' onClick={() => handleInput('.')}>.</button>
            <button className='orange' onClick={calculateResult}>=</button>
        </div>
    )
}