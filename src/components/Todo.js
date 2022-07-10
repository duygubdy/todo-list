import React from 'react'
import { useReducer } from "react";
import ReactDOM from "react-dom/client";

function Todo({text,todo,todos,setTodos,date1,date2}) {
  
  function changeStatus(status,action){
    if(action==="process"){
      
    }
  }


  const removeHandler=()=>{
    setTodos(todos.filter(el=>el.id !==todo.id))
  }
  const toggleDone = (id) => {
    setTodos(
     todos.map((todo) =>
        todo.id === id ? { ...todos, statu: todo.statu!="1" } : todo ));
        console.log("burdasınız ")
  }

  // function statusHandler(){
  //   if(status=="notStarted") {
  //     setStatus="process";
  //   }
  //   if(setStatus=="process"){
  //     setStatus="done"
  //   }
  // }

  return (
    <div className='to-do'>
      <li className='todoItems'>{text + ' ' + date1 + ' ' + date2  } </li>
      
      <button
        className='start-button'
        name='start'
        // onClick={statusHandler}
        >start</button>

      <button 
        className='done-button'
        name='done'
        onClick={toggleDone}
        >done</button>

      <button onClick={removeHandler}>delete</button>
      
    </div>
    
  );
}

export default Todo
