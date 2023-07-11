import '../App.css';
import Output from './Output';

function Calculator() {
  return (
    <div className="App">
      <span className='output-input'>0</span>
      <div className='operation-wrapper'>
        <div className='other-button'>
          <span className='span-generic span-other'>AC</span>
          <span className='span-generic span-other'>+/-</span>
          <span className='span-generic span-other'>%</span>
          <span className='span-generic span-other'>7</span>
          <span className='span-generic span-other'>8</span>
          <span className='span-generic span-other'>9</span>
          <span className='span-generic span-other'>4</span>
          <span className='span-generic span-other'>5</span>
          <span className='span-generic span-other'>6</span>
          <span className='span-generic span-other'>1</span>
          <span className='span-generic span-other'>2</span>
          <span className='span-generic span-other'>3</span>
          <span className='span-generic span-other span-zero'>0</span>
          <span className='span-generic span-other'>.</span>
        </div>
        <Output />
      </div>
    </div>
  );
}

export default Calculator;
