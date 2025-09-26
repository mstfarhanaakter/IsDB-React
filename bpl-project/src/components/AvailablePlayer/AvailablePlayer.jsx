import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayer = ({ playerPromise, setAvailableBalance, availableBalance }) => {
    const playerData = use(playerPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                playerData.map(player =>
                    <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} />

                )
            }

        </div>
    );
};

export default AvailablePlayer;