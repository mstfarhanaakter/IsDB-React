import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    //get current user info 

    // onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log('inside observer:if ', currentUser)
    //     }
    //     else{
    //         console.log('inside observer:else', currentUser)
    //     }
    // })

    // useEffect 

    useEffect(() => {
        //set the observer on mount
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user in the auth state', currentUser)
            setUser(currentUser);
            setLoading(false);
        })

        //clear the observer on unmount

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        // email: "farhan@gmail.com"
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInwithGoogle,
    }
    // console.log(authInfo)
    return (
        // <AuthContext value={authInfo}>
        //     {children}
        // </AuthContext>


    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
);

};

export default AuthProvider;