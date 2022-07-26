import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TodoForm from "./TodoForm";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { postoneTodo, getAllTodos } from "../services/todoService.js";
import db from "../firebaseDb";
import TodoList from "./TodoList";

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
}) {
  const [open, setOpen] = React.useState(false);
  const [temp, setTemp] = useState([]);

   useEffect(() => {
     console.log(searchUsers);
   }, [searchUsers]);

  useEffect(() => {
    getTodos()
    setTodos([1,2,3])
    console.log(todos);
  },[]);

  const handleClickOpen = () => {
    setOpen(true);
    getTodos()
    
  };

  const getTodos = () => {
    getAllTodos()
    .then((data) => {
      var dat = [];
      data.forEach((doc) => {
        dat.push({
          id: doc.id,
          title: doc.data().title,
          status: doc.data().status,
          date: doc.data().date,
        });
      });
      console.log(todos);
      setTodos(dat);
      console.log(setTodos(dat));
    })

    
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title !== "") {
      const newTodoItem = {
        title: title,
        date: date,
        status: "notStarted",
        user_id: localStorage.getItem("user_id"),
      };
      const item = postoneTodo(newTodoItem);
      setTodos([...todos, newTodoItem]);

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
      
{/* <div>
DASDASdas
        {todos.map((todo,key) => {
          <div>
            
            {todo.title} 
          </div>;
        })}
      </div> */}
      
      <Button
        className="reporter-add"
        onClick={handleClickOpen}
        variant="contained"
        color="success"
      >
        Add
      </Button>

      

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
            All
          </MenuItem>
          <Select>
            <MenuItem value="Users">Open</MenuItem>
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