import React, { useState } from 'react'
import { Button } from '@mui/material'
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

function Registeration() {
    
    const[name,setName]=useState("")
    const[surname,setSurname]=useState("")
    const[password,setPassword]=useState("")
    const[username,setUsername]=useState("")
    const[position,setPosition]=useState("")

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

  return (
    <div>
      <input 
        className='todo-inputUsername'
        name="username" 
        type="text" 
        value={username}
        onChange={e =>setUsername(e.target.value) }
        
      />
      <input 
        className='todo-inputPassword'
        name="password" 
        type="password" 
        value={password}
        onChange={e =>setPassword(e.target.value) }
        
      />

    <Button 
        className='login-button'
        variant="contained" color="success"
      >Login</Button>

      <EditIcon className="editIcon" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Todo</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="surname"
            label="surname"
            type="text"
            onChange={(e) => setSurname(e.target.value)}
            fullWidth
            variant="standard"
          />
          
          <TextField
            margin="dense"
            id="position"
            label="position"
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            fullWidth
            variant="standard"
          />
          
          <TextField
            margin="dense"
            id="password"
            label="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button >Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Registeration
