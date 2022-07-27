import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import TodoForm from "./TodoForm";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function Todo({title,todo,todos,setTodos,date,id,inputText,setInputText,search,setSearch,filter,setFilter,searchText}) {
  const [open, setOpen] = React.useState(false);
  const [editText, setEditText] = useState("");
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  // useEffect(() => {
  //   searchText();
  // }, [search]);

 
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
      

     

    
    </div>
  );
}

export default Todo;