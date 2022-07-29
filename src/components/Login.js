
import React,{useState,useEffect} from "react";
import { getUserByEmail } from "../services/userService";
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import { Container } from "@mui/system";
import  "../styles/LoginStyle.scss";
import loginImage from "../img/loginImg.svg"



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
    <section className="loginn">
      <div className="login-main">
        <div className="login-contain">
           <div className="login-form">  
           <h2 className="form-title">welcome </h2>
      

        <form className="in-form" id="in-form">

          <div className="form-group">
    <TextField 
        name="email"
        margin="dense"
        id="email"
        label="Email"
        type="text"
        onChange={(e)=>setEmail(e.target.value)}
        fullWidth
        variant="standard"
      ></TextField> </div>

<div className="form-group">
      <TextField 
       name="password"
        margin="dense"
        id="password"
        label="Password"
        type="text"
        onChange={(e)=>setPassword(e.target.value)}
        fullWidth
        variant="standard"
      ></TextField> </div>

<div className="form-group form-button">
      <Button
      onClick={login}
      >Login</Button>
      </div>
</form>
</div> 
    <div className="signup-image">
    <figure>
      <img src={loginImage} alt="login picture" />
    </figure>

    </div>
      
      
      </div>
  </div>
  </section>
  );
}