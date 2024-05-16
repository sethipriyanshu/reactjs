import './App.css';
import { useState } from 'react';

function App() {
  var [inputvalue , setinputvalue] = useState(0);

  const increase = () =>{
    setinputvalue(inputvalue + 1);
  }
  const decrease = () =>{
    setinputvalue(inputvalue - 1);
  }
  const setZero = () =>{
    setinputvalue(0);
  }

  return(
     <div className="App">
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={setZero}>Set To Zero</button>
    {inputvalue}
     </div>
  );
}

export default App;

