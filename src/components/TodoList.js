import React from 'react'
import { useState, useEffect } from 'react'
import { getAllTodos, getTodosByUserId } from "../services/todoService"
import { Button, useScrollTrigger } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

function TodoList({ status,setStatus,Status,todos, setTodos, title, setTitle, editHandler, search, setSearch, filter, setFilter, currentUser, todo }) {
  const [user, setUser] = useState("")

  useEffect(() => {
    var a = JSON.parse(localStorage.getItem("currentUser"))

    if (a) {
      setUser(a.id)
      getTodosUserId()
    }
  }, [user])

  const getTodos = () => {
    getAllTodos()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            id: doc.id,
            title: doc.data().title,
            status: doc.data().status,
            date: doc.data().date,
          });
        });
        setTodos(dat)
      })
  };

  const getTodosUserId = () => {
    console.log(user);
    getTodosByUserId(user).then((data) => {
      let jobs = [];
      data.forEach((doc) => {
        jobs.push({
          id: doc.id,
          date: doc.data().date,
          status: doc.data().status,
          reporter_id: doc.data().reporter_id,
          title: doc.data().title,
          user_id: doc.data().user_id
        })
      })
      console.log(jobs);
      setTodos(jobs)
    })
  }

  return (
    <div className='todo-list'>
      <h3>My Todos</h3>
      <box>
        <Button style={{ float: "right" }} onClick={() => {
          localStorage.removeItem("currentUser")
          window.location.reload()
        }}> Sign Out</Button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Jobs</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {todos.map((todo) => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {todo.title}
                  </TableCell>
                  <TableCell align="right">{todo.date}</TableCell>
                  <TableCell align="right"> {todo.status}</TableCell>
                  <TableCell align="right">

                    <PlayArrowIcon
                      color="success"
                      className="start-button"
                      name="start"
                      onClick={() => setStatus(Status.process)   
                      }/>

                    <CheckCircleOutlineRoundedIcon
                      className="done-button"
                      name="done"
                      onClick={() => setStatus(Status.done)}
                    />
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>

          </Table>
        </TableContainer>

      </box>
    </div>
  )
}

export default TodoList