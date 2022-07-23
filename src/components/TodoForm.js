import React from 'react'
import { useEffect } from 'react'
import TodoList from './TodoList';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import Todo from './Todo';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';

function TodoForm({inputText,setInputText,todos,setTodos,value1,value2,setValue1,setValue2,
                   search,setSearch,filter,setFilter,status,setStatus}) {
                    
useEffect(() => {
console.log(filter);
}, [filter]);
                  
const submitHandler=(e)=>{    
  e.preventDefault();
  if(inputText !==""){
    setTodos([...todos,{text:inputText,date1:value1,date2:value2,status:"notStarted",id:Math.random()*10000}])
    setInputText("");
    setValue1("");
    setValue2("");
  }else{ alert("Please add a todo")   }};

  

  return (
    <div>
      <TextField 
        margin="dense"
        id="name"
        label="Search"
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        fullWidth
        variant="standard"
      ></TextField>
      <br></br>
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

<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

          <MenuItem
           value="all"
           name="todolist"
           onChange={(e) => setStatus(e.value)}
           checked={status === "all"}
           > All</MenuItem>
          <Select>
          <MenuItem
           value="Open"
           onChange={(e) => setStatus(e.value)}
           checked={status === "notStarted"}
           >Open</MenuItem>
          <MenuItem 
          value="in Process"
          onChange={(e) => setStatus(e.value)}
           checked={status === "notStarted"} >Process</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>

    
      </FormControl>
    
    </div>
  )
}

export default TodoForm