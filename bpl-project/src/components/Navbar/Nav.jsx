import React from 'react';
import navImg from '../../assets/logo.png'
import coinImg from '../../assets/money-bag.png'

const Nav = () => {
    return (
        <div>
     <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img className='w-[60px] h-[60px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex items-center" >
    <span className='mr-1'>6000000000 </span>

    <span className='mr-1'>Coin</span>
    <img className='w-[30px]' src={coinImg} alt="" />
  </div>
</div>
    </div>
    );
};

export default Nav;