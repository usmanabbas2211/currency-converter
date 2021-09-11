import './App.css';
import {useState} from 'react'
function App() {
  const [dollar,setDollar]=useState(0.00)
  const [pkr,setPkr]=useState(0.00)
  const dollar_price=168.19;
  function convertToPkr(e){
    setDollar(e.target.value)
    setPkr(e.target.value*dollar_price)
  }
  function convertToDollar(e){
    setPkr(e.target.value)
    setDollar(e.target.value/dollar_price);
  }
  return (
    <div className='main-div'>
      <h1>Currency Converter</h1>
      <div>
        <h5>Enter Dollar</h5>
        <input type="text" className='input-box' value={dollar} onChange={convertToPkr}/>
      </div>
      <div>
        <h5 style={{marginTop:'10px'}}>Enter Pkr</h5>
      <input type="text" className='input-box' value={pkr} onChange={convertToDollar}/>
      </div>
    </div>
  );
}

export default App;
