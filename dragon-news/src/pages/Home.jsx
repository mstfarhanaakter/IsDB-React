import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
            {/* <h1>Home page</h1> */}
            <Navigate to='/category/0'></Navigate>
        </div>
    );
};

export default Home;