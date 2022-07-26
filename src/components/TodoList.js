import React from 'react'
import { useState,useEffect } from 'react'
import Todo from './Todo'
import {getAllTodos,getTodosByUserId} from "../services/todoService"
import { Button, useScrollTrigger } from "@mui/material";


function TodoList({Status,status,setStatus,todos,setTodos,title,setTitle,editHandler,search,setSearch,filter,setFilter,currentUser}) {
  const [user, setUser] = useState("")

  useEffect(() => {
    var a=JSON.parse(localStorage.getItem("currentUser"))
    
    if(a){
      setUser(a.id)
      getTodosUserId()
    }
  }, [user])

  const getTodos = () => {
    getAllTodos()
    .then((data) => {
      let dat = [];
      data.forEach((doc) => {
        dat.push({
          id: doc.id,
          title: doc.data().title,
          status: doc.data().status,
          date: doc.data().date,
        });
      });
      setTodos(dat)
    })
  };

  const getTodosUserId=()=>{
    console.log(user);
    getTodosByUserId(user).then((data)=>{
      let jobs=[];
      data.forEach((doc)=>{
        jobs.push({
          id:doc.id,
          date:doc.data().date,
          status:doc.data().status,
          reporter_id:doc.data().reporter_id,
          title:doc.data().title,
          user_id:doc.data().user_id
        })
      })
      console.log(jobs);
      setTodos(jobs)
    })
  }

  return (
    <div className='todo-list'>
      <h3>My Todos</h3>
      <box> 
      <Button style={{float:"right"}} onClick={()=>{
        localStorage.removeItem("currentUser")
        window.location.reload()
      }}> Sign Out</Button>
      <ul className='todo-list'>
            {todos.map((todo)=>(
                <Todo 
                  title={todo.title}
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