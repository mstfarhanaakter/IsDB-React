// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfdLA7UiwVEbOKpEx3gslZuNpnS94aEEg",
  authDomain: "email-password-auth-farhana.firebaseapp.com",
  projectId: "email-password-auth-farhana",
  storageBucket: "email-password-auth-farhana.firebasestorage.app",
  messagingSenderId: "58147812345",
  appId: "1:58147812345:web:192ae61352e1122f474328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);