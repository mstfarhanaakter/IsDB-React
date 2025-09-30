import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import LayoutCopy from './components/LayoutCopy';
import Users from './pageTravel/Users';
import Roles from './pageTravel/Roles';
import NewPackage from './pageTravel/NewPackage';
import ManagePackage from './pageTravel/ManagePackage';
import NewTour from './pageTravel/NewTour';
import ManageTour from './pageTravel/ManageTour';







const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
   
    <Route path="/" element={<LayoutCopy />} >
      <Route index element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/manage-roles" element={<Roles />} />
      <Route path="/add-package" element={<NewPackage />} />
      <Route path="/manage-packages" element={<ManagePackage />} />
      <Route path="/add-tour" element={<NewTour />} />
      <Route path="/manage-tours" element={<ManageTour />} />
    
    </Route>
    
    

    
    
    
   
   </Routes>
   
   
   
   </BrowserRouter>
   </>
  );
};

export default App;