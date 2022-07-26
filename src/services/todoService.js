import db from "../firebaseDb";

export const postoneTodo = (job) => {
  const newTodoItem = {
    title: job.title,
    date: job.date,
    status: job.status,
    user_id: job.user_id,
    reporter_id:job.reporter_id
  };

  db.collection("jobs")
    .add(newTodoItem)
    .then((doc) => {
      const responseTodo = newTodoItem;
      responseTodo.id = doc.id;
      return responseTodo;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllTodos = async() => {
  const data=  await db.collection("jobs").get();
  return data;
};

export const getTodosByUserId=async (userId)=>{
  return await db.collection("jobs").where("user_id","==",userId).get()
}
export const getTodosByReporterId=(reporterId)=>{
  return db.collection("jobs").where("reporter_id","==",reporterId).get()
}