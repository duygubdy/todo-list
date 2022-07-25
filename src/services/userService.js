import db from "../firebaseDb"

export const getUserByEmail=(email)=> {
    return db
    .collection('users')
    .where('email', '==', email).get()
}