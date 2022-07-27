import db from "../firebaseDb"

export const getUserByEmail=(email)=> {
    return db
    .collection('Users')
    .where('email', '==', email).get()
}

export const getAllUsers=()=>{
    return db.collection('Users').get()
}
export const getStatus=(status)=>{
    return db
    .collection('Jobs')
    .where('status', '==',status).get()
}