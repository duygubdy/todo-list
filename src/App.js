import { Button } from "@mui/material";
import { useState } from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const[todos,setTodos]=useState([]);

  return (   
    <div className="App" >
      <h1>Todo List</h1>
      <TodoForm   todos={todos} setTodos={setTodos}/>
      <TodoList todos= {todos} setTodos={setTodos}/>
    </div>

  )}

export default App;
