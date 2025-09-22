import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='flex gap-6 p-5 bg-gray-500 text-white font-bold justify-end text-right  '>
            <div className='flex justify-start'>
                <img src="/src/assets/img/pizza.png" alt="Pizza" className='w-[25px] h-[25px]' />
            </div>
            
            <span><Link to="/">Home</Link></span>
            <span><Link to="/about">Menu</Link></span>
            <span><Link to="/Contact">Services</Link></span>
            <span><Link to="/Contact">Blog</Link></span>
            <span><Link to="/about">About</Link></span>
            <span><Link to="/Contact">Contact</Link></span>

            

        </div>
    );
};

export default Nav;