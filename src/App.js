import { Button } from "@mui/material";
import { useState } from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
 // const[inputText,setInputText]=useState("");
  // const [value1, setValue1] = useState(null);
  // const [value2, setValue2] = useState(null);
  const[todos,setTodos]=useState([]);

  return (   
    <div className="App" >
      <h1>Todo List</h1>
      <TodoForm   todos={todos} setTodos={setTodos}/>
      <TodoList todos= {todos} setTodos={setTodos}/>
    </div>

  )}

export default App;
