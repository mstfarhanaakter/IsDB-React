import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="hero bg-base-200">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-2">

                    <div className="card-body">
                        <h1 className='font-semibold text-center text-2xl '>Register Your Account</h1>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Your Name" name='name' />
                            {/* photo */}
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Your Photo" name='photo' />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' />

                           

                            <button className="btn btn-neutral mt-4">Register</button>
                            <p className='text-center text-primary font-semibold py-5'>Already have an account?
                                <Link to='/auth/login' className='text-secondary font-bold'> Login</Link></p>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;