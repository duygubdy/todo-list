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

function Todo({text,todo,todos,setTodos,date,id,inputText,setInputText,search,setSearch,filter,setFilter,searchText}) {
  const [open, setOpen] = React.useState(false);
  const [editText, setEditText] = useState("");
  

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

  

  return (
    <div className="to-do">
      <li className="todoItems">{text + " " + date + " " +status} </li>

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
    </div>
  );
}

export default Todo;