import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="hero bg-base-200">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-2">

                    <div className="card-body">
                        <h1 className='font-semibold text-center text-2xl '>Login Your Account</h1>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='text-center text-primary font-semibold py-5'>Don't have an acoount?
                                <Link to='/auth/register' className='text-secondary font-bold'> Register</Link></p>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;