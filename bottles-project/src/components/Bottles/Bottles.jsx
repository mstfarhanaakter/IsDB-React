import React, { use } from 'react';

const Bottles = (fetchURL) => {
    const fetchData = use(fetchURL )
    return (
        <div>
            <h1>This is the World</h1>
            {
                fetchData.map(x => x.brand)
            }
        </div>
    );
};

export default Bottles;