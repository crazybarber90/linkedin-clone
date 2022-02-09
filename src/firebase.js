// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfPdaQVUgdWPNkJDoZM_ewZfupy5XuNmE",
  authDomain: "linkedin-clone-yt-16330.firebaseapp.com",
  projectId: "linkedin-clone-yt-16330",
  storageBucket: "linkedin-clone-yt-16330.appspot.com",
  messagingSenderId: "987467407691",
  appId: "1:987467407691:web:e8f6af8b7dc797f67308ce",
};

// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
