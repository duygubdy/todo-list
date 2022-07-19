import React from 'react'
import ReactDOM from "react-dom/client";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TodoForm from './TodoForm';


function Todo({Status,status,setStatus,text,todo,todos,setTodos,date1,date2,editHandler}) {
 

  const removeHandler=()=>{
    setTodos(todos.filter(el=>el.id !==todo.id))
  }
  
  return (
    <div className='to-do'>
      <li className='todoItems'>{text + ' ' + date1 + ' ' + date2} </li>
      
      <PlayArrowIcon
        color="success"
        className='start-button'
        name='start'
        onClick={()=>setStatus(Status.process)}
        />
      
      <CheckCircleOutlineRoundedIcon
        className='done-button'
        name='done'
        onClick={()=>setStatus(Status.done)}
        />

      <DeleteOutlineRoundedIcon onClick={removeHandler}/>

      <EditIcon
      className='editIcon'
      onClick={() => editHandler(todo.id)}
     />

    </div>
    
  );
  }
export default Todo
