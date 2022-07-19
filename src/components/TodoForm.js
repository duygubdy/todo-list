import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import Todo from './Todo';

function TodoForm({editId,setEditId,inputText,setInputText,todos,setTodos,value1,value2,setValue1,setValue2}) {
  
const submitHandler=(e)=>{    
  e.preventDefault();

  if (editId) {
    const editTodo = todos.find((i) => i.id === editId);
    const updatedTodos = todos.map((t) => t.id === editTodo.id
        ? (t = {id: t.id , inputText,date1:value1,date2:value2,status:"notStarted" })
        : { id: t.id, text: t.inputText, date1:value1,date2:value2,status:"notStarted" }
    );
    setTodos(updatedTodos);
    setEditId(0);
    setInputText("");
    return;
  }
  if(inputText !==""){
    setTodos([...todos,{text:inputText,date1:value1,date2:value2,status:"notStarted",id:Math.random()*10000}])
    setInputText("");
    setValue1("");
    setValue2("");
  }
  
  // else{
  //   alert("Please add a todo")
  // }
};

  return (
    <div>
      <TextField 
        className='todo-inputText'
        name="text"  
        type="text"
        value={inputText}
        placeholder="Add new todo"
        onChange={e => setInputText(e.target.value)}
        id="filled-basic" label="Add a new 'to-do'!" variant="filled"
      ></TextField>

      <Button 
        className='todo-button'
        onClick={submitHandler}
        variant="contained" color="success"
      >{editId ? "Edit" : "Add"}</Button>

      <input 
        className='todo-inputDate'
        name="date1" 
        type="date" 
        value={value1}
        onChange={e =>setValue1(e.target.value) }
        
      />

      <input 
        className='todo-inputDate'
        name="date2" 
        type="date" 
        value={value2}
        onChange={e => setValue2(e.target.value)}
      />
    
    </div>
  )
}

export default TodoForm