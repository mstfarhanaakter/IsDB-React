import React, { Suspense, useState } from 'react';
import Nav from './components/Navbar/Nav';
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';

const fetchPlayer = async () => {
  const res = await fetch('/player.json')
  return res.json()
}

const playerPromise = fetchPlayer()

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000)
  
    
  return (
  
  
    <>
     <Nav availableBalance={availableBalance}></Nav>
     <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>{toggle === true? "Available Players": "Selcted Player"}</h1>
      <div className=''>
        <button onClick={()=> setToggle(true)} className={`py-2 px-4 border-1 border-gray-400 border-r-0 rounded-l-2xl ${toggle === true? "bg-[#e7fe29]": ""}`}>Available</button>
        <button onClick={()=> setToggle(false)} className={`py-2 px-4 border-1 border-gray-400 border-l-0 rounded-r-2xl ${toggle === false? "bg-[#e7fe29]": ""}`}>Selected <span>(0)</span></button>
      </div>

     </div>

     {
      toggle === true? <Suspense fallback= {<span className="loading loading-bars loading-xl"></span>}>
      <AvailablePlayer availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayer>
    </Suspense> :  <SelectedPlayer></SelectedPlayer>
     }
    

   
    
   
    </>
    
  );
};

export default App;