import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();
    githubProvider.addScope('user:email')



const Login = () => {
    const [user, setUser] = useState(null);

    const handleSignIn = () => {

        // console.log("button was clicked")
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth).then(()=> {
            console.log("sign out successful")
            setUser(null)
        })
        .catch(() => {
            console.log('error')
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log(result.user)
            const loggedInUser= result.user
            if(!loggedInUser.displayName){
                if(loggedInUser.providerData){
                    const gitProvider = loggedInUser
                    .providerData.find(p => p.providerId ==="github.com");
                    if(gitProvider && gitProvider.displayName){
                        loggedInUser.displayName = gitProvider.displayName
                    }
                }

            }
            setUser(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
            <h1>Please Login</h1>
            {/* <button onClick={() => { handleSignIn() }} >Sign In with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user ? 
                 <button onClick={handleSignOut}>Sign Out</button>: 
                 <>
                <button onClick={() => { handleSignIn() }} >Sign In with Google</button>
                <button onClick={handleGithubSignIn}>Sign In with Github</button>
                 </>
            }
            {user && <div>
                <h1>{user?.displayName}</h1>
                <h4>Email: {user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>}

        </div>
    );
};

export default Login;