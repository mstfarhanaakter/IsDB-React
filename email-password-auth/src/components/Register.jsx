import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';




const Register = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  //toggle password 

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }


  const formSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log("Form was submitted", name, photo);
    console.log("Email:", email);
    console.log("Password:", password);



    // //length password
    // const passwordPattern = /^.{6,}$/
    // //casePassword
    // const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/
    // if(!passwordPattern.test(password)){
    //   console.log('Password didn\'t match')
    //   setError('Password must be 6 character or longer')
    //   return;
    // }
    // else if(!casePattern.test(password)){
    //   setError("Password Must have at least one UpperCase and LowerCase.")
    //   return;
    // }

    //using length 6 or more, uppercase, lowercase and special character//

    const passowrdValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passowrdValidate.test(password)) {
      setError("Password must have uppercase, lowercase, special character, and be 6+ characters long.");
      return;
    }

    //reset status: error & success 
    setError('')
    setSuccess(false)
    if(!terms){
      setError("Please accept our terms and conditions.")
      return;
    }

    createUserWithEmailAndPassword(auth, email, password, terms)
      .then(result => {
        console.log("After creation of new User", result.user)
        setSuccess(true)
        e.target.reset()

        //update user profile 

        const profile = {
          displayName: name,
          photoURL: photo
        }

        updateProfile(result.user, profile)
        .then(()=>{
        })
        .catch()

        //send verification email 
        sendEmailVerification(result.user)
        .then(()=>{
          alert("Please login to your email and verify your email address ")
        })
      })
      .catch(error => {
        console.log("Error Happened", error.message)
        setError(error.message)
      })
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={formSubmit}>
                <fieldset className="fieldset">
                  {/* user name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"  // ✅ এখানে name অ্যাট্রিবিউট থাকতে হবে
                    className="input"
                    placeholder="Your Name"
                  />

                  {/* user photo */}
                  <label className="label">Photo</label>
                  <input
                    type="text"
                    name="photo"  // ✅ এখানে name অ্যাট্রিবিউট থাকতে হবে
                    className="input"
                    placeholder="Photo URL"
                  />

                  {/* user email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"  // ✅ এখানে name অ্যাট্রিবিউট থাকতে হবে
                    className="input"
                    placeholder="Email"
                  />

                  <div className='relative'>
                    <label className="label">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password" // ✅ এইটাও ঠিক আছে
                      className="input"
                      placeholder="Password"
                    />
                    <button
                      onClick={handleTogglePassword}
                      className="btn btn-xs absolute top-7 right-2">{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
                  </div>
                  <div>

                    <label className="label">
                      <input type="checkbox" name='terms' className="checkbox" />
                      Accept our terms and conditions.
                    </label>
                  </div>

                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  <button className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>
                <p>Already have an account? Please <Link className='text-blue-500 underline' to='/login'>Login</Link></p>
                {
                  success && <p className='text-green-700'>Account Created Successfully!</p>
                }
                {
                  error && <p className='text-red-500'>{error}</p>
                }
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;