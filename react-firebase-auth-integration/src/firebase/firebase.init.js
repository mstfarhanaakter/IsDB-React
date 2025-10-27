
//Do not share this to other 



// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChQ8EQdpbrxmaEcRkdgJIb2nqzmGA9mTM",
  authDomain: "react-auth-integration-f.firebaseapp.com",
  projectId: "react-auth-integration-f",
  storageBucket: "react-auth-integration-f.firebasestorage.app",
  messagingSenderId: "14780558755",
  appId: "1:14780558755:web:e56270a8f4a68894f73e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);