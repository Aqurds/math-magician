import '../App.css';
import Output from './Output';
import calculate from '../logic/calculate';
import operate from '../logic/operate';
import { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('0')
  const [operationData, setOperationData] = useState({
    total: null,
    next: null,
    operation: null
  })

  const operateClick = (e) => {
    const calculatedData = calculate(operationData, e.target.textContent);
    // console.log(calculatedData)

    if (calculatedData.next !== null) {
      setOperationData(calculatedData);
      setResult(calculatedData.next);
    } else if (calculatedData.total !== null) {
      setOperationData(calculatedData);
      setResult(calculatedData.total);
    } else {
      setOperationData(calculatedData);
      setResult('0');
    }
  }

  return (
    <div className="App">
      <Output result={result} />
      <div className='operation-wrapper'>
        <div className='other-button'>
          <span className='span-generic span-other' onClick={operateClick}>AC</span>
          <span className='span-generic span-other' onClick={operateClick}>+/-</span>
          <span className='span-generic span-other'>%</span>
          <span className='span-generic span-other' onClick={operateClick}>7</span>
          <span className='span-generic span-other' onClick={operateClick}>8</span>
          <span className='span-generic span-other' onClick={operateClick}>9</span>
          <span className='span-generic span-other' onClick={operateClick}>4</span>
          <span className='span-generic span-other' onClick={operateClick}>5</span>
          <span className='span-generic span-other' onClick={operateClick}>6</span>
          <span className='span-generic span-other' onClick={operateClick}>1</span>
          <span className='span-generic span-other' onClick={operateClick}>2</span>
          <span className='span-generic span-other' onClick={operateClick}>3</span>
          <span className='span-generic span-other span-zero' onClick={operateClick}>0</span>
          <span className='span-generic span-other' onClick={operateClick}>.</span>
        </div>
        <div className='operation-button'>
          <span className='span-generic orange-color' onClick={operateClick}>&#247;</span>
          <span className='span-generic orange-color' onClick={operateClick}>x</span>
          <span className='span-generic orange-color' onClick={operateClick}>-</span>
          <span className='span-generic orange-color' onClick={operateClick}>+</span>
          <span className='span-generic orange-color' onClick={operateClick}>=</span>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
