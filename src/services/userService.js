import db from "../firebaseDb"

export const getUserByEmail=(email)=> {
    return db
    .collection('Users')
    .where('email', '==', email).get()
}

export const getAllUsers=()=>{
    return db.collection('Users').get()
}