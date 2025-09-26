import React from 'react';

import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayer = ({ purchasedPlayers, removePlayer}) => {
    console.log(purchasedPlayers)
    return (
        <div>
        {
            purchasedPlayers.map(player => <SelectedCard
            purchasedPlayers= {purchasedPlayers}
             player={player}
             removePlayer={removePlayer}>
            </SelectedCard>)
        }
        </div>
    );
};

export default SelectedPlayer;