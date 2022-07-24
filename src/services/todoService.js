import { useState } from "react"
import  db  from "../firebaseDb"

 const postoneTodo=(job)=>{
    const newTodoItem={
        title:job.title,
        date:job.date,
        status:job.status,
        user_id:job.user_id
    }

    db
    .collection('jobs')
    .add(newTodoItem)
    .then((doc)=>{
        const responseTodo=newTodoItem;
        responseTodo.id=doc.id
        return responseTodo
    })
    .catch((err)=>{
        console.log(err);
    })
}

const getAllTodos = () => {

	db
		.collection('jobs')
		.get()
        
		.then((data) => {
            let todos=[]
			data.forEach((doc) => {
				todos.push({
                    todoId: doc.id,
                    title: doc.data().title,
					body: doc.data().body,
					createdAt: doc.data().createdAt,
				});
			});
            
			return todos;
		})
    }
export {postoneTodo,getAllTodos}