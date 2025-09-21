import React from 'react';
import Nav from '../Nav/Nav';

const AboutUs = () => {
    return (
        <div>
          <Nav />
            <h1>This is my About Us page</h1>
            Outlet
        </div>
    );
};

export default AboutUs;