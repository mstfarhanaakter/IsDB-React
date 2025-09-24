import React, { use } from 'react';

const AvailablePlayer = ({fetchPromise}) => {
    const availablePlayer = use(fetchPromise)
    return (
        <div>
            hello
        </div>
    );
};

export default AvailablePlayer;