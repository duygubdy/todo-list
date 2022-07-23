import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCM9-KQRg515_BOmG8OCMfirwSR2WeHcJI",
    authDomain: "jobs-c8eab.firebaseapp.com",
    projectId: "jobs-c8eab",
    storageBucket: "jobs-c8eab.appspot.com",
    messagingSenderId: "1005611599375",
    appId: "1:1005611599375:web:0b2d269b17a72c6d07857a"
  };

  const app = initializeApp(firebaseConfig);

  const db=firebase.firestore();

  const auth= firebase.auth();

  const provider=new fire.auth.GoogleAuthProvider();

  export default db;
  export{auth,provider};