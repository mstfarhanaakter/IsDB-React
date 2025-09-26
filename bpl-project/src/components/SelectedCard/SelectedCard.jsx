import React from 'react';
import deleteImg from '../../assets/Frame.png'

const SelectedCard = ({player, removePlayer}) => {
    const handleRemove = ()=> [
        removePlayer(player)
    ]
    return (
        <div className='max-w-[1200px] mx-auto mt-4  '>
            <div className='flex justify-between p-3 border-1 border-gray-400 rounded-xl '>
                <div className='flex'>
                    <img src={player.player_image} alt={player.player_name} className='w-[50px] h-[50px] object-cover rounded-xl' />
                    <div className='ml-3 items-center'>
                        <h1 className='font-bold'>{player.player_name}</h1>
                        <p className='text-sm text-gray-400'>{player.playing_role}</p>
                    </div>
                    
                </div>
                <div onClick={handleRemove} className=' flex items-center'>
                    <img src={deleteImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default SelectedCard;