import React from 'react';
import Nav from '../Nav/Nav';
import { Link, Outlet } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <Nav />
            <h1>This is my About Us page</h1>
            <div>
                <ul>
                    <li><Link to="company">About the Company</Link></li>
                    <li><Link to="team">About the Team</Link></li>
                    <li><Link to="careers">About Careers</Link></li>

                </ul>
            </div>
            <Outlet />

        </div>
    );
};

export default AboutUs;