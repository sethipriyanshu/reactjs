import './App.css';

function App() {
  const users = [
    {name: "priyanshu", age: 19},
    {name: "Seth", age: 20}
  ]
  return(
     <div className="App">
      {users.map((user, key) => {
        return <User name = {user.name} age={user.age}/>
      })}
     </div>
  );
}
const User = (props) => {
  return <div>{props.name}{props.age}</div>
}
export default App;
