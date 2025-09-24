import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';
import { Button } from 'flowbite-react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Nav';

const App = () => {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        
        </Route>
      </Routes>
    </BrowserRouter> */}
    {/* <Button color="yellow">
        Hello Guys
      </Button> */}
      <Navbar/>
      <Sidebar/>
    </>
  );
};

export default App;
