import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
