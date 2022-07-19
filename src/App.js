import { Button } from "@mui/material";
import { useState } from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const[todos,setTodos]=useState([]);
  const [inputText, setInputText] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [editId, setEditId] = useState(0);
  const [filteredTodos,setFilteredTodos]=useState([]);

  const Status={
    notStarted:"notStarted",
    process:"process",
    done:"done"
  }
  const [status,setStatus]=useState(Status.notStarted);

  
  const filterHandler=()=>{
    switch(status){
      case "open":
        setFilteredTodos(todos.filter(todo=>Status.notStarted))
        break;
      case "process":
        setFilteredTodos(todos.filter(todo=>Status.process))
        break;
      case "done":
        setFilteredTodos(todos.filter(todo=>Status.done))
        break;
      default:
        setFilteredTodos(todos)
  }
  }

  const editHandler =(id)=>{
    const editTodo=todos.find(el=>el.id===id);
    setInputText(editTodo.text)
    setEditId(id)
  };

  return (   
    <div className="App" >
      <h1>Todo List</h1>

      <TodoForm   todos={todos} setTodos={setTodos}
       inputText={inputText} setInputText={setInputText}
       value1={value1} setValue1={setValue1}
       value2={value2} setValue2={setValue2}
       editId={editId} setEditId={setEditId}
       editHandler={editHandler}
       filterHandler={filterHandler}
       />

      <TodoList todos= {todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}
      editHandler={editHandler} status={status} setStatus={setStatus} Status={Status}
      />
    </div>
  )}

export default App;
