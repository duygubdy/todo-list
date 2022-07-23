import React from 'react'
import { useState } from 'react'
import Todo from './Todo'


function TodoList({Status,status,setStatus,todos,setTodos,title,setTitle,editHandler,search,setSearch,filter,setFilter}) {

  return (
    <div className='todo-list'>
      <box> 
      <ul className='todo-list'>
            {todos.map((todo)=>(
                <Todo 
                  title={title}
                  setTitle={setTitle}
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id} 
                  date={todo.date}
                  editHandler={editHandler}
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
