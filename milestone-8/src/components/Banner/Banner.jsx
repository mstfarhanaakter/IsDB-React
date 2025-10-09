import React from 'react';
import socialImage from '../../assets/img/social.png'
import bannerImg from '../../assets/img/hero.png'

const Banner = () => {
    return (
        <div className='bg-[#f5f5f5] pt-10'>
  {/* Main Content */}
  <div className='max-w-[1200px] mx-auto p-5 text-center'>
    <h1 className='font-bold text-4xl text-[#182f44]'>We Build</h1>
    <h1 className='font-bold text-4xl text-[#182f44] mt-2'>
      <span className='text-[#703ae1]'>Productive </span>Apps
    </h1>

    <p className='mt-5 text-[#627382] max-w-xl mx-auto'>
      At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
      Our goal is to turn your ideas into digital experiences that truly make an impact.
    </p>

    <div className='mt-6'>
      <img className='mx-auto' src={socialImage} alt="" />
    </div>

    <div className='mt-8'>
      <img className='mx-auto w-full max-w-lg sm:max-w-2xl' src={bannerImg} alt="" />
    </div>
  </div>

  {/* Banner Information - Full Width */}
  <div className='w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-10'>
    <div className='max-w-[1200px] mx-auto px-5 text-center'>
      <h1 className='font-bold text-2xl sm:text-3xl'>Trusted by Millions, Built for You</h1>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center'>
        <div>
          <h2 className='text-[#e6dafb]'>Total Downloads</h2>
          <p className='font-bold text-3xl sm:text-4xl mt-2'>29.6M</p>
          <p className='mt-1 text-[#e6dafb]'>21% more than last month</p>
        </div>

        <div>
          <h2 className='text-[#e6dafb]'>Total Reviews</h2>
          <p className='font-bold text-3xl sm:text-4xl mt-2'>906K</p>
          <p className='text-[#e6dafb] mt-1'>46% more than last month</p>
        </div>

        <div>
          <h2 className='text-[#e6dafb]'>Active Apps</h2>
          <p className='font-bold text-3xl sm:text-4xl mt-2'>132+</p>
          <p className='text-[#e6dafb] mt-1'>31 more will launch</p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Banner;