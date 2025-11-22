import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ name, photo, email, password });

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User Created:", user);
            })
            .catch(error => {
                console.error("Error creating user:", error);
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="hero bg-base-200">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-2">

                    <form className="card-body" onSubmit={handleRegister}>
                        <h1 className='font-semibold text-center text-2xl'>Register Your Account</h1>

                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input type="text" className="input" name="name" placeholder="Your Name" required />

                            {/* photo */}
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" name="photo" placeholder="Your Photo" required />

                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" required />

                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" required />

                            <button type="submit" className="btn btn-neutral mt-4">Register</button>

                            <p className="text-center text-primary font-semibold py-5">
                                Already have an account?
                                <Link to="/auth/login" className="text-secondary font-bold"> Login</Link>
                            </p>
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;
