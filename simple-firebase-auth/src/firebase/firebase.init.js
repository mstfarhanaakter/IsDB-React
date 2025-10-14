// do not send firebase config to the public

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbi8tZK5-bR_gcsjuZUtqu7UVAJo_c7nM",
  authDomain: "simple-firebase-auth-farhana.firebaseapp.com",
  projectId: "simple-firebase-auth-farhana",
  storageBucket: "simple-firebase-auth-farhana.firebasestorage.app",
  messagingSenderId: "321765108301",
  appId: "1:321765108301:web:c3a62d4a741de4796b4a04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);