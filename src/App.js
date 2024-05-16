import './App.css';
import { useState } from 'react';

function App() {
  const [todolist, setToDoList] = useState([]);
  const [newtask, setNewTask] = useState("");

  const changeInput = (event) =>{
    setNewTask(event.target.value);
  }

  const addItem = () =>{
    const newToDoList = [...todolist, newtask];
    setToDoList(newToDoList);
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={changeInput} />
        <button onClick={addItem}>Add Task</button>
      </div>
      <div className='list'>
        {todolist.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>
    </div>
  );
}
export default App;
