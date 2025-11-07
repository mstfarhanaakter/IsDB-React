import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import swimImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'
import bgImg from '../../assets/bg.png'

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-4'>Login with</h1>
            <div className='space-y-2'>

                {/* Google */}
                <button className='btn btn-outline w-full btn-secondary'>
                    <FcGoogle size={24} /> Login with Google</button>
                {/* GitHub */}
                <button className='btn btn-outline btn-primary  w-full'><FaGithub size={24} />Login with Github</button>
            </div>
            <div className='mt-5 space-y-2 w-full'>
                <h2 className='font-semibold'>Find Us On</h2>

                {/* facebook */}
                <button className='btn btn-outline btn-info  w-full'><FaFacebook size={24} />Login with Facebook</button>
                {/* Instagram */}
                <button className='btn btn-outline btn-success  w-full'><FaInstagram size={24} />Login with Github</button>
                {/* Twitter */}
                <button className='btn btn-outline btn-warning  w-full'><FaTwitter size={24} />Login with Github</button>
            </div>

            <div className='bg-base-300 mt-4 p-2 space-y-3'>
                <h2 className='text-semibold'>Q-Zone</h2>
                <img src={swimImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>

            {/* 3rd options */}

            <div className='mt-5'>
                <img src={bgImg} alt="" />
            </div>


        </div>
    );
};

export default SocialLogin;