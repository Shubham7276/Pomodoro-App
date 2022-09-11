 
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBt2tvYXrZ2b2syXMvvsH30oapGLzZYO6w",
  authDomain: "pomodoro-app-7004c.firebaseapp.com",
  projectId: "pomodoro-app-7004c",
  storageBucket: "pomodoro-app-7004c.appspot.com",
  messagingSenderId: "752286320594",
  appId: "1:752286320594:web:a92f2182c83e7feff2ea0b",
  measurementId: "G-SH63BSR6JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        const username = result.user.displayName;
        const Email = result.user.email;

        localStorage.setItem("username", username)
        localStorage.setItem("Email", Email)
        window.location.reload();

     })
    .catch((error)=>{
        console.log(error)
    })
}