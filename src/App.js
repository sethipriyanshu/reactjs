import './App.css';
import { useState } from 'react';

function App() {
  const [todolist, setToDoList] = useState([]);
  const [newtask, setNewTask] = useState("");

  const changeInput = (event) =>{
    setNewTask(event.target.value);
  }

  const addItem = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      isCompleted: false,
      taskname: newtask,
    };
    setToDoList([...todolist, task]);
  };
  

  const removeItem = (id) =>{
    setToDoList(todolist.filter((task) => task.id !== id));
  };
  
  const markCompleted = (id) => {
    setToDoList(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: true }; // Change completed to isCompleted
        } else {
          return task;
        }
      })
    );
  };
  

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={changeInput} />
        <button onClick={addItem}>Add Task</button>
      </div>
      <div className='list'>
        {todolist.map((task, index) => (
          <div key={index} style={{color: task.isCompleted ? "green": "black", fontSize: 24}}><button onClick={() => removeItem(task.id)} className='App-Button'>X</button><button onClick={() => markCompleted(task.id)}>Mark Completed</button>{task.taskname}</div>
        ))}
      </div>
    </div>
  );
}
export default App;
