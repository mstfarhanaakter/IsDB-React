import React, { Suspense } from 'react';
import Nav from './components/Navbar/Nav';
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';

const fetchURL = async () => {
  const res = await fetch('/player.json')
  return res.json()
}


const App = () => {
    const fetchPromise = fetchURL()
  return (

  
    <>
     <Nav></Nav>
    <Suspense fallback= {<span className="loading loading-bars loading-xl"></span>}>
      <AvailablePlayer fetchPromise={fetchPromise}></AvailablePlayer>

    </Suspense>

   
    
    <SelectedPlayer></SelectedPlayer>
    </>
    
  );
};

export default App;