import React from 'react';
import logoImg from '../../assets/img/logo.png';
import { Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <div className='bg-black p-4'>
    <div className="flex justify-between items-center border-b border-gray-900 p-3">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold">
            <img src={logoImg} alt="Logo" className="h-8 w-8" />
            HERO.IO
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-4 text-white font-bold ">
            <div className="flex gap-2 text-xl">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-x-twitter"></i>
            </div>
            Social Links
        </div>
    </div>
    <div className='text-white text-center p-4'>
        <p>Copyright @2025 - All right reserved. </p>
    </div>
</div>

    );
};

export default Footer;