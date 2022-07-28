import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import ReporterTodoForm from "./components/ReporterTodoForm";
import Login from "./components/Login";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("notStarted");
  const [searchUsers, setSearchUsers] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [reporter, setReporter] = useState(true)

  // const Status = {
  //   notStarted: "To do",
  //   process: " in Process",
  //   done: "Done",
  // };
  const [status, setStatus] = useState("notStarted");

  useEffect(() => {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")))
      setReporter(currentUser.isReporter)
      // console.log(currentUser);
  }, []);

  if(!currentUser){
    return(<div className="App">
      <h1>Demo Project</h1>
      <Login
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
      ></Login>
    </div>)

  }else if(currentUser.isReporter){
    return (
      <div className="App">
        <h1>Demo Project</h1>
    <ReporterTodoForm
    searchUsers={searchUsers}
    setSearchUsers={setSearchUsers}
    date={date}
    setDate={setDate}
    title={title}
    currentUser={currentUser}
    setTitle={setTitle}
    todos={todos}
    setTodos={setTodos}
    // status={status}
    // setStatus={setStatus}
    search={search}
    setSearch={setSearch}/></div>)}
    else{
      // console.log(currentUser.id);
      return (
        <div className="App">
          <h1>Demo Project</h1>
      <TodoList 
        todos= {todos} setTodos={setTodos} 
        title={title} 
        currentUser={currentUser}
        inputText={inputText} setInputText={setInputText}
        status={status} setStatus={setStatus} 
        // Status={Status} 
        search={search} setSearch={setSearch}
        filterStatus={filter} setFilterStatus={setFilter}
       /> </div>)
  }
}

export default App;