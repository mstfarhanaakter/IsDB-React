import React from 'react';
import downloadImg from '../../assets/img/icon-downloads.png'
import ratingImg from '../../assets/img/icon-ratings.png'

const AppCards = ({ x }) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='bg-white shadow-sm w-[300px] mt-4 '>
                <img src={x.image} alt="" className='p-3 mx-auto h-[280px] w-[280px] object-fit-cover' />
                <h1 className='ms-4 text-2xl font-bold'>{x.title}</h1>
                <div className="flex justify-between items-center px-3 mt-2 p-4">
                    <p className="flex items-center gap-1 text-[#00d390] font-bold bg-[#f1f5e8] p-1">
                        <img src={downloadImg} alt="downloads" className="w-5 h-5" />
                        {x.downloads}
                    </p>
                    <p className="flex items-center gap-1 text-[#ff8811] font-bold bg-[#f1f5e8] p-1">
                        <img src={ratingImg} alt="rating" className="w-5 h-5" />
                        {x.ratingAvg}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppCards;