import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import LayoutCopy from './components/LayoutCopy';







const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
   
    <Route path="/" element={<LayoutCopy />} >
      <Route index element={<Home />} />
    
    </Route>
    
    

    
    
    
   
   </Routes>
   
   
   
   </BrowserRouter>
   </>
  );
};

export default App;