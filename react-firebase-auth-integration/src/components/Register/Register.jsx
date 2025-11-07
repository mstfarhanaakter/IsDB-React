import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../../context/AuthContext/AuthContext';
// import { AuthContext } from '../../main';

const Register = () => {

    const {createUser} = use(AuthContext)
    console.log(createUser)

    // const useInfo = use(AuthContext);
    // console.log("in registration", useInfo)
    

    const handleRegister = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log('form was submited', email, password)
        //
        createUser(email, password)
            .then(result =>{
                console.log(result.user)
                
            })
            .catch(error => {
                console.log(error)
            })


        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }




    return (
        <div>
            <div className="hero bg-base-200 min-h-screen w-full mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
                {/* email field */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          {/* password filled */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register here</button>
        </fieldset>
        </form>
       <p>Already Have an account? <Link to="/login" className='text-blue-700 hover:text-red-700'>Login</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;