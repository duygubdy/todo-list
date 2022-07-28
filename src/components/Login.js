import React,{useState,useEffect} from "react";
import { getUserByEmail } from "../services/userService";
import { TextField } from '@mui/material';
import {Button} from '@mui/material';

export default function Login({currentUser,setCurrentUser}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login=()=>{
    getUserByEmail(email).then((data=>{
      let user={}
      data.forEach((doc)=>{
          user=doc.data()
          user.id=doc.id
      })
      // console.log(user);
      if(user.email!==email||user.password!==password){
        alert("email or password wrong")
      }
      setCurrentUser(user)
      localStorage.setItem("currentUser",JSON.stringify(user))  
  }))
  }
  
  return( 
  <div>
    <TextField 
        margin="dense"
        id="name"
        label="Email"
        type="text"
        onChange={(e)=>setEmail(e.target.value)}
        fullWidth
        variant="standard"
      ></TextField>
      <TextField 
        margin="dense"
        id="name"
        label="Password"
        type="text"
        onChange={(e)=>setPassword(e.target.value)}
        fullWidth
        variant="standard"
      ></TextField>
      <Button
      onClick={login}
      >Login</Button>
  </div>
  );
}