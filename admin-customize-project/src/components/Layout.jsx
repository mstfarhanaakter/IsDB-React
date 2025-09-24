import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { Sidebar } from 'flowbite-react';

const Layout = () => {
    return (
        <div>
        <Nav/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </div>
    );
};

export default Layout;