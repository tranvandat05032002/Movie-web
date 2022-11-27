import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBkD3Mrrl2gL_IrMEU38aX0cFF1YPBjb-0",
  authDomain: "movie-data-8fed3.firebaseapp.com",
  projectId: "movie-data-8fed3",
  storageBucket: "movie-data-8fed3.appspot.com",
  messagingSenderId: "730219836372",
  appId: "1:730219836372:web:f361302e58099318b8dc41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init service
//firebase auth
export const auth = getAuth(app);
export const db = getFirestore(app);
