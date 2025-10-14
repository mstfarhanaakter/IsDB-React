import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.init';

const Login = () => {
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    //reset error
    setError('')


    signInWithEmailAndPassword(auth, email, password )
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
      setError(error.message)
    })
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <fieldset className="fieldset">
          <label className="label" >Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label" >Password</label>
          <input type="password" className="input" name="password" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        {
          error && <p className='text-red-600'>{error}</p>
        }
        <p>New to our website? Please <Link className='text-blue-500 underline' to='/register'>Register</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;