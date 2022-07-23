import React from 'react'
import { useEffect } from 'react';
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
import Button from "@mui/material/Button";


function ReporterTodoForm({searchUsers,setSearchUsers,name,setName,date,setDate}) {

    useEffect(() => {
        console.log(searchUsers);
        }, [searchUsers]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <SearchIcon/>

      <Button 
        className='reporter-add'
        onClick={handleClickOpen}
        variant="contained" color="success"
      >Add</Button>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="update todo"
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
          <TextField
            margin="dense"
            id="name"
            label="update todo"
            type="text"
            onChange={(e) => setEditText(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editHandler}>Update</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default ReporterTodoForm
