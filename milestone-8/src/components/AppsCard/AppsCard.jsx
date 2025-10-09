import React, { use } from 'react';

import AppCards from './AppCards';

const AppsCard = ({appFetch}) => {
    const appData = use(appFetch)
    console.log(appData)
    return (
        <div className='max-w-[1200px] mx-auto mt-3'>
            <h1 className='text-center mt-3 font-bold text-2xl p-2'>Trending Apps</h1>
            <p className='text-[#627382] text-center mt-1'>Explore all Trending Apps on the Market Developed by us</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 '>
            {
                appData.map(x => <AppCards key={x.id} x={x} ></AppCards>)
            }
         </div>
        </div>
    );
};

export default AppsCard;