import React from 'react'
import ReactDOM from "react-dom/client";
import { useState } from 'react';

function Todo({text,todo,todos,setTodos,date1,date2}) {
  
  const Status={
    notStarted:"notStarted",
    process:"process",
    done:"done"
  }
  const [status,setStatus]=useState(Status.notStarted)

  const removeHandler=()=>{
    setTodos(todos.filter(el=>el.id !==todo.id))
  }

  
  function statusHandler(){
    if(Status.notStarted){
      setStatus(Status.process)
    }
    if(Status.process){
      setStatus(Status.done)
    }
  }

  return (
    <div className='to-do'>
      <li className='todoItems'>{text + ' ' + date1 + ' ' + date2  +status } </li>
      
      <button
        className='start-button'
        name='start'
        onClick={statusHandler}
        >start</button>
      
      <button 
        className='done-button'
        name='done'
        onClick={statusHandler}
        >done</button>

      <button onClick={removeHandler}>delete</button>
      
    </div>
    
  );
}

export default Todo
