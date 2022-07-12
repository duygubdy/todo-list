import React from 'react'
import ReactDOM from "react-dom/client";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Todo({text,todo,todos,setTodos,date1,date2}) {
  
  const Status={
    notStarted:"notStarted",
    process:"process",
    done:"done"
  }
  const [status,setStatus]=useState(Status.notStarted)
  const [editable,setEditable]=useState(false)
  const removeHandler=()=>{
    setTodos(todos.filter(el=>el.id !==todo.id))
  }


  return (
    <div className='to-do'>
      <li className='todoItems'>{text + ' ' + date1 + ' ' + date2  +status } </li>
      
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

      <EditIcon/>
      
      
      
    </div>
    
  );
}

export default Todo
