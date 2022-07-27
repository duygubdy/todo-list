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
import {getAllUsers,getUserById} from "../services/userService"


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  const [display, setDisplay] = useState([])

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
  
  useEffect(() => {
    if(todos&&users){
      displayData()
    }
  }, [display])
  

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

  const displayData=()=>{
    let data=[]
    todos.map((todo)=>{
      users.map((user)=>{
        if(todo.user_id===user.id){
          data.push({
            title:todo.title,
            date:todo.date,
            status:todo.status,
            name:user.name
          })
        }
      })
    })

    setDisplay(data)
    console.log(display);
  }

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


  <div> <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Jobs</TableCell>
        <TableCell align="right">Date</TableCell>
        <TableCell align="right">Status</TableCell>
        <TableCell align="right">Asignee</TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>

    {display.map((dis)=>(
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {dis.title}
          </TableCell>
          <TableCell align="right">{dis.date}</TableCell>
          <TableCell align="right">{dis.status}</TableCell>
          <TableCell align="right">{dis.name}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    {/* {dis.title} {dis.date} {dis.status} {dis.name}  */}
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