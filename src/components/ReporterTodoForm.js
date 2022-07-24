import React from 'react'
import { useEffect,useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '@mui/material';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TodoForm from "./TodoForm";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  {postoneTodo}  from "../services/todoService.js";
import  db  from "../firebaseDb"


function ReporterTodoForm({searchUsers,setSearchUsers,title,setTitle,date,setDate,todos,setTodos,search,setSearch}) {
    const [open, setOpen] = React.useState(false);
    const [temp, setTemp] = useState(todos);

    useEffect(() => {
        console.log(searchUsers);
        }, [searchUsers]);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const getAllTodos = () => {
    db
      .collection('jobs')
      .get()
          
      .then((data) => {
              let todos=[]
        data.forEach((doc) => {
          todos.push({
                      todoId: doc.id,
                      title: doc.data().title,
            body: doc.data().body,
            createdAt: doc.data().createdAt,
          });
        });
        setTodos(todos)
      })
      }
  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler=(e)=>{    
    e.preventDefault();
    if(title !==""){
      const newTodoItem={
        title:title,date:date,status:"notStarted",user_id:localStorage.getItem("user_id")
      }
      const item=postoneTodo(newTodoItem)
      setTodos([...todos,newTodoItem])

      setTitle("");
      setDate("");
      handleClose()
    }else{ alert("Please add a todo")   }};


  return (
    <div>
      <TextField 
        className='reporter-search'
        name="searchUser"  
        type="text"
        value={searchUsers}
        onChange={e => setSearchUsers(e.target.value)}
        id="filled-basic" label="Search" variant="filled"
      ></TextField>
      

      <Button 
        className='reporter-add'
        onClick={handleClickOpen}
        variant="contained" color="success"
      >Add</Button>

      <div>
      {
      todos.map((todo)=>{
          <div>
            DASDASdas
        {todo.title} {todo.todoId}
          </div>
        })
        }
        </div>
      

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Job</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Add new job for assignee"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="date"
            label="last-date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            variant="standard"
          />
          <MenuItem
           value="all"
           name="todolist"
           > All</MenuItem>
          <Select>
          <MenuItem
           value="Users"
           >Open</MenuItem>
        </Select>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitHandler}>Go</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default ReporterTodoForm
