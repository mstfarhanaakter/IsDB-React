import React, { useState } from 'react';
import User from '../../assets/user-1.png'
import Flag from '../../assets/report.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance,purchasedPlayers, setPurchasedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))
        if (availableBalance < playerPrice) {
            toast("You haven't enough money to purchase the player!")
        }
        if(purchasedPlayers.length ===6){
            toast("6 players already selected!")
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers, playerData])
        toast("Wohoo, Player Purchased!")

    }
    return (
        <div className="card bg-base-100 shadow-sm p-4 mt-4">
            <figure>
                <img
                    src={player.player_image}
                    alt="Player"
                    className='w-full h-[300px] object-cover' />
            </figure>
            <div className="mt-4">
                <h2 className="card-title">
                    <img src={User} alt="" />{player.player_name}</h2>
                <div className='flex justify-between mt-4 border-b-1 border-gray-300 pb-2'>
                    <div className='flex items-center'>
                        <img src={Flag} alt="" className='w-[20px] h-[20px]' /> <span className='ml-2'>{player.player_country}</span>
                    </div>
                    <div>
                        <button className='btn btn-sm'>{player.playing_role}</button>
                    </div>
                </div>

                {/* new section */}
                <div className=''>
                    <div className='flex justify-between font-bold mt-2'>
                        <span>Rating</span>
                        <span>{player.rating}</span>
                    </div>

                    <div className='flex justify-between mt-2'>
                        <span className='font-bold'>{player.bating_style}</span>
                        <span className='text-gray-500'>{player.bowling_style}</span>
                    </div>

                    <div className="card-actions flex justify-between items-center mt-2">
                        <p className='font-bold'>Price: ${player.price}</p>
                        <button disabled={isSelected} onClick={() => { handleSelected(player) }
                        } className="btn btn-sm ">{isSelected === true ? "Selceted" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;