import React from 'react';
import logoImg from '../../assets/img/logo.png';
import gitImg from '../../assets/img/github.png';
const Navbar = () => {
  return (
    <div className='w-full bg-white'>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a className='text-[#703ae1] font-semibold'>Home</a></li>
              <li><a className='text-[#703ae1] font-semibold'>Apps</a></li>
              <li className='text-[#703ae1] font-semibold'><a>Installation</a></li>

            </ul>
          </div>
          <div className="">
            <span className="w-[50px] flex items-center text-[#703ae1] font-bold p-2"><img src={logoImg} alt="" />HERO.IO</span>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className='text-[#703ae1] font-semibold'>Home</a></li>
            <li><a className='text-[#703ae1] font-semibold'>Apps</a></li>
            <li className='text-[#703ae1] font-semibold'><a>Installation</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><img src={gitImg} alt="" /> Contribution</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;