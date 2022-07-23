import React from 'react'
import { useState } from 'react'
import Todo from './Todo'


function TodoList({Status,status,setStatus,todos,setTodos,inputText,setInputText,editHandler,search,setSearch,filter,setFilter}) {

  return (
    <div className='todo-list'>
      <box> 
      <ul className='todo-list'>
            {todos.map((todo)=>(
                <Todo 
                  inputText={inputText}
                  setInputText={setInputText}
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id} 
                  text={todo.text}
                  date1={todo.date1}
                  editHandler={editHandler}
                  date2={todo.date2}
                  status={status}
                  Status={Status}
                  setStatus={setStatus}
                  todo={todo} 
                  id={todo.id}
                  search={search}
                  setSearch={setSearch}
                  filter={filter}
                  setFilter={setFilter}/>
            ))}
        </ul>
      </box> 
    </div>
  )
}

export default TodoList
