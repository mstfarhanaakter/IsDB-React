


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3-OabgKxEvrOOOBot0CpHv-5tx6znBOE",
  authDomain: "dragon-news-farhana.firebaseapp.com",
  projectId: "dragon-news-farhana",
  storageBucket: "dragon-news-farhana.firebasestorage.app",
  messagingSenderId: "103378696462",
  appId: "1:103378696462:web:7b0bdc5becaf966dd9ff5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);




