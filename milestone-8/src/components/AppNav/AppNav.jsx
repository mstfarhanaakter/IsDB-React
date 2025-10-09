import React from 'react';
// import img from '../../assets/img/demo-app (2).webp'
import Downimg from '../../assets/img/icon-downloads.png'
import rating from '../../assets/img/icon-ratings.png'
import review from '../../assets/img/icon-review.png'
const AppNav = ({x}) => {
    const { title, image, ratingAvg, downloads, id, companyName } = x;
    return (
        <div className="max-w-[1200px] mx-auto bg-[#F5F5F5] flex border-b border-gray-400 mt-4 p-4">

            <div className='mt-7'>
                <img src={image} alt="" />
            </div>
            <div className='mt-7 ms-6 '>
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p className='text-gray-600 border-b border-gray-400 w-[300px] py-3'>Developed by<span className='text-purple-600'> {companyName}</span></p>

                <div className="flex mt-4 items-center gap-6">
                    <div className="flex flex-col items-center">
                        <img src={Downimg} alt="" className="w-[30px] h-[30px]" />
                        <p className="text-sm text-gray-700 mt-1">Downloads</p>
                        <p className='font-bold'>{downloads}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={rating} alt="" className="w-[30px] h-[30px]" />
                        <span className="text-sm text-gray-700 mt-1">Average Ratings</span>
                        <p className='font-bold'>{ratingAvg}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={review} alt="" className="w-[30px] h-[30px]" />
                        <span className="text-sm text-gray-700 mt-1">Total Reviews</span>
                        <p className='font-bold'>{ratingAvg}</p>
                    </div>


                </div>
                <div className='mt-4'>
                    <button className="bg-[#00D390] text-white px-5 py-2 hover:bg-[#00b87a] transition">
                        Install (size)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppNav;