import '../App.css';
import Output from './Output';
import calculate from '../logic/calculate';
import { useState } from 'react';
import Block from './SingleBlock';
import OtherSign from './OtherSign';
import OperationSign from './OperationSign';

function Calculator() {
  const [result, setResult] = useState('0')
  const [operationData, setOperationData] = useState({
    total: null,
    next: null,
    operation: null
  })

  const operateClick = (e) => {
    const calculatedData = calculate(operationData, e.target.textContent);

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
          {OtherSign.map((sign) => {
            if (sign == '0') {
              return (
                <Block classList={'span-generic span-other span-zero'} sign={sign} clickEvent={operateClick} key={sign}/>
              )
            } else {
              return (<Block classList={'span-generic span-other'} sign={sign} clickEvent={operateClick} key={sign}/>)
            }
          })}
        </div>
        <div className='operation-button'>
          {OperationSign.map((sign) => {    
            return (<Block classList={'span-generic orange-color'} sign={sign} clickEvent={operateClick} key={sign}/>)
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
