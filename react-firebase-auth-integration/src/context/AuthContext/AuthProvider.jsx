 import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
 
 const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        // email: "farhan@gmail.com"
        createUser
    }
    // console.log(authInfo)
    return (
        <AuthContext value={authInfo}>  
            {children}
        </AuthContext>
    );
 };
 
 export default AuthProvider;