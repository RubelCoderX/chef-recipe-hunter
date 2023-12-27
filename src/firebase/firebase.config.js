// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk7IeiM7kuMe6iOCGi7rROlWYyH8keeuc",
  authDomain: "chef-recipe-hunter-22176.firebaseapp.com",
  projectId: "chef-recipe-hunter-22176",
  storageBucket: "chef-recipe-hunter-22176.appspot.com",
  messagingSenderId: "393883022235",
  appId: "1:393883022235:web:6f4669d13e0bb13b36273e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;