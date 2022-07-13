import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import Todo from './Todo';

function TodoForm({inputText,setInputText,todos,setTodos}) {
  
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

 
const submitHandler=(e)=>{    
  e.preventDefault();
  if(inputText !==""){
    setTodos([...todos,{text:inputText,date1:value1,date2:value2,status:"notStarted",id:Math.random()*10000}])
    setInputText("");
    setValue1("");
    setValue2("");
  }
  
  else{
    alert("Please add a todo")
  }
  
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
      >Add</Button>

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
