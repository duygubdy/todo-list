import React from "react";
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

function Reporter({
  title,
  setTitle,
  date,
  setDate,
  status,
  setStatus,
  editHandler,
  id,
  search,
  setSearch,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const editHandler = (e) => {
    e.preventDefault();
    todos.map((t) => {
      if (t.id === id) t.title = editText;
    });

    setOpen(false);
    setTodos(todos);
    setInputText();
  };

  return (
    <div>
      <li className="todoItems">{title + " " + date + " " + status} </li>

      <DeleteOutlineRoundedIcon onClick={removeHandler} />
      <EditIcon className="editIcon" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Todo</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="update todo"
            type="email"
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

export default Reporter;