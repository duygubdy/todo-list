import React from 'react'
import { useState,useEfect } from 'react'

function Todo({text,todo,todos,setTodos,date1,date2}) {

  const removeHandler=()=>{
    setTodos(todos.filter(el=>el.id !==todo.id))
}
  return (
    <div className='to-do'>
      <li className='todoItems'>{text + '                      ' + date1 + ' ' + date2  } </li>
      <button>start</button>
      <button>done</button>
      <button onClick={removeHandler}>delete</button>
    </div>
    
  );
}

export default Todo
