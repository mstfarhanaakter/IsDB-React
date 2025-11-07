import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3 mt-3'>
            <img src={logo} alt="" className='w-[400px]' />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-semibold text-accent'>{format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
           

        </div>
    );
};

export default Header;