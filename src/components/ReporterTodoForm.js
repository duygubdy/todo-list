import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { postoneTodo,getTodosByReporterId } from "../services/todoService.js";
import {getAllUsers} from "../services/userService"

function ReporterTodoForm({
  searchUsers,
  setSearchUsers,
  title,
  setTitle,
  date,
  setDate,
  todos,
  setTodos,
  search,
  setSearch,
  currentUser
}) {
  const [open, setOpen] = React.useState(false);
  const [temp, setTemp] = useState([]);
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState("")
  const [reporterId, setReporterId] = useState("")

   useEffect(() => {
     console.log(searchUsers);
   }, [searchUsers]);

  useEffect(() => {
    getUsers()
    console.log(users);
  },[]);

  useEffect(() => {
    var a=JSON.parse(localStorage.getItem("currentUser"))
    
    if(a){
      setReporterId(a.id)
      getTodosReporter()
    }
  }, [reporterId])
  

  const handleClickOpen = () => {
    setOpen(true);
    getUsers()
    console.log(users);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const getUsers=()=>{
    getAllUsers().then((data)=>{
      let dat=[]
      data.forEach((doc)=>{
        dat.push({
          id:doc.id,
          email:doc.data().email,
          name:doc.data().name,
          surname:doc.data().surname,
          password:doc.data().password,
          isReporter:doc.data().isReporter
        })
      })
      setUsers(dat)
    })
  }

  const getTodosReporter=()=>{
    getTodosByReporterId(reporterId).then((data)=>{
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (title !== "") {
      const newTodoItem = {
        title: title,
        date: date,
        status: "notStarted",
        user_id: userId,
        reporter_id:currentUser.id
        
      };
      const item = postoneTodo(newTodoItem);
      setTodos([...todos, newTodoItem]);
      console.log(userId);
      setTitle("");
      setDate("");
      handleClose();
    } else {
      alert("Please add a todo");
    }
  };

  return (
    <div>
      <TextField
        className="reporter-search"
        name="searchUser"
        type="text"
        value={searchUsers}
        onChange={(e) => setSearchUsers(e.target.value)}
        id="filled-basic"
        label="Search"
        variant="filled"
      ></TextField>
      
      <Button
        className="reporter-add"
        onClick={handleClickOpen}
        variant="contained"
        color="success"
      >
        Add
      </Button>
      <Button style={{float:"right"}} onClick={()=>{
        localStorage.removeItem("currentUser")
        window.location.reload()
      }}> Sign Out</Button>

      {
        todos.map((todo)=>(
          <div>
            {todo.title} {todo.date}  {todo.status}
          </div>
        ))
      }

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
          <MenuItem value="all" name="todolist">
            {" "}
            Users
          </MenuItem>
          
          <Select onChange={(e)=>setUserId(e.target.value)}>
            {
              // eslint-disable-next-line array-callback-return
              users.map((user)=>(
                <MenuItem value={user.id}> {user.name} {user.surname} </MenuItem>
              ))
            }
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitHandler}>Go</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReporterTodoForm;