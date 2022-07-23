import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TodoForm from "./TodoForm";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function Todo({text,todo,todos,setTodos,date1,date2,id,inputText,setInputText,search,setSearch,filter,setFilter}) {
  const [open, setOpen] = React.useState(false);
  const [editText, setEditText] = useState("");
  const [temp, setTemp] = useState(todos);

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  useEffect(() => {
    searchText();
  }, [search]);

 
  const handleClose = () => {
    setOpen(false);
  };

  const Status = {
    notStarted: "notStarted",
    process: "process",
    done: "done",
  };
  const [status, setStatus] = useState(Status.notStarted);

  const removeHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const editHandler = (e) => {
    e.preventDefault();
    todos.map((t) => {
      if (t.id === id) t.text = editText;
    });

    setOpen(false);
    setTodos(todos);
    setInputText();
  };

  const searchText = () => {
    
    if (search && search.trim().length > 0) {
      const text = search.toLowerCase();
      const searchTodos = todos.filter((t) => {
        return t.text.includes(text);
      });
      setTodos(searchTodos);
    } else {
      setTodos(temp);
    }
  };

  return (
    <div className="to-do">
      <li className="todoItems">{text + " " + date1 + " " + date2  +status} </li>

      <PlayArrowIcon
        color="success"
        className="start-button"
        name="start"
        onClick={() => setStatus(Status.process)}
      />

      <CheckCircleOutlineRoundedIcon
        className="done-button"
        name="done"
        onClick={() => setStatus(Status.done)}
      />

      <DeleteOutlineRoundedIcon onClick={removeHandler} />

      <EditIcon className="editIcon" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Todo</DialogTitle>
        <DialogContent>
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
  );
}

export default Todo;