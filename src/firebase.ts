import firebase from "firebase/app"
import "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5RzntNThJh-2QFiDoAuMdfPGZ918sAu0",
  authDomain: "todo-b1454.firebaseapp.com",
  databaseURL: "https://todo-b1454.firebaseio.com",
  projectId: "todo-b1454",
  storageBucket: "todo-b1454.appspot.com",
  messagingSenderId: "612877140035",
  appId: "1:612877140035:web:8bc0329eaa51c636a414f6"
})

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
