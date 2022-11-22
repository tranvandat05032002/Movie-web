// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2_Q9zkJJvZ2UQez5HOsCnk2C7EDtLfxY",
  authDomain: "movie-web-c4b48.firebaseapp.com",
  projectId: "movie-web-c4b48",
  storageBucket: "movie-web-c4b48.appspot.com",
  messagingSenderId: "577127569863",
  appId: "1:577127569863:web:b382063d065b60844821e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase auth
export const auth = getAuth(app);
// Init service
export const db = getFirestore(app);
