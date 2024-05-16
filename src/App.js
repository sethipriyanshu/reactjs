import './App.css';
import { useState } from 'react';

function App() {
  var [inputvalue , setinputvalue] = useState("");
  const handleInputChange = (event) =>{
    setinputvalue(event.target.value);
  }
  return(
     <div className="App">
    <input type='text' onChange={handleInputChange}/>
    {inputvalue}
     </div>
  );
}

export default App;

