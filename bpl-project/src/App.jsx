import React, { Suspense, useState } from 'react';
import Nav from './components/Navbar/Nav';
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';
import {ToastContainer} from 'react-toastify';

const fetchPlayer = async () => {
  const res = await fetch('/player.json')
  return res.json()
}

const playerPromise = fetchPlayer()

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  // console.log(purchasedPlayers)

  const removePlayer = (p) =>{
    const filterPlayer = purchasedPlayers.filter(ply => ply.player_name !== p.player_name)
    console.log(filterPlayer)
    console.log(p)
    setPurchasedPlayers(filterPlayer)
    setAvailableBalance(availableBalance + parseInt(p.price.split("USD").join("").split(",").join("")));

  }
  
    
  return (
  
  
    <>
     <Nav availableBalance={availableBalance}></Nav>
     <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>{toggle === true? "Available Players":`Selected Player (${purchasedPlayers.length}/6)`}</h1>
      <div className=''>
        <button onClick={()=> setToggle(true)} className={`py-2 px-4 border-1 border-gray-400 border-r-0 rounded-l-2xl ${toggle === true? "bg-[#e7fe29]": ""}`}>Available</button>
        <button onClick={()=> setToggle(false)} className={`py-2 px-4 border-1 border-gray-400 border-l-0 rounded-r-2xl ${toggle === false? "bg-[#e7fe29]": ""}`}>Selected <span>({purchasedPlayers.length})</span></button>
      </div>

     </div>

     {
      toggle === true? <Suspense fallback= {<span className="loading loading-bars loading-xl"></span>}>
      <AvailablePlayer 
      availableBalance={availableBalance} 
      setAvailableBalance={setAvailableBalance} 
      playerPromise={playerPromise}
      purchasedPlayers = {purchasedPlayers}
      setPurchasedPlayers= {setPurchasedPlayers}
      
      
      >

      </AvailablePlayer>
    </Suspense> :  <SelectedPlayer 
                        purchasedPlayers={purchasedPlayers}
                        removePlayer={removePlayer}></SelectedPlayer>
     }
    

   
    <ToastContainer/>
   
    </>
    
  );
};

export default App;