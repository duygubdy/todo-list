import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';


function TodoForm({todos,setTodos}) {
  const [inputText, setInputText] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
const inputHandler=(e)=>{    
  setInputText(e.target.value);
  // setInputText(e.target.value);
  setValue1(e.target.value)
  setValue2(e.target.value)
 
};
const submitHandler=(e)=>{    
  e.preventDefault();
  setTodos([...todos,{text:inputText,date1:value1,date2:value2,completed:false,id:Math.random()*10000}])
  
};
  return (
    <div>
      <input
        className='todo-inputText'
        name="text"  
        type="text"
        value={inputText}
        placeholder="Add new todo"
        onChange={e => setInputText(e.target.value)}
      />

      <button 
        className='todo-button'
        onClick={submitHandler}
      >Add</button>

      <input 
        className='todo-inputDate'
        name="date1" 
        type="date" 
        value={value1}
        onChange={e => setValue1(e.target.value)}
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
