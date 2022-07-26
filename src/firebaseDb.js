import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCM9-KQRg515_BOmG8OCMfirwSR2WeHcJI",
  authDomain: "jobs-c8eab.firebaseapp.com",
  databaseURL: "https://jobs-c8eab-default-rtdb.firebaseio.com",
  projectId: "jobs-c8eab",
  storageBucket: "jobs-c8eab.appspot.com",
  messagingSenderId: "1005611599375",
  appId: "1:1005611599375:web:0b2d269b17a72c6d07857a"
};


firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;