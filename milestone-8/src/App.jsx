
import './App.css'

import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import AppsCard from './components/AppsCard/AppsCard';
import Footer from './components/Footer/Footer';

const appFetch =fetch('../appinfo.json').then(res =>res.json())

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
    <Suspense fallback={<div>Loading........</div>}>

<AppsCard appFetch={appFetch} />

    </Suspense>
    <br></br>
    <Footer></Footer>
      
    </div>
  );
};

export default App;
