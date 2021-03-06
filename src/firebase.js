import firebase from "firebase";
//import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0NatL0W2LerbSGXjDIjRvYjNEOCB9AiE",
  authDomain: "burger-app-40b32.firebaseapp.com",
  databaseURL: "https://burger-app-40b32-default-rtdb.firebaseio.com",
  projectId: "burger-app-40b32",
  storageBucket: "burger-app-40b32.appspot.com",
  messagingSenderId: "657804777020",
  appId: "1:657804777020:web:851b7da2ac70ed89659539",
  measurementId: "G-3ZMFET4G1D"
});
// Initialize Firebase
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
